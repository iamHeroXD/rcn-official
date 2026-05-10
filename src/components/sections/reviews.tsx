"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShieldCheck, Star } from "lucide-react";

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
    <section className="py-24 px-4 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            Trusted by <span className="text-prime-purple">Industry Leaders</span>
          </motion.h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-dark p-8 rounded-[2rem] border border-white/5 h-full flex flex-col justify-between hover:border-white/20 transition-all duration-500"
                >
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed mb-8 italic">
                      "{review.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-prime-purple/20 border border-prime-purple/30 flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="text-white font-bold flex items-center gap-1">
                        {review.name}
                        <ShieldCheck className="w-3 h-3 text-prime-purple" />
                      </div>
                      <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
                        {review.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center gap-4 mt-12">
            <CarouselPrevious className="relative translate-y-0 left-0 bg-white/5 border-white/10 hover:bg-white/10 text-white" />
            <CarouselNext className="relative translate-y-0 right-0 bg-white/5 border-white/10 hover:bg-white/10 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};