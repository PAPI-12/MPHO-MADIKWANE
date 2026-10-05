import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebsiteNav, Footer } from "./components/WebsiteNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Impact from "./pages/Impact";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import PhotorealismStudio from "./pages/PhotorealismStudio";
import { Cover } from "./components/Cover";
import { Nav } from "./components/Nav";
import { Part01 } from "./components/Part01";
import { Part02 } from "./components/Part02";
import { Part03 } from "./components/Part03";
import { Part04 } from "./components/Part04";
import { Part05 } from "./components/Part05";
import { Part06 } from "./components/Part06";
import { Closing } from "./components/Closing";

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
            <Route path="/studio" element={<PhotorealismStudio />} />
            <Route
              path="/strategy"
              element={
                <>
                  <Nav />
                  <Cover />
                  <Part01 />
                  <Part02 />
                  <Part03 />
                  <Part04 />
                  <Part05 />
                  <Part06 />
                  <Closing />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
