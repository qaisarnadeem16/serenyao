import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default function ProductDetails({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch product data based on the ID
  const product = {
    id: params.id,
    name: "Adventure Stories Collection",
    price: "$19.99",
    description: "Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut id aenean.",
    image: "https://narakido.tokotema.xyz/wp-content/uploads/2024/11/image-33-1.jpg",
  };

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-30 px-0"
        style={{
          backgroundImage: "url('https://narakido.tokotema.xyz/wp-content/uploads/2024/11/image-19-1.png')",
          backgroundPosition: "center center",
        }}
      >
        <div className="container mx-auto px-5 py-30 md:py-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-center text-h1 md:text-h1-tablet">Product Details</h1>
            <div className="flex flex-row items-center justify-center gap-2">
              <Link href="/" className="text-body3 text-primary hover:text-secondary">
                Home
              </Link>
              <span className="text-body3 text-primary">/</span>
              <Link href="/products" className="text-body3 text-primary hover:text-secondary">
                Products
              </Link>
              <span className="text-body3 text-primary">/</span>
              <span className="text-body3 text-purple">Product Details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-30 px-0 md:py-10">
        <div className="container mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2">
              <h2 className="text-h2 md:text-h2-tablet mb-4">{product.name}</h2>
              <p className="text-h4 text-purple mb-6">{product.price}</p>
              <p className="text-body1 text-text mb-8">{product.description}</p>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <label className="text-body2 font-medium">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-20 px-4 py-2 border border-gray rounded-full text-center"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="default" size="lg" className="flex-1">
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="w-14 h-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

