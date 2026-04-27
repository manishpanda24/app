import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FounderServices from "./pages/FounderServices";
import ServiceDetail from "./pages/ServiceDetail";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App bg-amg-cream min-h-screen">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/founder-services" element={<FounderServices />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
