"use client";

import { motion } from "framer-motion";
import { View } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const NetworkLines = () => {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 50; i++) {
      p.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }
    return p;
  }, []);

  const lines = useMemo(() => {
    const l = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 3) {
          l.push(points[i], points[j]);
        }
      }
    }
    return l;
  }, [points]);

  const lineRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      lineRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group>
      <lineSegments ref={lineRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(lines.flatMap(p => [p.x, p.y, p.z])), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#5e00ff" transparent opacity={0.2} />
      </lineSegments>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

export const Interactive3DSection = () => {
  return (
    <section className="h-screen flex items-center justify-center relative bg-black overflow-hidden">
      <View className="absolute inset-0 z-0">
        <ambientLight intensity={0.5} />
        <NetworkLines />
      </View>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark p-12 rounded-[3rem] border border-white/10 backdrop-blur-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-prime-purple uppercase tracking-[0.5em] mb-6"
          >
            Infrastructure
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Holographic <span className="text-white/20">Network</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Our proprietary Discord-to-Web synchronization layer ensures sub-millisecond updates across the entire creator marketplace.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-left">
              <div className="text-3xl font-bold text-white tracking-tighter">0.1ms</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Latency</div>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div className="text-left">
              <div className="text-3xl font-bold text-white tracking-tighter">100%</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Encrypted</div>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div className="text-left">
              <div className="text-3xl font-bold text-white tracking-tighter">∞</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest mt-1">Scalability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};