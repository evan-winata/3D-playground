import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

type Props = {
  color?: string;
  enableXAxisRotation?: boolean;
  enableYAxisRotation?: boolean;
} & JSX.IntrinsicElements["mesh"];

const Box = (props: Props) => {
  const { color, enableXAxisRotation, enableYAxisRotation } = props;
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    mesh.current.rotation.x += enableXAxisRotation ? 0.01 : 0;
    mesh.current.rotation.y += enableYAxisRotation ? 0.01 : 0;
  });
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial attach="material" transparent color={hovered ? "orange" : color} />
    </mesh>
  );
};

export default Box;
