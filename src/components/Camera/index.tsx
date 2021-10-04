import React, { useRef } from "react";
import {
  useThree,
  useFrame,
  extend,
  ReactThreeFiber,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
/* Extends and safely typescripts the orbital control JSX element */
extend({ OrbitControls });
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

interface OrbitRef {
  obj: {
    update: Function;
  };
}

const Camera = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef<OrbitRef>();
  // useFrame((state) => controls.current?.update());
  useFrame(() => {
    controls.current?.obj?.update();
  });
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default Camera;
