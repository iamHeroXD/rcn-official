"use client";

import { Canvas } from "@react-three/fiber";
import { View, Preload } from "@react-three/drei";
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
        zIndex: 1,
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
          <View.Port />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};