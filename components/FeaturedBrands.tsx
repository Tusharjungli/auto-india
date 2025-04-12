"use client";

import Image from "next/image";

const brands = [
  { name: "Tata", logo: "/brands/tata.png" },
  { name: "Hyundai", logo: "/brands/hyundai.png" },
  { name: "Mahindra", logo: "/brands/mahindra.png" },
  { name: "KIA", logo: "/brands/kia.png" },
  { name: "HONDA", logo: "/brands/honda.png" },
  { name: "MG", logo: "/brands/MG.png" },
  { name: "Skoda", logo: "/brands/Skoda.png" },
  { name: "Renault", logo: "/brands/Renault.png" },
  { name: "Toyota", logo: "/brands/Toyota.png" },
  { name: "Volkswagen", logo: "/brands/Volkswagen.png" },
  { name: "Ford", logo: "/brands/ford.png" },
  { name: "Suzuki", logo: "/brands/Suzuki.png" },

];

export default function FeaturedBrands() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
        Trusted Brands We Carry
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center max-w-6xl mx-auto">
        {brands.map((brand) => (
          <div key={brand.name} className="opacity-80 hover:opacity-100 transition">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={100}
              height={60}
              className="object-contain grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
