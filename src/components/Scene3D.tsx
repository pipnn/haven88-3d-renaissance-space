
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';
import Model3D from './Model3D';

interface Scene3DProps {
  className?: string;
  models?: string[];
  autoRotate?: boolean;
}

const Scene3D = ({ className = "", models = [], autoRotate = true }: Scene3DProps) => {
  const defaultModels = [
    '/src/leather_chairgltf.glb',
    '/src/office_chair.glb',
    '/src/red_chair.glb',
    '/src/table_wood.glb'
  ];
  
  const modelsToShow = models.length > 0 ? models : defaultModels;

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {modelsToShow.map((model, index) => (
            <Float
              key={index}
              speed={1 + index * 0.2}
              rotationIntensity={0.5}
              floatIntensity={0.5}
            >
              <Model3D
                modelPath={model}
                position={[
                  (index - modelsToShow.length / 2) * 3,
                  Math.sin(index) * 2,
                  Math.cos(index) * 2
                ]}
                scale={0.5}
                autoRotate={autoRotate}
              />
            </Float>
          ))}
          
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
