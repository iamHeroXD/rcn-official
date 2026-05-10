"use client";

import { motion } from "framer-motion";
import { View } from "@react-three/drei";
import { Hero3D } from "@/components/canvas/hero-3d";
import Magnetic from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronRight, MessageSquare } from "lucide-react";

const RotatingTaglines = () => {
  const taglines = [
    "Build Faster",
    "Hire Smarter",
    "Trusted Marketplace",
    "Elite Creator Network",
    "Powered By RCN",
    "The Creator Economy Rebuilt",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 overflow-hidden">
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        className="text-prime-purple/80 font-mono text-sm tracking-widest uppercase"
      >
        {taglines[index]}
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* 3D View */}
      <View className="absolute inset-0 z-0">
        <Hero3D />
      </View>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <RotatingTaglines />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          RCN <span className="text-transparent bg-clip-text bg-gradient-to-r from-prime-purple via-white to-prime-red">PRIME</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          The Future of Roblox Creation. The elite marketplace for creators, builders, and studios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <Magnetic>
            <Button className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 group purple-glow">
              Add To Discord
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                <MessageSquare className="w-5 h-5" />
              </motion.span>
            </Button>
          </Magnetic>

          <Magnetic>
            <Button variant="outline" className="h-16 px-10 text-lg rounded-full border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white transition-all duration-300">
              Explore Features
            </Button>
          </Magnetic>

          <Magnetic>
            <Button variant="ghost" className="h-16 px-10 text-lg rounded-full text-white/40 hover:text-white transition-colors">
              Join Marketplace
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-4"
      >
        <div className="glass-dark px-4 py-2 rounded-lg flex items-center gap-3 border-l-2 border-prime-purple">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-mono text-white/70 uppercase tracking-widest">
            8,421 Users Online
          </span>
        </div>
        <div className="glass-dark px-4 py-2 rounded-lg flex items-center gap-3 border-l-2 border-white/20">
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
            Uptime: 99.99%
          </span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};