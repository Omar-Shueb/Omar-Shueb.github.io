import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/headset.glb");
  useFrame((state) => {
    group.current.children[0].children.forEach((child, index) => {
      const et = state.clock.elapsedTime;
      child.position.z = Math.sin((et + index * 2000) / 2) / 15 + 0.25;
      child.rotation.x = Math.sin((et + index * 2000) / 3) / 10 + 1.8;
      child.rotation.z = Math.sin((et + index * 2000) / 3) / 10;
    });
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/headset.glb");
