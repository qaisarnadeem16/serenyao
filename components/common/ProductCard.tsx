import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price?: string;
  author?: string;
  showCartButton?: boolean;
  imageBaseUrl?: string;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  author,
  showCartButton = false,
  imageBaseUrl = "https://narakido.tokotema.xyz/wp-content/uploads/2024/11/",
}: ProductCardProps) {
  const imageSrc = image.startsWith("/") ? image : `${imageBaseUrl}${image}`;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-h6 mb-2">{name}</h3>
        {author && <p className="text-body3 text-text mb-4">{author}</p>}
        {price && <p className="text-body2 text-purple font-medium mb-4">{price}</p>}
        <div className="flex gap-2">
          <Button variant="default" className={showCartButton ? "flex-1" : "w-full"} asChild>
            <Link href={`/products/${id}`}>View Details</Link>
          </Button>
          {showCartButton && (
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218m1.37-13.5H21.75m-7.5 0H12m-2.25 0H8.25m2.25 0H12m-2.25 0H8.25m0 0a3 3 0 00-3 3v9a3 3 0 003 3h12a3 3 0 003-3V9a3 3 0 00-3-3H8.25z"
                />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

