"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, Terminal, Zap, Copy } from "lucide-react";
import { useToast } from "@/components/providers/toast-provider";

const DiscordMessage = ({ user, content, time, delay }: any) => {
  const { toast } = useToast();
  
  const copyCommand = () => {
    navigator.clipboard.writeText(content);
    toast(`Command copied: ${content.split(' ')[0]}`, "success");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      onClick={copyCommand}
      transition={{ delay, duration: 0.5 }}
      className="flex gap-4 p-4 transition-colors group rounded-lg cursor-pointer relative"
    >
      <div className="w-10 h-10 rounded-full bg-prime-purple/20 flex-shrink-0 flex items-center justify-center font-bold text-white border border-prime-purple/20">
        {user[0]}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white font-bold text-sm group-hover:underline">{user}</span>
          <span className="bg-[#5865F2] text-[9px] font-bold text-white px-1.5 py-0.5 rounded-sm flex items-center gap-1">
            <Zap className="w-2 h-2 fill-current" /> BOT
          </span>
          <span className="text-white/20 text-[10px]">{time}</span>
        </div>
        <div className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </div>
      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Copy className="w-3 h-3 text-white/20" />
      </div>
    </motion.div>
  );
};

const DiscordEmbed = ({ title, desc, fields, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay + 0.2 }}
    className="ml-14 mt-2 max-w-md bg-[#2B2D31] border-l-4 border-prime-purple rounded-r-md p-4"
  >
    <div className="text-white font-bold text-sm mb-2">{title}</div>
    <div className="text-white/70 text-xs mb-4">{desc}</div>
    <div className="grid grid-cols-2 gap-4">
      {fields.map((f: any, i: number) => (
        <div key={i}>
          <div className="text-white/40 text-[10px] font-bold uppercase mb-1">{f.name}</div>
          <div className="text-white/90 text-xs">{f.value}</div>
        </div>
      ))}
    </div>
  </motion.div>
);

export const DiscordIntegration = () => {
  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-prime-purple uppercase tracking-[0.5em] mb-6"
          >
            Native Integration
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
          >
            Your Hub. <br /><span className="text-white/20">Our Engine.</span>
          </motion.h2>
          <p className="text-white/40 text-lg mb-10">
            RCN Prime lives where your community does. Our Discord engine is rebuilt from the ground up for speed, safety, and deep customization.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <Terminal className="w-5 h-5 text-prime-purple mt-1" />
              <div>
                <div className="text-white font-bold mb-1">Slash Commands</div>
                <div className="text-white/30 text-sm">Post deals, check reputations, and trade without leaving Discord.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-5 h-5 text-prime-purple mt-1" />
              <div>
                <div className="text-white font-bold mb-1">Auto Moderation</div>
                <div className="text-white/30 text-sm">Instant scam detection and automated member vetting.</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex-1 w-full max-w-2xl bg-[#313338] rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative"
        >
          {/* Fake Sidebar */}
          <div className="flex h-full">
            <div className="w-16 bg-[#1E1F22] hidden md:flex flex-col items-center py-4 gap-4">
              <div className="w-10 h-10 rounded-2xl bg-prime-purple flex items-center justify-center text-white font-black text-xs shadow-lg">R</div>
              <div className="w-10 h-10 rounded-[20px] bg-[#313338] hover:rounded-2xl transition-all duration-300 flex items-center justify-center text-white/30 cursor-pointer">+</div>
              <div className="w-10 h-10 rounded-[20px] bg-[#313338] hover:rounded-2xl transition-all duration-300 flex items-center justify-center text-white/30 cursor-pointer hover:bg-green-500/20 hover:text-green-500">
                <Zap className="w-4 h-4 fill-current" />
              </div>
            </div>
            <div className="flex-1 flex flex-col min-h-[500px]">
              <div className="h-12 border-b border-[#26272D] flex items-center px-4 shadow-sm">
                <span className="text-white/40 font-bold mr-2 text-lg">#</span>
                <span className="text-white font-bold text-sm">marketplace-deals</span>
              </div>
              <div className="flex-1 p-4 overflow-y-auto no-scrollbar bg-[#313338]">
                <DiscordMessage 
                  user="Hero.X" 
                  content="!post building Custom Simulator Map $250+ Highly optimized, ready to import." 
                  time="Today at 10:42 AM"
                  delay={0.5}
                />
                <DiscordMessage 
                  user="RCN Prime" 
                  content="Processing your deal request..." 
                  time="Today at 10:42 AM"
                  delay={1.2}
                />
                <DiscordEmbed 
                  title="New Marketplace Deal"
                  desc="A verified creator has posted a new listing in the Building category."
                  fields={[
                    { name: "Creator", value: "Hero.X" },
                    { name: "Category", value: "Building" },
                    { name: "Price", value: "$250+" },
                    { name: "Status", value: "Verified" }
                  ]}
                  delay={1.5}
                />
              </div>
            </div>
          </div>
          {/* Glow Effect */}
          <div className="absolute inset-0 border-2 border-prime-purple/20 pointer-events-none rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
};