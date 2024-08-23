import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, Outline } from '@react-three/postprocessing';
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 8 : 8}  
        position={isMobile ? [0, -2, 0] : [0, -2.3, 0]}  // Adjust position for mobile
        rotation={[0, 100, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);  // You can adjust the breakpoint
    };

    // Check on component mount
    handleResize();

    // Add event listener to update on window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: isMobile ? 60 : 45,  // Wider FOV for mobile
        near: 0.1,
        far: 200,
        position: isMobile ? [-2, -5, 6] : [-4, -10, 6],  // Adjust position for mobile
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <pointLight position={[0, 10, 10]} intensity={1.0} color="white" />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            edgeStrength={1.5}
            width={1000}
            color="#ffffff"  // Outline color for separation
          />
        </EffectComposer>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
