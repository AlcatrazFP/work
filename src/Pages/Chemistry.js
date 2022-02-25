import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Adenine from "../Components/Adenine";
import Benzene from "../Components/Benzene";
import OrbF from "../Components/OrbF";
import OrbF5 from "../Components/OrbF5";
import LP from "../Components/LP";
import LP1 from "../Components/LP1";

const Chemistry = () => {
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
            {/* <Adenine scale={0.09} /> */}
            {/* <OrbF scale={0.01} /> */}
            {/* <OrbF5 scale={0.01} /> */}
            <LP scale={0.01} />
            {/* <LP1 scale={0.01} /> */}
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </>
  );
};

export default Chemistry;
