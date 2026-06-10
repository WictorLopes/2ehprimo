import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function Catalog() {
  return (
    <div className="min-h-screen bg-[#020817] text-white font-sans px-6 py-10">
      <h1 className="text-4xl font-black tracking-tight text-slate-50 mb-1">
        Catálogo
      </h1>
      <p className="text-slate-500 text-sm mb-10">
        {products.length} produtos disponíveis
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
  );
}