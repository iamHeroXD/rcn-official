"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Building2, Star } from "lucide-react";
import Magnetic from "@/components/animations/magnetic";
import Tilt from "@/components/animations/tilt";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Start your journey.",
    icon: <Zap className="w-6 h-6 text-white/40" />,
    features: ["5 marketplace posts/mo", "Basic verification", "Public Discord access"],
    color: "border-white/5",
    btnText: "Join Discord",
  },
  {
    name: "Prime",
    price: "$19",
    desc: "The elite standard.",
    icon: <Crown className="w-6 h-6 text-prime-purple" />,
    features: ["Unlimited marketplace posts", "Priority verification", "Prime-only channels", "0% coin fees"],
    color: "border-prime-purple/50",
    popular: true,
    btnText: "Purchase Prime",
  },
  {
    name: "Studio",
    price: "$49",
    desc: "For growing teams.",
    icon: <Building2 className="w-6 h-6 text-prime-red" />,
    features: ["Team management", "Shared coin wallet", "Verified studio badge", "Custom recruitment tools"],
    color: "border-prime-red/50",
    btnText: "Contact Sales",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Infinite scale.",
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    features: ["White-labeled bot", "API access", "Dedicated account manager", "Custom marketplace logic"],
    color: "border-yellow-400/50",
    btnText: "Inquire Now",
  },
];

export const Premium = () => {
  return (
    <section id="premium" className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-prime-purple uppercase tracking-[0.5em] mb-4"
          >
            Pricing Models
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6"
          >
            Choose Your <span className="text-prime-purple">Ascension</span>
          </motion.h2>
          <p className="text-white/40 text-lg">Select the tier that matches your ambition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <Tilt key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20 
                }}
                className={`glass-dark p-8 rounded-[2.5rem] border ${plan.color} relative group overflow-hidden flex flex-col h-full transition-colors duration-500`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute top-4 right-4 bg-prime-purple text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-20">
                      Most Popular
                    </div>
                    <motion.div 
                      animate={{ opacity: [0.1, 0.2, 0.1] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="absolute inset-0 bg-prime-purple/10 pointer-events-none" 
                    />
                  </>
                )}
                
                <div className="mb-8 relative z-10">
                  <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">{plan.name}</h3>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">
                    {plan.price}<span className="text-sm font-normal text-white/30 ml-1">/mo</span>
                  </div>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{plan.desc}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow relative z-10">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-prime-purple/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-prime-purple" />
                      </div>
                      <span className="text-xs text-white/60 font-medium group-hover:text-white/80 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-auto">
                  <Magnetic>
                    <Button 
                      asChild
                      className={`w-full h-14 rounded-2xl font-bold transition-all duration-300 ${plan.popular ? 'bg-prime-purple hover:bg-prime-purple/80 text-white purple-glow shadow-[0_0_30px_rgba(94,0,255,0.3)]' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
                    >
                      <a href="https://discord.gg/rcn" target="_blank">
                        {plan.btnText}
                      </a>
                    </Button>
                  </Magnetic>
                </div>
                
                {/* Animated Specular Glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-prime-purple/20 blur-[80px] group-hover:bg-prime-purple/40 transition-colors duration-700 pointer-events-none" />
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};