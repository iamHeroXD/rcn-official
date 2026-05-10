"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, ShieldCheck, Zap, MoreHorizontal } from "lucide-react";
import React from "react";

const MarketplaceCard = ({ title, type, user, rating, price, tags }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="glass-dark p-6 rounded-2xl border border-white/5 relative group cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)" }} className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center border border-white/10">
            {user[0]}
          </div>
          <div>
            <div className="text-white font-bold text-sm flex items-center gap-1">
              {user}
              <ShieldCheck className="w-3 h-3 text-prime-purple" />
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">{type}</div>
          </div>
        </div>
        <div className="p-2 hover:bg-white/5 rounded-lg transition-colors">
          <MoreHorizontal className="w-4 h-4 text-white/30" />
        </div>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="mb-6">
        <h4 className="text-lg font-bold text-white mb-2 leading-tight">{title}</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string, i: number) => (
            <span key={i} className="text-[9px] px-2 py-1 rounded bg-white/5 text-white/40 uppercase tracking-widest border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-1 text-yellow-400 mb-1">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold">{rating}</span>
            <span className="text-white/20 text-[10px] font-normal">(42 reviews)</span>
          </div>
          <div className="text-xl font-black text-white">{price}</div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-white text-black text-xs font-bold rounded-lg purple-glow"
        >
          View Deal
        </motion.button>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export const MarketplacePreview = () => {
  const cards = [
    { title: "Custom Simulator Map", type: "Hiring", user: "ApexStudio", rating: 4.9, price: "$250+", tags: ["Building", "Optimization"] },
    { title: "Advanced Combat System", type: "For Hire", user: "ScriptMaster", rating: 5.0, price: "$500+", tags: ["Scripting", "VFX"] },
    { title: "UI/UX Designer Needed", type: "Hiring", user: "NexusGames", rating: 4.8, price: "$150", tags: ["UI", "Figma"] },
    { title: "3D Modeler for Pets", type: "For Hire", user: "Zonex3D", rating: 4.9, price: "$20/ea", tags: ["Modeling", "Texturing"] },
  ];

  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono text-prime-purple uppercase tracking-[0.5em] mb-4"
            >
              The Marketplace
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
              Live Deals. <br /><span className="text-white/20">Zero Friction.</span>
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/10 rounded-full text-white text-sm hover:bg-white/5 transition-colors"
          >
            Enter Full Marketplace
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <MarketplaceCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};