export interface ProductSpec {
  height: string;
  material: string;
  scale: string;
  weight: string;
}

export interface Product {
  id: number;
  name: string;
  model: string;
  image: string;
  description: string;
  price: number;
  category: string;
  specs: ProductSpec;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Robô Amarelo",
    model: "/models/robo1.glb",
    image: "/images/robo1.png",
    description:
      "Unidade de combate de alta performance, equipada com blindagem reforçada e sistemas de armas de última geração.",
    price: 349.9,
    category: "Combate",
    badge: "Novo",
    specs: {
      height: "25 cm",
      material: "PVC Premium",
      scale: "1/10",
      weight: "320 g",
    },
  },
  {
    id: 2,
    name: "Robô Dj",
    model: "/models/robo2.glb",
    image: "/images/robo2.png",
    description:
      "Projetado para missões de exploração em ambientes hostis. Sensores avançados e propulsores laterais garantem máxima mobilidade.",
    price: 299.9,
    category: "Exploração",
    specs: {
      height: "22 cm",
      material: "PVC",
      scale: "1/10",
      weight: "280 g",
    },
  },
  {
    id: 3,
    name: "Robô Militar",
    model: "/models/robo3.glb",
    image: "/images/robo3.png",
    description:
      "Unidade tática militar de operações especiais. Camuflagem adaptativa e resistência a condições extremas tornam este modelo único.",
    price: 379.9,
    category: "Militar",
    badge: "Mais Vendido",
    specs: {
      height: "27 cm",
      material: "PVC Premium",
      scale: "1/10",
      weight: "350 g",
    },
  },
  {
    id: 4,
    name: "Robô Dourado",
    model: "/models/robo4.glb",
    image: "/images/robo4.png",
    description:
      "Peça rara de colecionador com acabamento em dourado metalizado.",
    price: 599.9,
    category: "Colecionável",
    badge: "Edição Limitada",
    specs: {
      height: "28 cm",
      material: "PVC Ultra Premium",
      scale: "1/10",
      weight: "410 g",
    },
  },
];