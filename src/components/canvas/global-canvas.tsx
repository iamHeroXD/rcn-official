"use client";

import { Canvas } from "@react-three/fiber";
import { View, Preload, Stars } from "@react-three/drei";
import { Suspense } from "react";

export const GlobalCanvas = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <Canvas
        eventSource={typeof window !== "undefined" ? document.body : undefined}
        className="pointer-events-none"
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <View.Port />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};