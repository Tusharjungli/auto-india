"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass,
  Heart,
  ShoppingBag,
  CaretDown,
  User,
  MapPin,
  List,
  X,
} from "phosphor-react";
import Logo from "./Logo";
import Link from "next/link";
import CartSidebar from "./CartSidebar";
import WishlistDrawer from "./WishlistDrawer";

const navLinks = [
  { label: "Brands", href: "/brands" },
  { label: "Feedback", href: "/feedback" },
  { label: "Support", href: "/support" },
];

const productDropdownItems = [
  { label: "Filters", href: "/products/filters" },
  { label: "Engine Parts", href: "/products/engine" },
  { label: "Electrical", href: "/products/electrical" },
  { label: "Body Parts", href: "/products/body" },
];

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full px-6 py-4 flex items-center justify-between bg-background text-foreground shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-6 relative">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden md:flex space-x-6 font-medium text-sm">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center hover:text-primary transition"
              >
                Products
                <CaretDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-lg py-2 z-50"
                  >
                    {productDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} className="hover:text-primary transition">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full">
            <MagnifyingGlass size={18} className="mr-2 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-24 sm:w-40 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div title="Select Location"><MapPin className="cursor-pointer" /></div>
          <div title="Login / Sign Up"><User className="cursor-pointer" /></div>
          <div title="Wishlist">
            <Heart className="cursor-pointer" onClick={() => setWishlistOpen(true)} />
          </div>
          <div title="Cart">
            <ShoppingBag className="cursor-pointer" onClick={() => setCartOpen(true)} />
          </div>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <List size={24} />
        </button>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setWishlistOpen(false)} />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-neutral-900 text-black dark:text-white z-50 shadow-lg flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <Logo />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-lg font-medium">
              <Link href="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
              {navLinks.map(({ label, href }) => (
                <Link key={href} href={href} onClick={() => setMobileMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col space-y-4 border-t pt-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Set Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>Sign In</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart size={18} />
                <span>Wishlist</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingBag size={18} />
                <span>Cart</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
