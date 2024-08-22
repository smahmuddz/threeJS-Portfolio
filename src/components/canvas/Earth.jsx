import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Outline } from '@react-three/postprocessing';
import CanvasLoader from "../Loader";

// Earth component to load the model
const Earth = ({ isMobile, scale }) => {
  const earth = useGLTF("./planet/scene.glb");
  return (
    <primitive
    object={earth.scene}
    scale={4.7}  // Use dynamic scale here
    position={[0, -4, 0]}
    rotation={[0, 40, 0]}
  />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, -10, 6],
      }}
     
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <pointLight position={[0, 10, 10]} intensity={1.0} color="white" />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            edgeStrength={1.5}
            width={1000}
            color="#ffffff" // Outline color for separation
          />
        </EffectComposer>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
