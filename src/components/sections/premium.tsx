"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Building2, Star } from "lucide-react";
import Magnetic from "@/components/animations/magnetic";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Start your journey.",
    icon: <Zap className="w-6 h-6 text-white/40" />,
    features: ["5 marketplace posts/mo", "Basic verification", "Public Discord access"],
    color: "border-white/5",
  },
  {
    name: "Prime",
    price: "$19",
    desc: "The elite standard.",
    icon: <Crown className="w-6 h-6 text-prime-purple" />,
    features: ["Unlimited marketplace posts", "Priority verification", "Prime-only channels", "0% coin fees"],
    color: "border-prime-purple/50",
    popular: true,
  },
  {
    name: "Studio",
    price: "$49",
    desc: "For growing teams.",
    icon: <Building2 className="w-6 h-6 text-prime-red" />,
    features: ["Team management", "Shared coin wallet", "Verified studio badge", "Custom recruitment tools"],
    color: "border-prime-red/50",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Infinite scale.",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    features: ["White-labeled bot", "API access", "Dedicated account manager", "Custom marketplace logic"],
    color: "border-yellow-400/50",
  },
];

export const Premium = () => {
  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6"
          >
            Choose Your <span className="text-prime-purple">Ascension</span>
          </motion.h2>
          <p className="text-white/40 text-lg">Select the tier that matches your ambition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-dark p-8 rounded-3xl border ${plan.color} relative group overflow-hidden flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-prime-purple text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-black text-white mb-2 tracking-tighter">
                  {plan.price}<span className="text-sm font-normal text-white/30">/mo</span>
                </div>
                <p className="text-white/40 text-sm">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-prime-purple" />
                    <span className="text-xs text-white/60">{feature}</span>
                  </div>
                ))}
              </div>

              <Magnetic>
                <Button className={`w-full h-12 rounded-xl font-bold transition-all duration-300 ${plan.popular ? 'bg-prime-purple hover:bg-prime-purple/80 text-white purple-glow' : 'bg-white text-black hover:bg-white/90'}`}>
                  Get Started
                </Button>
              </Magnetic>
              
              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-prime-purple/10 blur-[80px] group-hover:bg-prime-purple/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};