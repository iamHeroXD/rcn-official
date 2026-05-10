"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="text-3xl font-black text-white tracking-tighter mb-6">
              RCN <span className="text-prime-purple">PRIME</span>
            </div>
            <p className="text-white/30 text-lg max-w-sm mb-8">
              The elite infrastructure for the future of Roblox creation. Empowering studios and creators globally.
            </p>
            <div className="flex gap-6">
              {[Globe, Mail, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#5e00ff" }}
                  className="text-white/20 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4">
              {["Marketplace", "Hiring", "Verification", "Prime Membership", "RCN Coins"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                    {link} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              {[
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Creator Guidelines", href: "/guidelines" },
                { name: "Marketplace Rules", href: "/rules" },
                { name: "Scam Prevention", href: "/safety" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/30 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <div className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
            © 2026 RCN PRIME. All Rights Reserved.
          </div>
          <div className="text-white/10 text-[9px] max-w-md text-center md:text-right leading-relaxed italic">
            RCN is an independent creator platform and is not affiliated with Roblox Corporation or Discord Inc.
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-prime-purple/20 to-transparent" />
    </footer>
  );
};