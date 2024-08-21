import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, scale }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
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
        scale={isMobile ? 1 : 1.5}  // Use dynamic scale here
        position={isMobile ? [0, -1.7, 0] : [0, -2.6, 0]}
        rotation={[0, Math.PI/4, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [scale, setScale] = useState(1);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    const updateScale = () => {
      if (canvasRef.current) {
        const { clientWidth, clientHeight } = canvasRef.current;
        // Set scale based on the canvas size
        setScale(Math.min(clientWidth, clientHeight) / 500);  // Adjust the divisor to fit the model
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", updateScale);
    
    // Initial scale calculation
    updateScale();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <Canvas
      ref={canvasRef}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} scale={scale} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
