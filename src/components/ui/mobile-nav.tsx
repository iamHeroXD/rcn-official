"use client";

import { motion } from "framer-motion";
import { Home, Zap, Crown, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const pathname = usePathname();

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "/" },
    { icon: <Zap className="w-5 h-5" />, label: "Features", href: "#features" },
    { icon: <Crown className="w-5 h-5" />, label: "Premium", href: "#premium" },
    { icon: <Heart className="w-5 h-5" />, label: "Support", href: "#support" },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[90%] max-w-[400px]"
    >
      <div className="glass-dark px-6 py-4 rounded-[2rem] border border-white/10 flex items-center justify-between shadow-2xl backdrop-blur-3xl">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="relative group">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="text-white/40 group-hover:text-prime-purple transition-colors">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-white/20 group-hover:text-white/60 transition-colors">
                {item.label}
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};