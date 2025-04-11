// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; // ✅ import Navbar

export const metadata: Metadata = {
  title: "Auto India Spare Part",
  description: "Built for India. Inspired by Excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar /> {/* ✅ always show Navbar */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
