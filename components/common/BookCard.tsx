"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface BookCardProps {
  id: string;
  title: string;
  titleGerman?: string;
  image: string;
  category: string;
  ageRange?: string;
  slug: string;
}

export default function BookCard({
  id,
  title,
  titleGerman,
  image,
  category,
  ageRange,
  slug,
}: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/books/${slug}`}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Book Image Container with 3D Effect */}
      <div className="relative bg-gray/40 aspect-[3/4] flex items-center justify-center px-3 sm:px-4 md:px-5 py-6 sm:py-8 md:py-10 overflow-hidden">
        <div 
          className="relative w-[80%] sm:w-[85%] h-[85%] sm:h-[90%] transition-all duration-300"
          style={{
            transform: isHovered 
              ? "perspective(1200px) rotateY(-18deg) rotateX(3deg) scale(1.1)" 
              : "perspective(1200px) rotateY(-12deg) rotateX(3deg)",
            transformStyle: "preserve-3d",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-full" style={{ transform: "translateZ(30px)" }}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              sizes="(max-width: 640px) 65vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
          {/* Book spine shadow effect */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-1.5 sm:w-2 bg-black/25 rounded-r-sm"
            style={{
              transform: "translateX(100%) translateZ(-8px) rotateY(90deg)",
            }}
          />
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-h6 mb-2 text-primary group-hover:text-purple transition-colors">
          {title}
        </h3>
        {titleGerman && (
          <p className="text-body3 text-text mb-2 italic">{titleGerman}</p>
        )}
        <p className="text-body3 text-text mb-4">{category}</p>
        {ageRange && (
          <p className="text-caption text-purple mb-4">Ages {ageRange}</p>
        )}
        <Button
          variant="default"
          className="w-full bg-accent text-primary hover:bg-secondary mt-auto"
          asChild
        >
          <span>View Details</span>
        </Button>
      </div>
    </Link>
  );
}

