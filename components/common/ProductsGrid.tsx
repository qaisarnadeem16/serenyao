import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  image: string;
  price?: string;
  author?: string;
}

interface ProductsGridProps {
  products: Product[];
  showCartButton?: boolean;
  columns?: 1 | 2 | 3;
}

export default function ProductsGrid({ products, showCartButton = false, columns = 3 }: ProductsGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8`}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} showCartButton={showCartButton} />
      ))}
    </div>
  );
}

