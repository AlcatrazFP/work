import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import DcMotor from "../Components/DcMotor";
import Bohr from "../Components/Bohr";
import Magnet from "../Components/Magnet";
import NuclearReactor from "../Components/NuclearReactor";
import Vector from "../Components/Vector";

const Physics = () => {
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
            {/* <DcMotor scale={0.09} /> */}
            {/* <Magnet scale={0.09} /> */}
            {/* <NuclearReactor scale={0.01} /> */}
            <Vector scale={0.08} />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </>
  );
};

export default Physics;
