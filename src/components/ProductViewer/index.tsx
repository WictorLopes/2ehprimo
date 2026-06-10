import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import FigureModel from "./FigureModel";

interface ProductViewerProps {
  model?: string;
}

export default function ProductViewer({ model }: ProductViewerProps) {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="relative h-125 w-full rounded-2xl overflow-hidden bg-linear-to-b from-slate-800 to-[#0a0f1e] border border-slate-800">
      <Canvas camera={{ position: [0, 1, 4], fov: 35 }} shadows>
        <Suspense
          fallback={
            <Html center>
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <p className="text-white/60 text-sm m-0">
                  Carregando modelo...
                </p>
              </div>
            </Html>
          }
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 8, 5]} intensity={2.5} castShadow />
          <directionalLight
            position={[-5, 3, -5]}
            intensity={0.6}
            color="#6699ff"
          />
          <pointLight position={[0, 5, 0]} intensity={1} />
          <Environment preset="studio" />
          {/* <Bounds fit clip observe margin={2}>
            <FigureModel model={model ?? ""} />
          </Bounds> */}
          <group position={[0, -0.5, 0]}>
            <FigureModel model={model ?? ""} />
          </group>
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={1.2}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.6}
            enableDamping
            dampingFactor={0.05}
            onStart={() => setAutoRotate(false)}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
        <span className="bg-black/50 text-white/40 text-[11px] px-3 py-1.5 rounded-full border border-white/10">
          Arraste para girar · Scroll para zoom
        </span>
      </div>

      <button
        onClick={() => setAutoRotate((v) => !v)}
        className="absolute top-3.5 right-3.5 bg-black/40 hover:bg-black/60 text-white/60 hover:text-white border border-white/10 hover:border-white/20 text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer backdrop-blur-sm"
      >
        {autoRotate ? "⏸ Pausar" : "▶ Girar"}
      </button>
    </div>
  );
}
