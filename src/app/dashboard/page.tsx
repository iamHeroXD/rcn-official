"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Activity, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Magnetic from "@/components/animations/magnetic";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* 3D background grid effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: "linear-gradient(#5e00ff 1px, transparent 1px), linear-gradient(90deg, #5e00ff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 glass-dark p-12 rounded-[3rem] border border-white/10 max-w-2xl w-full text-center shadow-2xl"
      >
        <Link href="/" className="absolute top-8 left-8 text-white/40 hover:text-white transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-2 border-dashed border-prime-purple flex items-center justify-center mx-auto mb-8"
        >
          <Terminal className="w-10 h-10 text-prime-purple" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
          Neural <span className="text-prime-purple">Dashboard</span>
        </h1>
        
        <p className="text-white/40 text-lg mb-12 leading-relaxed font-light italic">
          "The future of creator management is currently synchronizing with the RCN network."
        </p>

        <div className="grid grid-cols-2 gap-4 mb-12">
          {[
            { icon: <Shield className="w-4 h-4" />, label: "Security Status", val: "Operational" },
            { icon: <Cpu className="w-4 h-4" />, label: "Compute Power", val: "94%" },
            { icon: <Activity className="w-4 h-4" />, label: "Network Latency", val: "0.4ms" },
            { icon: <Terminal className="w-4 h-4" />, label: "Bot Engine", val: "v4.2.0" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 text-left">
              <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest mb-1">
                {stat.icon} {stat.label}
              </div>
              <div className="text-white font-bold">{stat.val}</div>
            </div>
          ))}
        </div>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs font-mono text-prime-purple uppercase tracking-[0.5em] mb-8"
        >
          Coming Soon Q3 2026
        </motion.div>

        <Magnetic>
          <Link 
            href="/#premium"
            className={cn(
              buttonVariants(),
              "w-full h-14 rounded-2xl bg-prime-purple hover:bg-prime-purple/80 text-white font-bold purple-glow"
            )}
          >
            Upgrade Now
          </Link>
        </Magnetic>
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-prime-purple rounded-full"
          initial={{ 
            x: Math.random() * 1000 - 500, 
            y: Math.random() * 1000 - 500,
            opacity: 0 
          }}
          animate={{ 
            y: [0, -100],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 3 + 2, 
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{ 
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
}