import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Badland from "../Components/Badland"
import Iceland from "../Components/Iceland"
import India from "../Components/India"
import Tectonic from "../Components/Tectonic"


const Geography = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
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
            <Iceland scale={10} />
            {/* <Tectonic scale={0.09} /> */}
            {/* <Badland scale={0.01} /> */}
            {/* <Vector scale={0.08} /> */}
            {/* <India scale={0.08}/> */}
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
};

export default Geography;
