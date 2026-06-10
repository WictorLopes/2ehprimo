import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

interface FigureModelProps {
  model: string;
  scale?: number;
}

export default function FigureModel({ model, scale = 1 }: FigureModelProps) {
  const { scene } = useGLTF(model);

  useEffect(() => {
    return () => {
      useGLTF.clear(model);
    };
  }, [model]);

  return <primitive object={scene} scale={scale} />;
}