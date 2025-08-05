import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 max-w-6xl mx-auto px-4 w-full">
        <div className="text-xl font-bold">
          <Link to="/">ROD Podhale Nowy Targ</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:opacity-75 ease-in-out">
              Strona główna
            </Link>
          </li>
          <li>
            <Link to="/aktualnosci" className="hover:opacity-75">
              Aktualności i Ogłoszenia
            </Link>
          </li>
          <li>
            <Link to="/galerie" className="hover:opacity-75">
              Galerie
            </Link>
          </li>
          <li>
            <Link to="/kontakt" className="hover:opacity-75">
              Kontakt
            </Link>
          </li>
          <li>
            <Link to="/dokumenty" className="hover:opacity-75">
              Dokumenty
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
