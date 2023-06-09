"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Preload, OrbitControls } from "@react-three/drei";

const Computer = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("./computer/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={computer.scene} scale={isMobile ? 0.015 : 0.03} />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    window
      .matchMedia("(max-width: 500px)")
      .addEventListener("change", (event) => {
        setIsMobile(event.matches);
      });

    return () => {
      window
        .matchMedia("(max-width: 500px)")
        .removeEventListener("change", (event) => {
          setIsMobile(event.matches);
        });
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows="basic"
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={"...loading"}>
        <OrbitControls enableZoom={false} />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
