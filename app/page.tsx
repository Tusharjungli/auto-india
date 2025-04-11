// app/page.tsx
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground px-6 py-20 flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-red-600 drop-shadow-xl">
          Auto India Spare Part
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-muted">
          Premium automobile spare parts delivered with trust, speed, and style. Inspired by excellence. Built for India. 🇮🇳
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition">
          Explore Products
        </button>
      </main>

      <ProductGrid />
    </>
  );
}
