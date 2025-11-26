import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  author?: string;
}

interface ProductShowcaseSectionProps {
  badge?: string;
  title: string;
  products: Product[];
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
}

export default function ProductShowcaseSection({
  badge,
  title,
  products,
  buttonLabel,
  buttonHref,
  className = "",
}: ProductShowcaseSectionProps) {
  return (
    <section className={`py-20 md:py-16 ${className}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          {badge && (
            <div className="inline-block mb-4">
              <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
                {badge}
              </span>
            </div>
          )}
          <h2 className="text-h2 md:text-h2-tablet text-primary text-center mx-auto max-w-4xl">{title}</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative w-full rounded-xl aspect-square overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className=" px-3 py-1 rounded-full text-body1 font-semibold text-primary">
                    {product.price}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <button className="p-3 rounded-full bg-primary text-secondary font-bold hover:text-primary hover:bg-secondary transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="py-6 px-2">
                <h3 className="text-h5 md:text-h5-tablet text-primary mb-2">
                  {product.name}
                </h3>
                {product.author && (
                  <p className="text-body3 text-text mb-4">{product.author}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {buttonLabel && buttonHref && (
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              className="bg-accent text-primary hover:bg-purple"
              asChild
            >
              <Link href={buttonHref}>{buttonLabel}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

