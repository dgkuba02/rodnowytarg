import React, { useRef } from "react";
import { galleryData } from "../data/galleryData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">Galeria</h2>

      <div className="relative">
        {/* Strzałka lewa */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow p-2 z-10"
        >
          <ChevronLeft />
        </button>

        {/* Kontener przewijania */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-hidden scroll-smooth px-10"
        >
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="relative w-[576px] aspect-[3/2] flex-shrink-0 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Strzałka prawa */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow p-2 z-10"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Przycisk "Zobacz wszystkie" */}
      <div className="mt-6 text-right">
        <a
          href="/galerie"
          className="text-blue-600 hover:underline font-medium"
        >
          Zobacz wszystkie zdjęcia →
        </a>
      </div>
    </section>
  );
}
