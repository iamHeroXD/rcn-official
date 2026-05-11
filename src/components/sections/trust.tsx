"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Briefcase, Zap, Bot, Globe } from "lucide-react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

const StatCard = ({ stat, i }: { stat: any, i: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass-dark p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
          {stat.icon}
        </div>
        <h3 className="text-3xl font-bold text-white mb-1">{stat.label}</h3>
        <p className="text-prime-purple font-mono text-xs uppercase tracking-widest mb-4">
          {stat.value}
        </p>
        <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
      </div>

      {/* Specular Highlight */}
      <motion.div 
        style={{ 
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
          left: x,
          top: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-64 h-64 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity blur-3xl" 
      />
    </motion.div>
  );
};

export const Trust = () => {
  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} i={i} />
          ))}
        </div>
...
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <div className="text-xl font-bold tracking-tighter text-white">ROBLOX STUDIOS</div>
          <div className="text-xl font-bold tracking-tighter text-white">DISCORD VERIFIED</div>
          <div className="text-xl font-bold tracking-tighter text-white">ELITE CREATORS</div>
          <div className="text-xl font-bold tracking-tighter text-white">BOT AUTOMATION</div>
        </motion.div>
      </div>
    </section>
  );
};