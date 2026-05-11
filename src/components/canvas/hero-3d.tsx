"use client";

import { useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedOrb = ({ position, color, speed, distort }: { position: [number, number, number], color: string, speed: number, distort: number }) => {
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
        />
      </Sphere>
    </Float>
  );
};

export const Hero3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#5e00ff" />
      
      <group ref={groupRef}>
        <AnimatedOrb position={[2, 1, -2]} color="#5e00ff" speed={2} distort={0.4} />
        <AnimatedOrb position={[-3, -1, -3]} color="#ff0040" speed={1.5} distort={0.3} />
      </group>
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[100, 100]} />
        <MeshDistortMaterial
          transparent
          opacity={0.1}
          color="#111111"
          distort={0.1}
          speed={1}
        />
      </mesh>
    </>
  );
};