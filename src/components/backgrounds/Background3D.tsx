"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, Box, Octahedron, Sparkles } from "@react-three/drei";

export default function BackgroundGeometric() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Petites étincelles discrètes */}
        <Sparkles count={2000} scale={20} size={1.5} color="#FFFFFF" speed={0.2} />

        {/* Icosahedron flottant */}
        {/* <Float speed={1} rotationIntensity={1} floatIntensity={2}>
          <Icosahedron args={[1, 0]} position={[-2, 0, 0]} scale={2}>
            <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.3} />
          </Icosahedron>
        </Float> */}

        {/* Box flottante */}
        {/* <Float speed={1.5} rotationIntensity={2} floatIntensity={2.5}>
          <Box args={[1, 1, 1]} position={[2, -1, -2]} scale={1.5}>
            <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.3} />
          </Box>
        </Float> */}

        {/* Octahedron flottant */}
        {/* <Float speed={0.8} rotationIntensity={1} floatIntensity={1.5}>
          <Octahedron args={[1, 0]} position={[0, 2, -3]} scale={1.8}>
            <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.3} />
          </Octahedron>
        </Float> */}
      </Canvas>
    </div>
  );
}