"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type StepPosition = {
  x: number;
  y: number;
  z: number;
};

type Props = {
  stepsPositions: StepPosition[];
  processInView: boolean;
};

function Card({
  target,
  floating,
}: {
  target: StepPosition;
  floating: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;

    if (floating) {
      // Mouvement libre
      ref.current.position.x += Math.sin(Date.now() * 0.001 + ref.current.id) * 0.005;
      ref.current.position.y += Math.cos(Date.now() * 0.001 + ref.current.id) * 0.005;
      ref.current.rotation.z += 0.002;
    } else {
      // Fixé derrière le step
      ref.current.position.x += (target.x - ref.current.position.x) * 0.05;
      ref.current.position.y += (target.y - ref.current.position.y) * 0.05;
      ref.current.position.z += (target.z - ref.current.position.z) * 0.05;
    }
  });

  return (
    <Plane ref={ref} args={[2, 3]}>
      <meshStandardMaterial color="#FFFFFF" transparent opacity={floating ? 0.3 : 0.1} />
    </Plane>
  );
}

export default function BackgroundCards({ stepsPositions, processInView }: Props) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={1} />

        {stepsPositions.map((pos, index) => (
          <Card key={index} target={pos} floating={!processInView} />
        ))}
      </Canvas>
    </div>
  );
}