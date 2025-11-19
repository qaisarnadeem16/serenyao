import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

const allProducts = [
  // Featured products from home page
  { id: 1, name: "Book Title 1", image: "/assets/Banner_gesamt.29.9_/27.png", author: "Author Name", price: "$19.99" },
  { id: 2, name: "Book Title 2", image: "/assets/Banner_gesamt.29.9_/28.png", author: "Author Name", price: "$17.99" },
  { id: 3, name: "Book Title 3", image: "/assets/Banner_gesamt.29.9_/35.png", author: "Author Name", price: "$21.99" },
  // Products from products page
  { id: 10, name: "Adventure Stories", image: "/assets/Banner_gesamt.29.9_/34.png", price: "$19.99" },
  { id: 11, name: "Fairy Tales", image: "/assets/Banner_gesamt.29.9_/21.png", price: "$17.99" },
  { id: 12, name: "Educational Books", image: "/assets/Banner_gesamt.29.9_/35.png", price: "$21.99" },
  { id: 13, name: "Picture Books", image: "/assets/Banner_gesamt.29.9_/40.png", price: "$15.99" },
  { id: 14, name: "Science Books", image: "/assets/Banner_gesamt.29.9_/4.png", price: "$23.99" },
  { id: 15, name: "Story Collections", image: "/assets/Banner_gesamt.29.9_/22.png", price: "$25.99" },
  // Kids Collection products
  { id: 20, name: "Unicorn Coloring Book", image: "/assets/Banner_gesamt.29.9_/16.png", price: "$12.99", author: "Serenyao Kids" },
  { id: 21, name: "Pebbel & Friends Storybook", image: "/assets/Banner_gesamt.29.9_/17.png", price: "$15.99", author: "Serenyao Kids" },
  { id: 22, name: "Animal Adventure Activity Book", image: "/assets/Banner_gesamt.29.9_/18.png", price: "$13.99", author: "Serenyao Kids" },
  { id: 23, name: "Kids Music Collection", image: "/assets/Banner_gesamt.29.9_/19.png", price: "$9.99", author: "Serenyao Kids" },
  { id: 24, name: "Magic Forest Coloring", image: "/assets/Banner_gesamt.29.9_/20.png", price: "$11.99", author: "Serenyao Kids" },
  { id: 25, name: "Bedtime Stories Audio", image: "/assets/Banner_gesamt.29.9_/21.png", price: "$8.99", author: "Serenyao Kids" },
  // Mindfulness Collection products
  { id: 30, name: "Mindfulness Journal", image: "/assets/Banner_gesamt.29.9_/49.png", price: "$18.99", author: "Serenyao" },
  { id: 31, name: "Calm & Joy Coloring Book", image: "/assets/Banner_gesamt.29.9_/50.png", price: "$16.99", author: "Serenyao" },
  { id: 32, name: "Self-Reflection Workbook", image: "/assets/Banner_gesamt.29.9_/51.png", price: "$19.99", author: "Serenyao" },
  { id: 33, name: "Peaceful Moments Journal", image: "/assets/Banner_gesamt.29.9_/52.png", price: "$17.99", author: "Serenyao" },
  { id: 34, name: "Mindful Mandala Coloring", image: "/assets/Banner_gesamt.29.9_/53.png", price: "$15.99", author: "Serenyao" },
  { id: 35, name: "Gratitude Practice Book", image: "/assets/Banner_gesamt.29.9_/54.png", price: "$14.99", author: "Serenyao" },
  // Audios Collection products
  { id: 40, name: "Sleep Stories Collection", image: "/assets/Banner_gesamt.29.9_/48.png", price: "$12.99", author: "Serenyao Audios" },
  { id: 41, name: "Guided Meditations", image: "/assets/Banner_gesamt.29.9_/55.png", price: "$14.99", author: "Serenyao Audios" },
  { id: 42, name: "Healing Music & Frequencies", image: "/assets/Banner_gesamt.29.9_/56.png", price: "$11.99", author: "Serenyao Audios" },
  { id: 43, name: "Nature Sounds for Relaxation", image: "/assets/Banner_gesamt.29.9_/57.png", price: "$10.99", author: "Serenyao Audios" },
  { id: 44, name: "Morning Mindfulness Audio", image: "/assets/Banner_gesamt.29.9_/58.png", price: "$9.99", author: "Serenyao Audios" },
  { id: 45, name: "Evening Wind-Down Stories", image: "/assets/Banner_gesamt.29.9_/59.png", price: "$13.99", author: "Serenyao Audios" },
];

export default function ProductDetails({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  const productData = {
    id: product.id,
    name: product.name,
    price: product.price || "$0.00",
    description: "Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut id aenean.",
    image: product.image.startsWith("/") ? product.image : `https://narakido.tokotema.xyz/wp-content/uploads/2024/11/${product.image}`,
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
        <div className="container py-30 md:py-10">
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
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
              <div className="h-full w-full">
                <Image
                  src={productData.image}
                  alt={productData.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-h2 md:text-h2-tablet mb-4 leading-tight">{productData.name}</h2>
              <p className="text-h4 text-purple mb-6">{productData.price}</p>
              <p className="text-body1 text-text mb-8">{productData.description}</p>
              
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

