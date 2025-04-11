// components/Navbar.tsx
"use client";

import { Search, Heart, ShoppingBag } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { label: "Products", href: "/products" },
    { label: "Brands", href: "/brands" },
    { label: "Track Order", href: "/track" },
    { label: "Support", href: "/support" },
  ];

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-background text-foreground shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-6">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:text-primary transition">
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-4">
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full">
        <Search size={18} className="mr-2 text-gray-500 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm w-24 sm:w-40 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>
        <Heart className="cursor-pointer" />
        <ShoppingBag className="cursor-pointer" />
      </div>
    </header>
  );
}
