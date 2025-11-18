import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ImageTextSectionProps {
  title: string;
  children: ReactNode;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  button?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  reverse?: boolean;
}

export default function ImageTextSection({
  title,
  children,
  image,
  button,
  reverse = false,
}: ImageTextSectionProps) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>
      <div className="w-full md:w-1/2">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 250}
          height={image.height || 250}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-h2 md:text-h2-tablet mb-6">{title}</h2>
        {children}
        {button && (
          button.href ? (
            <Button variant="default" className="mt-6" asChild>
              <Link href={button.href}>{button.label}</Link>
            </Button>
          ) : (
            <Button variant="default" className="mt-6" onClick={button.onClick}>
              {button.label}
            </Button>
          )
        )}
      </div>
    </div>
  );
}

