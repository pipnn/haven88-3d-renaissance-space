
import { useRef, Suspense } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Group } from 'three';

interface Model3DProps {
  modelPath: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
}

const Model3D = ({ 
  modelPath, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1,
  autoRotate = true 
}: Model3DProps) => {
  const meshRef = useRef<Group>(null);
  
  let gltf;
  try {
    gltf = useLoader(GLTFLoader, modelPath);
  } catch (error) {
    console.log('Model loading error:', error);
    return (
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    );
  }
  
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Suspense fallback={
      <mesh position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    }>
      <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <primitive object={gltf.scene} />
      </group>
    </Suspense>
  );
};

export default Model3D;
