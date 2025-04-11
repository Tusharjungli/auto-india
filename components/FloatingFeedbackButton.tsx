// components/FloatingFeedbackButton.tsx
"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";

const FloatingFeedbackButton = () => {
  return (
    <Link
      href="/feedback"
      className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition"
      aria-label="Feedback"
    >
      <MessageSquare size={20} />
    </Link>
  );
};

export default FloatingFeedbackButton;
