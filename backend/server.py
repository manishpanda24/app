from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import smtplib
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from email.message import EmailMessage
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactInquiry(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    stage: Optional[str] = None
    message: str

class ContactInquiryStored(ContactInquiry):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    recipient: str = "manishpanda24@gmail.com"
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact")
async def submit_contact_inquiry(input: ContactInquiry):
    if not input.name.strip() or not input.email.strip() or not input.message.strip():
        raise HTTPException(status_code=400, detail="Name, email and message are required.")

    inquiry = ContactInquiryStored(
        **input.model_dump(),
        recipient=os.environ.get("CONTACT_RECIPIENT_EMAIL", "manishpanda24@gmail.com"),
    )
    doc = inquiry.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.contact_inquiries.insert_one(doc)

    try:
        send_contact_email(inquiry)
    except Exception as exc:
        logger.exception("Failed to send contact inquiry email")
        raise HTTPException(status_code=502, detail="Message saved, but email delivery failed.") from exc

    return {"message": "Inquiry sent successfully."}

def send_contact_email(inquiry: ContactInquiryStored):
    smtp_host = os.environ.get("SMTP_HOST")
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ.get("SMTP_USER")
    smtp_password = os.environ.get("SMTP_PASSWORD")
    smtp_from = os.environ.get("SMTP_FROM_EMAIL", smtp_user or inquiry.recipient)

    if not smtp_host or not smtp_from:
        raise RuntimeError("SMTP_HOST and SMTP_FROM_EMAIL/SMTP_USER must be configured.")

    email = EmailMessage()
    email["Subject"] = f"New AMG inquiry from {inquiry.name}"
    email["From"] = smtp_from
    email["To"] = inquiry.recipient
    email["Reply-To"] = inquiry.email
    email.set_content(
        "\n".join([
            "New founder inquiry",
            "",
            f"Name: {inquiry.name}",
            f"Email: {inquiry.email}",
            f"Company: {inquiry.company or '-'}",
            f"Funding stage: {inquiry.stage or '-'}",
            "",
            "Message:",
            inquiry.message,
        ])
    )

    with smtplib.SMTP(smtp_host, smtp_port, timeout=20) as smtp:
        if os.environ.get("SMTP_USE_TLS", "true").lower() != "false":
            smtp.starttls()
        if smtp_user and smtp_password:
            smtp.login(smtp_user, smtp_password)
        smtp.send_message(email)

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
