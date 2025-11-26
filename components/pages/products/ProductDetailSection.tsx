import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function ProductDetailSection() {
  return (
    <section className="py-20 md:py-16">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-sm">
              <Image
                src="/assets/images/product-1.jpg"
                alt="A Day at the Farm book cover"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1 text-orange">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-orange text-orange" />
                ))}
              </div>
              <p className="text-body3 text-text">(1 Customer Review)</p>
            </div>
            <h1 className="text-h2 md:text-h1-tablet text-primary mb-3">A Day at the Farm</h1>
            <p className="text-h3 md:text-h2-tablet text-purple mb-6">$18.00</p>
            <p className="text-body1 text-text mb-8 max-w-xl">
              Erat pulvinar gravida aliquam dui praesent sapien ullamcorper. Non malesuada amet eget. Auctor varius vel
              nullam lacinia. Tincidunt vel vulputate metus condimentum adipiscing fermentum a proin fringilla. At sed purus
              tortor tristique venenatis turpis imperdiet vel. Orci eu ac faucibus velit odio.
            </p>

            <div className="space-y-6 py-6 mb-8 border-t border-b border-gray/60">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-caption uppercase text-text tracking-wide w-32">SKU</span>
                <span className="text-body1 text-primary font-medium border-b border-gray/40 flex-1 pb-3 sm:pb-0">
                  644
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-caption uppercase text-text tracking-wide w-32">Categories</span>
                <span className="text-body1 text-primary font-medium border-b border-gray/40 flex-1 pb-3 sm:pb-0">
                  Farm, Children, Book
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-accent text-primary hover:bg-secondary px-10 py-6 text-button uppercase tracking-wide"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

