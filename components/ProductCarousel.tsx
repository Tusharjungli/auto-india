// app/components/ProductCarousel.tsx

"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const dummyProducts = [
  { id: 1, name: "Air Filter", img: "/placeholder.png" },
  { id: 2, name: "Brake Pad", img: "/placeholder.png" },
  { id: 3, name: "Clutch Plate", img: "/placeholder.png" },
  { id: 4, name: "Engine Oil", img: "/placeholder.png" },
  { id: 5, name: "Headlamp", img: "/placeholder.png" },
  { id: 6, name: "Car Battery", img: "/placeholder.png" },
];

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 1.5;
    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full py-6">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 px-12 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
      >
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[220px] snap-center bg-white dark:bg-neutral-800 rounded-xl shadow-md p-4 flex-shrink-0 text-center"
          >
            <Image src={product.img} alt={product.name} width={200} height={200} className="mx-auto rounded" />
            <h3 className="mt-2 font-medium">{product.name}</h3>
          </div>
        ))}
      </div>

      {/* Left/Right arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
