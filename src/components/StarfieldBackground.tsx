'use client';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Suspense, useEffect } from 'react';

export default function StarfieldBackground() {
  useEffect(() => {
    console.log('✅ Quantum Starfield Mounted');
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars
            radius={80}         // how far the stars spread
            depth={120}         // how deep the layers go
            count={8000}        // number of stars
            factor={4}          // star intensity
            saturation={0}      // grayscale
            fade                // fade stars at edge
            speed={1}           // motion speed
          />
        </Suspense>
      </Canvas>
    </div>
  );
}


