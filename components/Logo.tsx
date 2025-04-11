// components/Logo.tsx
"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const logoSrc = resolvedTheme === "dark" ? "/logo-white.png" : "/logo-dark.png";

  return (
    <Image
      src={logoSrc}
      alt="Auto India Spare Part Logo"
      width={90}
      height={10}
      priority
    />
  );
}
