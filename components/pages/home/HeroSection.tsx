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
  };
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
    <section className="container mx-auto px-5 md:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        {/* Left Content */}
        <div className="w-full md:w-[44.73%]">
          {badge && (
            <div className="inline-block mb-0">
              <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
                {badge}
              </span>
            </div>
          )}
          <h1 className="mt-0 mb-0 text-h1 md:text-h1-tablet">{title}</h1>
          <p className="text-body2 text-text mt-0 mb-0">{description}</p>
          <div className="flex flex-row gap-2.5 mt-0">
            {primaryButton.href ? (
              <Button variant="default" className="bg-accent text-primary hover:bg-purple" asChild>
                <Link href={primaryButton.href}>{primaryButton.label}</Link>
              </Button>
            ) : (
              <Button
                variant="default"
                className="bg-accent text-primary hover:bg-purple"
                onClick={primaryButton.onClick}
              >
                {primaryButton.label}
              </Button>
            )}
            {secondaryButton && (
              secondaryButton.href ? (
                <Button variant="default" size="icon" className="bg-purple text-primary hover:bg-accent" asChild>
                  <Link href={secondaryButton.href}>{secondaryButton.icon || <ArrowRight className="h-5 w-5" />}</Link>
                </Button>
              ) : (
                <Button
                  variant="default"
                  size="icon"
                  className="bg-purple text-primary hover:bg-accent"
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.icon || <ArrowRight className="h-5 w-5" />}
                </Button>
              )
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[46.31%]">
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

