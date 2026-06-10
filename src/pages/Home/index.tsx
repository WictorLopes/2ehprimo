import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020817] text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#020817]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-lg font-extrabold tracking-tight text-slate-100">
            2ehprimo
          </span>
          <nav className="flex gap-7">
            {["Catálogo", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-slate-500 hover:text-white transition-colors no-underline"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        <div className="py-20" style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p className="text-xs font-bold text-amber-400 uppercase tracking-[0.15em] mb-4">
            Action Figures · Visualização 3D
          </p>
          <h1 className="text-[clamp(48px,7vw,72px)] font-black tracking-[-0.04em] leading-none text-slate-50 mb-5">
            2ehprimo
          </h1>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed mb-12">
            Explore nossa coleção de robôs em visualização 3D interativa. Gire,
            aproxime e conheça cada detalhe antes de comprar.
          </p>

          {/* Stats */}
          <div className="flex gap-10 flex-wrap">
            {[
              { value: `${products.length}`, label: "modelos" },
              { value: "3D", label: "interativo" },
              { value: "PVC", label: "premium" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-3xl font-extrabold text-slate-100 tracking-tight">
                  {value}
                </span>
                <span className="text-sm text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 mb-10" />

        {/* Section header */}
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-300">Coleção completa</h2>
          <span className="text-sm text-slate-500">{products.length} itens</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-20">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              model={product.model}
              image={product.image}
              price={product.price}
              category={product.category}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
}