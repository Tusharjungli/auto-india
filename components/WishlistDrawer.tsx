// components/WishlistDrawer.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function WishlistDrawer({
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
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-neutral-900 text-black dark:text-white z-50 shadow-lg flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
              <h2 className="text-lg font-semibold">My Wishlist</h2>
              <button onClick={onClose} aria-label="Close wishlist">
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-4 flex-1 overflow-y-auto">
              <div className="border-b pb-2">
                <p className="font-medium">Shock Absorber</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Added recently</p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Headlight Bulb</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Popular item</p>
              </div>
              {/* Add more dummy items if needed */}
            </div>

            <div className="p-4 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-muted">
              Wishlist items are saved for later checkout.
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
