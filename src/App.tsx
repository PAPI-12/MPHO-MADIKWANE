import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebsiteNav, Footer } from "./components/WebsiteNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Impact from "./pages/Impact";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-paper text-ink font-sans selection:bg-ink selection:text-paper">
        <WebsiteNav />
        <main className="pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
