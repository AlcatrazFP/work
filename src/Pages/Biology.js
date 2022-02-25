import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Animal from "../Components/Animal"
import Brain from "../Components/Brain"
import Eye from "../Components/Eye"
import Eukaryotic_cell from "../Components/Eukaryotic_cell"


const Biology = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <Canvas
          // style={{ height: "500px" }}
          shadows
          dpr={[1, 2]}
          camera={{ position: [1, 2, 1], fov: 25 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[6, 5, 2]} />
          <Suspense fallback={null}>
            <Animal scale={0.09} />
            <Brain scale={0.09} />
            <Eye scale={0.01} />
            <Eukaryotic_cell scale={0.08} />

          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </>
  );
};

export default Biology;
