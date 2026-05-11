"use client";

import { motion } from "framer-motion";
import { Heart, Wallet, CreditCard, Coins, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SupportUs = () => {
  const currentAmount = 10;
  const targetAmount = 1000;
  const percentage = (currentAmount / targetAmount) * 100;

  return (
    <section id="support" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-prime-purple/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono text-prime-purple uppercase tracking-[0.5em] mb-6"
            >
              The Mission
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
            >
              Fuel the <br /><span className="text-white/20">Future.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl"
            >
              RCN PRIME is built by creators, for creators. Your support directly funds the development of our bot infrastructure, marketplace security, and community events.
            </motion.p>

            {/* Progress Bar Container */}
            <div className="glass-dark p-8 rounded-[2.5rem] border border-white/10 mb-12">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1">Current Funding</div>
                  <div className="text-4xl font-black text-white tracking-tighter">${currentAmount}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1">Target</div>
                  <div className="text-2xl font-bold text-white/60 tracking-tighter">${targetAmount}</div>
                </div>
              </div>

              {/* The Progress Bar */}
              <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-1">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-full bg-gradient-to-r from-prime-purple to-prime-red rounded-full relative"
                >
                  <div className="absolute top-0 right-0 h-full w-8 bg-white/20 blur-md" />
                </motion.div>
              </div>
              <div className="mt-4 text-[10px] font-mono text-white/20 text-center uppercase tracking-widest">
                {percentage}% of the way there
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Perk Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-1 md:col-span-2 glass-dark p-8 rounded-[2.5rem] border border-prime-purple/30 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Heart className="w-24 h-24 text-prime-purple fill-current" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-prime-purple fill-current" />
                  Elite Benefactor Perk
                </h3>
                <p className="text-white/50 text-sm mb-6 max-w-md">
                  Support us with more than <span className="text-white font-bold">$20</span>, <span className="text-white font-bold">1000 INR</span>, or <span className="text-white font-bold">1000 RBX</span> to unlock:
                </p>
                <div className="flex items-center gap-3 bg-prime-purple/20 border border-prime-purple/30 px-6 py-4 rounded-2xl w-fit">
                  <CheckCircle2 className="w-5 h-5 text-prime-purple" />
                  <span className="text-sm font-bold text-white tracking-tight">FREE MAX PLAN FOR OUR BOT</span>
                </div>
              </motion.div>

              {/* Payment Options */}
              {[
                { name: "Google Pay", icon: <CreditCard className="w-5 h-5" />, desc: "Safe & Fast", color: "hover:border-blue-500/50" },
                { name: "PayPal", icon: <Wallet className="w-5 h-5" />, desc: "Global Support", color: "hover:border-yellow-500/50" },
                { name: "Robux", icon: <Coins className="w-5 h-5" />, desc: "R$ 1000+", color: "hover:border-green-500/50" },
              ].map((opt, i) => (
                <motion.div
                  key={opt.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-dark p-6 rounded-2xl border border-white/5 ${opt.color} transition-all duration-300 cursor-pointer group`}
                >
                  <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-colors">
                    {opt.icon}
                  </div>
                  <div className="font-bold text-white mb-1">{opt.name}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest">{opt.desc}</div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center glass-dark rounded-2xl border border-dashed border-white/10 hover:border-white/30 transition-colors cursor-pointer"
              >
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Other Methods</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};