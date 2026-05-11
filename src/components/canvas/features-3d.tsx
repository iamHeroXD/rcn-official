"use client";

import { useFrame } from "@react-three/fiber";
import { Float, Box, Torus, Octahedron } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Shape = ({ position, type, color, speed }: { position: [number, number, number], type: string, color: string, speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      {type === "box" && (
        <Box ref={meshRef} args={[1, 1, 1]} position={position}>
          <meshStandardMaterial color={color} wireframe />
        </Box>
      )}
      {type === "torus" && (
        <Torus ref={meshRef} args={[0.8, 0.2, 16, 32]} position={position}>
          <meshStandardMaterial color={color} wireframe />
        </Torus>
      )}
      {type === "octa" && (
        <Octahedron ref={meshRef} args={[1, 0]} position={position}>
          <meshStandardMaterial color={color} wireframe />
        </Octahedron>
      )}
    </Float>
  );
};

export const Features3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#5e00ff" />
      <Shape position={[5, 2, -5]} type="box" color="#5e00ff" speed={1} />
      <Shape position={[-5, -3, -8]} type="torus" color="#ff0040" speed={1.5} />
      <Shape position={[2, -4, -3]} type="octa" color="#ffffff" speed={0.8} />
    </>
  );
};
