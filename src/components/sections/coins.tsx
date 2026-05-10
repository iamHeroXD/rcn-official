"use client";

import { motion } from "framer-motion";
import { View, Float, Cylinder } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingCoin = () => {
  const coinRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (coinRef.current) {
      coinRef.current.rotation.y = state.clock.getElapsedTime() * 2;
    }
  });

  return (
    <Float speed={5} rotationIntensity={1} floatIntensity={1}>
      <group ref={coinRef}>
        <Cylinder args={[1, 1, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#5e00ff" metalness={0.9} roughness={0.1} />
        </Cylinder>
        <mesh position={[0, 0, 0.11]}>
          <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={1} roughness={0} />
        </mesh>
      </group>
    </Float>
  );
};

export const RCNCoins = () => {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-prime-purple uppercase tracking-[0.5em] mb-6"
          >
            Digital Economy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
          >
            The RCN <span className="text-white/20">Coin.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg leading-relaxed mb-12"
          >
            A unified digital currency designed for high-velocity Roblox commerce. Buy assets, pay commissions, and earn rewards with zero chargeback risk.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5"
            >
              <div className="text-2xl font-bold text-white mb-2">Secure</div>
              <div className="text-xs text-white/30 uppercase tracking-widest">Blockchain Tracked</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5"
            >
              <div className="text-2xl font-bold text-white mb-2">Instant</div>
              <div className="text-xs text-white/30 uppercase tracking-widest">Global Payouts</div>
            </motion.div>
          </div>
        </div>

        <div className="flex-1 w-full h-[500px] relative">
          <View className="absolute inset-0">
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <FloatingCoin />
          </View>
          
          {/* Animated Growth Graph Placeholder */}
          <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end gap-2 px-8">
            {[40, 60, 45, 80, 70, 90, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                className="flex-1 bg-gradient-to-t from-prime-purple/50 to-prime-purple rounded-t-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};