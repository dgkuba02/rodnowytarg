import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12 border-t">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 justify-items-center text-sm max-w-7xl w-full">
        {/* Sekcja 1: Nazwa i opis */}
        <div>
          <h2 className="text-lg font-semibold">ROD Podhale Nowy Targ</h2>
          <p className="mt-2">Rodzinne Ogrody Działkowe Podhale</p>
          <p>Nowy Targ, Polska</p>
        </div>

        {/* Sekcja 2: Linki nawigacyjne */}
        <div>
          <h3 className="font-semibold mb-2">Nawigacja</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="hover:underline">
                Strona główna
              </a>
            </li>
            <li>
              <a href="/aktualnosci" className="hover:underline">
                Aktualności
              </a>
            </li>
            <li>
              <a href="/galeri" className="hover:underline">
                Galeria
              </a>
            </li>
            <li>
              <a href="/kontakt" className="hover:underline">
                Kontakt
              </a>
            </li>
            <li>
              <a href="/dokumenty" className="hover:underline">
                Dokumenty
              </a>
            </li>
          </ul>
        </div>

        {/* Sekcja 3: Kontakt */}
        <div>
          <h3 className="font-semibold mb-2">Kontakt</h3>
          <p>
            Email:{" "}
            <a href="mailto:kontakt@rodnowytarg.pl" className="hover:underline">
              kontakt@rodpodhalenowytarg.pl
            </a>
          </p>
          <p>Telefon: 123 456 789</p>
          <p>Godziny: Pon–Pt 9:00–16:00</p>
        </div>
      </div>

      {/* Dolna linia stopki */}
      <div className="text-center text-xs mt-8 text-gray-500">
        © {new Date().getFullYear()} ROD Podhale Nowy Targ. Wszelkie prawa
        zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;
