
import { useRef } from 'react';
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
  
  try {
    const gltf = useLoader(GLTFLoader, modelPath);
    
    useFrame((state) => {
      if (meshRef.current && autoRotate) {
        meshRef.current.rotation.y += 0.01;
      }
    });

    return (
      <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <primitive object={gltf.scene} />
      </group>
    );
  } catch (error) {
    console.log('Model loading error:', error);
    return null;
  }
};

export default Model3D;
