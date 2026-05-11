"use client";

import { motion } from "framer-motion";
import { 
  ShoppingBag, Users, Search, ShieldAlert, Coins, 
  Brain, Crown, ShieldCheck, UserCircle, History,
  Bell, Database, Lock, TrendingUp, Cpu
} from "lucide-react";
import { View } from "@react-three/drei";
import { Features3D } from "@/components/canvas/features-3d";

const features = [
  { title: "Marketplace System", desc: "Elite trading floor for all assets.", icon: <ShoppingBag /> },
  { title: "Hiring Posts", desc: "Connect with verified professionals.", icon: <Users /> },
  { title: "For Hire Posts", desc: "Showcase your skills to top studios.", icon: <History /> },
  { title: "Reviews & Reputation", desc: "Immutable feedback system.", icon: <StarIcon /> },
  { title: "Scam Protection", desc: "Advanced algorithmic security.", icon: <ShieldAlert /> },
  { title: "RCN Coins Economy", desc: "Integrated digital currency.", icon: <Coins /> },
  { title: "AI Smart Matching", desc: "Perfect studio-creator pairs.", icon: <Brain /> },
  { title: "Premium Membership", desc: "Unlock elite networking perks.", icon: <Crown /> },
  { title: "Auto Moderation", desc: "24/7 AI-driven safety.", icon: <Lock /> },
  { title: "Advanced Profiles", desc: "Detailed portfolio integration.", icon: <UserCircle /> },
  { title: "Verification System", desc: "Strict manual vetting process.", icon: <ShieldCheck /> },
  { title: "Deal Tracking", desc: "Live monitoring of all trades.", icon: <Database /> },
  { title: "Smart Search", desc: "Find exactly what you need.", icon: <Search /> },
  { title: "Creator Levels", desc: "Progression and achievement system.", icon: <TrendingUp /> },
  { title: "Discord Automation", desc: "Seamless bot-to-web sync.", icon: <Cpu /> },
];

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  );
}

export const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* 3D View */}
      <View className="absolute inset-0 pointer-events-none opacity-40">
        <Features3D />
      </View>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Built for the <span className="text-prime-purple">Elite</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            A comprehensive ecosystem designed to power the next generation of Roblox development studios and creators.
          </p>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                show: { opacity: 1, scale: 1, y: 0 }
              }}
              className="glass-dark p-6 rounded-xl border border-white/5 hover:border-prime-purple/50 hover:bg-white/[0.08] transition-all duration-500 group cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="mb-4 text-white/40 group-hover:text-prime-purple transition-colors duration-500"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[11px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};