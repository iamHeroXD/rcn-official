"use client";

import { motion } from "framer-motion";
import { Globe, Mail, MessageCircle, ArrowUpRight, Shield, Copy } from "lucide-react";
import Link from "next/link";
import Magnetic from "@/components/animations/magnetic";
import { useToast } from "@/components/providers/toast-provider";

export const Footer = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast(`${label} copied to clipboard!`, "success");
  };

  return (
    <footer className="py-24 px-4 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-black text-white tracking-tighter mb-8 cursor-default flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-prime-purple flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="relative">
                RCN <span className="text-prime-purple">PRIME</span>
                <motion.div 
                  animate={{ opacity: [0, 1, 0], x: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 0.1, repeatDelay: 5 }}
                  className="absolute inset-0 text-red-500/30 blur-sm pointer-events-none"
                >
                  RCN PRIME
                </motion.div>
              </span>
            </motion.div>
            <p className="text-white/30 text-lg max-w-sm mb-10 leading-relaxed font-light">
              The elite infrastructure for the next generation of Roblox development. Building a trusted marketplace, secure economy, and high-performance bot systems.
            </p>
            <div className="flex gap-8">
              {[
                { Icon: Globe, href: "https://rcn-prime.com", label: "Website", value: "https://rcn-prime.com" },
                { Icon: Mail, href: "mailto:support@rcn-prime.com", label: "Email", value: "support@rcn-prime.com" },
                { Icon: MessageCircle, href: "https://discord.gg/rcn", label: "Discord", value: "https://discord.gg/rcn" }
              ].map(({ Icon, href, label, value }, i) => (
                <Magnetic key={i}>
                  <div className="relative group">
                    <motion.a
                      href={href}
                      target="_blank"
                      whileHover={{ y: -8, color: "#5e00ff" }}
                      className="text-white/20 transition-all duration-300 p-2 block"
                    >
                      <Icon className="w-7 h-7" />
                    </motion.a>
                    <button
                      onClick={() => copyToClipboard(value, label)}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" /> Copy
                    </button>
                  </div>
                </Magnetic>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/20 font-bold mb-8 uppercase tracking-[0.3em] text-[10px] font-mono">Platform</h4>
            <ul className="space-y-6">
              {[
                { name: "Hiring", href: "#features" },
                { name: "Premium", href: "#premium" },
                { name: "RCN Coins", href: "/terms" },
                { name: "Bot Engine", href: "/dashboard" },
                { name: "Network Status", href: "/dashboard" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-all text-sm flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-prime-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name} 
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/20 font-bold mb-8 uppercase tracking-[0.3em] text-[10px] font-mono">Legal</h4>
            <ul className="space-y-6">
              {[
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Creator Guidelines", href: "/guidelines" },
                { name: "Marketplace Rules", href: "/rules" },
                { name: "Scam Prevention", href: "/safety" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-all text-sm group flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-prime-purple transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5">
          <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-mono">
            © 2026 RCN PRIME. ARCHITECTED BY <span className="text-white/40">Hero.X</span>
          </div>
          <div className="text-white/10 text-[9px] max-w-md text-center md:text-right leading-relaxed italic font-light tracking-wide uppercase">
            RCN is an independent creator ecosystem and is not affiliated with Roblox Corporation or Discord Inc.
          </div>
        </div>
      </div>

      {/* Cinematic Pulse Element */}
      <motion.div 
        animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-prime-purple/20 blur-[150px] rounded-full pointer-events-none" 
      />
    </footer>
  );
};