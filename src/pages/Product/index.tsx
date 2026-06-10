import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import ProductViewer from "../../components/ProductViewer";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex flex-col items-center justify-center gap-3">
        <p className="text-5xl">🤖</p>
        <h1 className="text-2xl font-bold">Produto não encontrado</h1>
        <Link to="/" className="text-slate-500 hover:text-white transition-colors no-underline text-sm">
          ← Voltar ao catálogo
        </Link>
      </div>
    );
  }

  const specLabels: Record<string, string> = {
    height: "Altura",
    material: "Material",
    scale: "Escala",
    weight: "Peso",
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#020817]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link to="/" className="text-slate-500 hover:text-white transition-colors no-underline text-sm">
            ← Catálogo
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-slate-400 text-sm">{product.name}</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-14 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Viewer */}
          <div className="lg:sticky lg:top-20">
            <ProductViewer model={product.model} />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em]">
                {product.category}
              </span>
              {product.badge && (
                <span className="bg-amber-400 text-amber-950 text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-50 m-0">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-2.5">
              <span className="text-3xl font-extrabold text-slate-100 tracking-tight">
                {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </span>
              <span className="text-slate-500 text-sm">à vista</span>
            </div>

            <p className="text-slate-400 text-base leading-relaxed m-0">
              {product.description}
            </p>

            <div className="rounded-xl border border-slate-800 overflow-hidden">
              {Object.entries(product.specs).map(([key, value], i, arr) => (
                <div
                  key={key}
                  className={`flex justify-between items-center px-5 py-3.5 text-sm ${i < arr.length - 1 ? "border-b border-slate-800" : ""} ${i % 2 === 0 ? "bg-slate-900/60" : "bg-slate-900/30"}`}
                >
                  <span className="text-slate-500">{specLabels[key] ?? key}</span>
                  <span className="text-slate-300 font-semibold">{value}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-slate-100 hover:bg-white text-slate-950 font-bold py-4 rounded-xl text-base transition-colors cursor-pointer border-0">
              Adicionar ao carrinho
            </button>
            <button className="w-full bg-transparent hover:border-slate-500 hover:text-white text-slate-400 border border-slate-800 font-semibold py-4 rounded-xl text-base transition-all cursor-pointer">
              ♡ Adicionar à lista de desejos
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}