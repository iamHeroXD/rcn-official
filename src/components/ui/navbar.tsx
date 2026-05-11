"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Premium", href: "#premium" },
    { name: "Support Us", href: "#support" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 hidden md:block ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${
          scrolled ? "glass-dark px-8 py-3 rounded-full border border-white/10" : ""
        }`}>
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-prime-purple group-hover:text-white transition-colors" />
            <span className="text-xl font-black text-white tracking-tighter">
              RCN <span className="text-white/40">PRIME</span>
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="rounded-full bg-white text-black hover:bg-white/90 px-6 h-10 text-xs font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};