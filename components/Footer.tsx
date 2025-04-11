"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 md:border-none pb-4 md:pb-0">
      <div
        className="flex items-center justify-between md:block cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h4 className="font-semibold mb-3 md:mb-4">{title}</h4>
        <span className="md:hidden text-white">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </div>
      <div className={`${open ? "block" : "hidden"} md:block`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm md:text-base">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <Section title="My Account">
          <ul className="space-y-2">
            <li><Link href="#">Login</Link></li>
            <li><Link href="#">Order History</Link></li>
            <li><Link href="#">Testimonials</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
          </ul>
        </Section>

        <Section title="Explore">
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/feedback">Feedback</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </Section>

        <Section title="Policies">
          <ul className="space-y-2">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Shipping Policy</Link></li>
            <li><Link href="#">Return Policy</Link></li>
            <li><Link href="#">Disclaimer</Link></li>
          </ul>
        </Section>

        <Section title="Connect With Us">
          <div className="space-y-2">
            <div className="flex gap-4 text-xl mb-2">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
            <p>WhatsApp: <a href="tel:+919150899330" className="underline">+91 91508 99330</a></p>
            <p>Phone: <a href="tel:+914442075839" className="underline">+91-44-42075839</a></p>
            <p>Email: <a href="mailto:support@autoindiaspare.com" className="underline">support@autoindiaspare.com</a></p>
          </div>
        </Section>
      </div>

      <div className="max-w-7xl mx-auto mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-6">
        <p>© Auto India Spare Part 2025 — Built for India. Inspired by Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
