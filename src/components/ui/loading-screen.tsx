"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4"
            >
              RCN <span className="text-prime-purple">PRIME</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-4 text-xs tracking-[0.5em] text-white/40 uppercase"
            >
              The Future of Roblox Creation
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};