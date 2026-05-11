"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Briefcase, Zap, Bot, Globe } from "lucide-react";

const stats = [
  {
    label: "30+ Deals",
    value: "Proven",
    icon: <Briefcase className="w-6 h-6 text-prime-red" />,
    desc: "Successfully tracked and protected trades.",
  },
  {
    label: "100+ Users",
    value: "Community",
    icon: <Users className="w-6 h-6 text-prime-purple" />,
    desc: "Growing network of Roblox professionals.",
  },
  {
    label: "50+ Websites",
    value: "85% Happy",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    desc: "High-end web solutions for global studios.",
  },
  {
    label: "Bot Experts",
    value: "Automation",
    icon: <Bot className="w-6 h-6 text-green-400" />,
    desc: "Custom Discord systems built for creators.",
  },
];

export const Trust = () => {
  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-dark p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 group"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.label}</h3>
              <p className="text-prime-purple font-mono text-xs uppercase tracking-widest mb-4">
                {stat.value}
              </p>
              <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

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