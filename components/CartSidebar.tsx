// components/CartSidebar.tsx
"use client";


import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function CartSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.aside
            className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-lg z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <button onClick={onClose} aria-label="Close cart">
                <X size={20} />
              </button>
            </div>

            {/* Dummy cart items */}
            <div className="p-4 space-y-4 flex-1 overflow-y-auto">
              <div className="border-b pb-2">
                <p className="font-medium">Brake Pads</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Qty: 1</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Oil Filter</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Qty: 2</p>
              </div>
              {/* Add more dummy products here */}
            </div>

            <div className="p-4 border-t border-gray-300 dark:border-gray-700">
              <button className="w-full bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-full transition">
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
