import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  badge?: string;
  title: string;
  description: string;
  primaryButton: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    label?: string;
    icon?: React.ReactNode;
    href?: string;
    onClick?: () => void;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  } | {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export default function HeroSection({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  image,
}: HeroSectionProps) {
  return (
    <section className="container mt-[100px]">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        {/* Left Content */}
        <div className="w-full md:w-[44.73%] flex flex-col justify-center">
          {badge && (
            <div className="inline-block mb-4">
              <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
                {badge}
              </span>
            </div>
          )}
          <h1 className="mt-0 mb-6 text-h1 md:text-h1-tablet leading-tight">{title}</h1>
          <p className="text-body2 text-text mt-0 mb-8 leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row gap-2.5 mt-6">
            {primaryButton.href ? (
              <Button variant="default" className="bg-accent text-primary hover:bg-secondary" asChild>
                <Link href={primaryButton.href}>{primaryButton.label}</Link>
              </Button>
            ) : (
              <Button
                variant="default"
                className="bg-accent text-primary hover:bg-secondary"
                onClick={primaryButton.onClick}
              >
                {primaryButton.label}
              </Button>
            )}
            {secondaryButton && (
              secondaryButton.href ? (
                <Button variant="default" className="bg-purple text-white hover:bg-soft-purple" asChild>
                  <Link href={secondaryButton.href}>
                    {secondaryButton.label || (secondaryButton.icon && secondaryButton.icon) || <ArrowRight className="h-5 w-5" />}
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="default"
                  className="bg-purple text-white hover:bg-soft-purple"
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.label || (secondaryButton.icon && secondaryButton.icon) || <ArrowRight className="h-5 w-5" />}
                </Button>
              )
            )}
          </div>
        </div>

        {/* Right Image(s) */}
        <div className="w-full md:w-[46.31%]">
          {Array.isArray(image) ? (
            <div className="flex flex-row gap-[20px] w-full h-full">
              {image.map((img, index) => (
                <div key={index} className="flex-1 h-[400px]">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    width={img.width} 
                    height={img.height} 
                    className="w-full h-full object-cover rounded-lg" 
                  />
                </div>
              ))}
            </div>
          ) : (
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="w-full h-auto rounded-lg" />
          )}
        </div>
      </div>
    </section>
  );
}

