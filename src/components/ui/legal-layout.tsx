"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  sections: LegalSection[];
}

export const LegalLayout = ({ title, subtitle, sections }: LegalLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".legal-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".legal-content-area",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black pt-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-prime-purple/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-prime-red/5 blur-[120px] rounded-full" />
      </div>

      {/* Mini Hero */}
      <div className="max-w-7xl mx-auto px-4 mb-20 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-prime-purple transition-colors mb-8 group text-xs uppercase tracking-widest font-mono">
          <motion.div animate={{ x: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronRight className="w-4 h-4 rotate-180" />
          </motion.div>
          Back to Home
        </Link>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/40 text-lg md:text-xl max-w-2xl"
        >
          {subtitle}
        </motion.p>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-px bg-gradient-to-r from-prime-purple via-white/20 to-transparent mt-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-32 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16 relative z-10">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-2">
            <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-6">Contents</div>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-xs text-white/40 hover:text-white hover:translate-x-1 transition-all py-2 border-l border-white/5 pl-4 hover:border-prime-purple"
              >
                {section.title}
              </a>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <div className="legal-content-area space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="legal-card scroll-mt-32">
              <div className="glass-dark p-8 md:p-12 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
                {/* Decorative glow in corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-prime-purple/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight flex items-center gap-4">
                  <span className="text-prime-purple font-mono text-sm opacity-50">#</span>
                  {section.title}
                </h2>
                <div className="prose prose-invert max-w-none text-white/50 leading-relaxed text-sm md:text-base space-y-4">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-prime-purple z-[100] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />
    </div>
  );
};

// Helper hook for scroll progress
function useScrollProgress() {
  const [progress, setProgress] = (typeof window !== "undefined") ? require("react").useState(0) : [0, () => {}];

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(currentScroll / scrollHeight);
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return progress;
}