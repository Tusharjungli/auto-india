"use client";

import Image from "next/image";

const products = [
  {
    name: "Brake Pads",
    image: "/placeholder.png",
    description: "Durable brake pads for all vehicles.",
  },
  {
    name: "Clutch Disc",
    image: "/placeholder.png",
    description: "OEM clutch discs built for performance.",
  },
  {
    name: "Air Filter",
    image: "/placeholder.png",
    description: "Improves engine performance and airflow.",
  },
  {
    name: "Oil Filter",
    image: "/placeholder.png",
    description: "Keeps engine oil clean and long-lasting.",
  },
  {
    name: "Radiator",
    image: "/placeholder.png",
    description: "Premium cooling for hot Indian summers.",
  },
  {
    name: "Alternator",
    image: "/placeholder.png",
    description: "Reliable voltage for your vehicle.",
  },
  {
    name: "Shock Absorber",
    image: "/placeholder.png",
    description: "Smooth ride for any terrain.",
  },
  {
    name: "Headlight Bulb",
    image: "/placeholder.png",
    description: "Bright and long-lasting lighting.",
  },
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
        Popular Spare Parts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={120}
              height={120}
              className="mb-4 object-contain"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
            <button className="mt-4 px-4 py-2 rounded-full bg-primary text-white hover:bg-red-700 transition text-sm">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
