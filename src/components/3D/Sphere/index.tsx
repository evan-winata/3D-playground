import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type Props = {
  color?: string;
  enableXAxisRotation?: boolean;
  enableYAxisRotation?: boolean;
} & JSX.IntrinsicElements["mesh"];

const Sphere = (props: Props) => {
  const { color, enableXAxisRotation, enableYAxisRotation } = props;
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    mesh.current.rotation.x += enableXAxisRotation ? 0.01 : 0;
    mesh.current.rotation.y += enableYAxisRotation ? 0.01 : 0;
  });
  return (
    <mesh visible {...props} castShadow ref={mesh}>
      <sphereGeometry attach="geometry" args={[0.75, 16, 16]} />
      <meshPhongMaterial attach="material" color={color} transparent />
    </mesh>
  );
};

export default Sphere;
