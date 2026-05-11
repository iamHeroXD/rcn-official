"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShieldCheck, Star, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
  {
    name: "Hero.X",
    role: "Founder, RCN",
    content: "RCN PRIME is the culmination of years of building the safest, most efficient creator ecosystem on Roblox.",
    avatar: "H",
  },
  {
    name: "ApexDev",
    role: "Lead Scripter",
    content: "The verification system here is unmatched. I've never felt safer doing high-value commissions.",
    avatar: "A",
  },
  {
    name: "SkyStudio",
    role: "Studio Owner",
    content: "We hired our entire building team through RCN Prime. The quality of talent is purely elite.",
    avatar: "S",
  },
  {
    name: "VoxelMaster",
    role: "3D Modeler",
    content: "The RCN Coins economy makes trading assets incredibly smooth. No more worrying about third-party fees.",
    avatar: "V",
  },
];

export const Reviews = () => {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Cinematic Background Quote */}
      <div className="absolute -top-10 -left-10 opacity-[0.03] pointer-events-none">
        <Quote className="w-96 h-48 text-white rotate-180" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-prime-purple uppercase tracking-[0.5em] mb-4"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            Trusted by <span className="text-prime-purple">Industry Leaders</span>
          </motion.h2>
        </div>

        <Carousel 
          className="w-full"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, borderColor: "rgba(94, 0, 255, 0.4)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-dark p-10 rounded-[2.5rem] border border-white/5 h-full flex flex-col justify-between transition-all duration-500 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-prime-purple/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div>
                    <div className="flex gap-1 mb-8">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-yellow-500 fill-current drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                      ))}
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed mb-10 font-light italic">
                      "{review.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-prime-purple to-prime-red p-[1px] group-hover:shadow-[0_0_20px_rgba(94,0,255,0.2)] transition-all">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white font-bold">
                        {review.avatar}
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-bold flex items-center gap-1 text-sm uppercase tracking-wider">
                        {review.name}
                        <div className="relative">
                          <ShieldCheck className="w-4 h-4 text-prime-purple" />
                          <motion.div 
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 bg-prime-purple blur-md -z-10" 
                          />
                        </div>
                      </div>
                      <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-mono mt-1">
                        {review.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center gap-6 mt-16">
            <CarouselPrevious className="relative translate-y-0 left-0 w-12 h-12 bg-white/5 border-white/10 hover:bg-prime-purple hover:border-prime-purple text-white transition-all shadow-xl" />
            <CarouselNext className="relative translate-y-0 right-0 w-12 h-12 bg-white/5 border-white/10 hover:bg-prime-purple hover:border-prime-purple text-white transition-all shadow-xl" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};