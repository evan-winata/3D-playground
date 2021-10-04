import React from "react";
import { Canvas } from "@react-three/fiber";
import { useAppSelector } from "../../../../app/hooks";
import {
  selectShape,
  selectColor,
  selectXAxisRotation,
  selectYAxisRotation,
} from "../../../../slices/shape/shapeSlice";
import CameraControls from "../../../../components/Camera";
import GroundPlane from "../../../../components/GroundPlane";
import Box from "../../../../components/3D/Box";
import Sphere from "../../../../components/3D/Sphere";

const MainPanel = () => {
  const shape = useAppSelector(selectShape);
  const selectedColor = useAppSelector(selectColor);
  const xRotation = useAppSelector(selectXAxisRotation);
  const yRotation = useAppSelector(selectYAxisRotation);

  const displayedShape =
    shape === "box" ? (
      <Box
        enableXAxisRotation={xRotation}
        enableYAxisRotation={yRotation}
        color={selectedColor}
        position={[0, 0, 0]}
      />
    ) : (
      <Sphere
        enableXAxisRotation={xRotation}
        enableYAxisRotation={yRotation}
        color={selectedColor}
        position={[0, 0, 0]}
      />
    );

  return (
    <Canvas
      style={{ background: "black", height: "100vh", width: "100%" }}
      camera={{ position: [0, 2, 5], near: 1, far: 50 }}
    >
      <CameraControls />
      <pointLight position={[0, 3, 3]} />
      {displayedShape}
      <GroundPlane />
    </Canvas>
  );
};

export default MainPanel;
