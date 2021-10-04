import React, { useRef } from "react";

const GroundPlane = () => {
    const mesh = useRef<THREE.Mesh>(null!)
    // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    return (
      <mesh receiveShadow rotation={[5,0,0]} position={[0, -1, 0]} ref={mesh}>
        <planeBufferGeometry attach="geometry" args={[10, 10]} />
        <meshStandardMaterial attach="material" color="grey" />
      </mesh>
    );
}

export default GroundPlane;