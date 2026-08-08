# MongoDB Atlas + Vercel (fix "IP isn't whitelisted")

Vercel uses **dynamic IPs**. You cannot whitelist a single Vercel IP. Atlas must allow connections from anywhere used by serverless.

## 1. Atlas Network Access (required)

1. Open [MongoDB Atlas](https://cloud.mongodb.com/) → your project → **Network Access**.
2. Click **Add IP Address**.
3. Choose **Allow Access from Anywhere** (adds `0.0.0.0/0`).
4. Confirm and wait **1–2 minutes** for the rule to become active.

> For production hardening later, use [Vercel Static IPs](https://vercel.com/docs/connectivity/static-ip) (Pro) and whitelist only those IPs.

## 2. Database user

1. Atlas → **Database Access** → ensure your user has **readWrite** on the database (e.g. `blog_cms`).
2. If you reset the password, update `MONGODB_URI` in Vercel.

## 3. Connection string in Vercel

**Vercel** → CMS project → **Settings** → **Environment Variables** (Production):

| Variable | Value |
|----------|--------|
| `MONGODB_URI` | Atlas connection string (see below) |
| `PAYLOAD_SECRET` | Long random secret |
| `PAYLOAD_PUBLIC_SERVER_URL` | `https://cms-admin-amgvp.vercel.app` |
| `FRONTEND_ORIGIN` | Your live React app URL |

### Connection string format

- **Preferred on Vercel:** Atlas → Connect → **Drivers** → copy the **standard** `mongodb://...` string (not `mongodb+srv://` if you had SRV/DNS errors).
- URL-encode special characters in the password (`@` → `%40`, `#` → `%23`, etc.).

Example shape:

```
mongodb://USER:PASSWORD@cluster0-shard-00-00.xxxxx.mongodb.net:27017,.../blog_cms?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin
```

Do **not** set `MONGO_USE_LOCAL=true` on Vercel.

## 4. Redeploy

1. Save env vars in Vercel.
2. **Deployments** → **Redeploy** → enable **Clear build cache**.

## 5. Verify

- `https://cms-admin-amgvp.vercel.app/admin` — Payload admin loads
- `https://cms-admin-amgvp.vercel.app/api/posts` — JSON list of posts

## Frontend (React)

Set in your frontend Vercel project (or `frontend/.env.production`):

```
REACT_APP_CMS_URL=https://cms-admin-amgvp.vercel.app
```

Redeploy the frontend after changing this.
