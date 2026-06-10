import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html, useProgress } from "@react-three/drei";
import { Suspense, useState } from "react";
import FigureModel from "../ProductViewer/FigureModel";
import type { Product } from "../../data/products";

type ProductCardProps = Pick<
  Product,
  "id" | "name" | "description" | "model" | "image" | "price" | "category" | "badge"
>;

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-6 h-6 border-2 border-white/20 border-t-white/70 rounded-full animate-spin" />
        <span className="text-white/40 text-[10px]">{Math.round(progress)}%</span>
      </div>
    </Html>
  );
}

export default function ProductCard({
  id, name, description, model, image, price, category, badge,
}: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/product/${id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 hover:-translate-y-1 transition-all duration-300 no-underline"
    >
      <div className="relative h-52 bg-gradient-to-b from-slate-800 to-slate-900">
        {badge && (
          <span className="absolute top-3 left-3 z-10 bg-amber-400 text-amber-950 text-[11px] font-bold px-2.5 py-1 rounded-full">
            {badge}
          </span>
        )}

        {/* Print estático — some no hover */}
        <img
          src={image}
          alt={name}
          className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}
        />

        {/* Canvas 3D — aparece no hover */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          {hovered && (
            <Canvas camera={{ position: [0, 1, 4], fov: 35 }} frameloop="demand">
              <Suspense fallback={<Loader />}>
                <ambientLight intensity={1.8} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <Environment preset="studio" />
                <group position={[0, -0.5, 0]} scale={[2, 2, 2]}>
                  <FigureModel model={model} />
                </group>
                <OrbitControls
                  autoRotate
                  autoRotateSpeed={2}
                  enableZoom={false}
                  enablePan={false}
                  target={[0, 0.5, 0]}
                  makeDefault
                />
              </Suspense>
            </Canvas>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
          {category}
        </span>
        <h2 className="text-white font-bold text-[17px] leading-snug m-0">
          {name}
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 m-0">
          {description}
        </p>
        <div className="mt-auto pt-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-slate-200 font-bold text-lg">
            {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
          <span className="text-slate-600 group-hover:text-slate-400 text-xs transition-colors">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  );
}