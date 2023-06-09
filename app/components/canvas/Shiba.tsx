import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Preload, OrbitControls, PerspectiveCamera } from "@react-three/drei";

const Shiba = ({ isMobile }: { isMobile: boolean }) => {
  const shiba = useGLTF("./shiba/scene.gltf");

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
      <primitive object={shiba.scene} scale={isMobile ? 0.7 : 3.5} />
    </mesh>
  );
};

const ShibaCanvas = () => {
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
        <Shiba isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ShibaCanvas;
