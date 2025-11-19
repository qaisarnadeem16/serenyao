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
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-16 items-stretch`}>
      <div className="w-full md:w-1/2">
        <div className="h-full w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 600}
            height={image.height || 600}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-h2 md:text-h2-tablet mb-6 text-primary leading-tight">{title}</h2>
        {children}
        {button && (
          button.href ? (
            <Button variant="default" className="mt-8 w-fit bg-accent text-primary hover:bg-secondary" asChild>
              <Link href={button.href}>{button.label}</Link>
            </Button>
          ) : (
            <Button variant="default" className="mt-8 w-fit bg-accent text-primary hover:bg-secondary" onClick={button.onClick}>
              {button.label}
            </Button>
          )
        )}
      </div>
    </div>
  );
}

