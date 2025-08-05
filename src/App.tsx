import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import NewsList from "./components/newslist.tsx";
import Gallery from "./components/gallery.tsx";
import ContactSection from "./components/contactsection.tsx";
import Footer from "./components/footer.tsx";

const Home = () => (
  <div>
    <NewsList />
    <Gallery />
    <ContactSection />
  </div>
);
const Aktualnosci = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Wszystkie aktualności</h1>
    <NewsList showAll />
  </div>
);
const Galerie = () => (
  <div>
    <Gallery showAll />
  </div>
);
const Kontakt = () => <h1>Kontakt</h1>;
const Dokumenty = () => <h1>Dokumenty i Regulaminy</h1>;

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-6 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aktualnosci" element={<Aktualnosci />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/dokumenty" element={<Dokumenty />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
