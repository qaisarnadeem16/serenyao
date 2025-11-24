import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  badge?: string;
  title?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  backgroundImage?: {
    src: string;
    alt: string;
  };
  features: Feature[];
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
}

export default function FeaturesSection({
  badge,
  title,
  image,
  backgroundImage,
  features,
  buttonLabel,
  buttonHref,
  className = "",
}: FeaturesSectionProps) {
  return (
    <section className={`relative py-20 md:py-16 overflow-hidden ${className}`}>
    {/* Background Image */}
    {backgroundImage && (
      <div className="absolute inset-0">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    )}

    <div className="container relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-end">
        {/* Left: Image */}
        <div className="w-full lg:w-2/5 flex-shrink-0 -mb-20 md:-mb-16">
          <div className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>

          {/* Right: Features */}
          <div className="w-full lg:w-3/5">
            {/* Badge */}
            {badge && (
              <div className="inline-block mb-4">
                <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
                  {badge}
                </span>
              </div>
            )}
            {/* Title */}
            {title && (
              <h2 className="text-h2 md:text-h2-tablet text-white mb-8">
                {title}
              </h2>
            )}
            <div className="flex flex-col gap-8 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-h1 md:text-h5-tablet text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-body2 text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* CTA Button */}
            {buttonLabel && buttonHref && (
              <Button
                variant="default"
                size="lg"
                className="bg-accent text-primary hover:bg-secondary"
                asChild
              >
                <Link href={buttonHref}>{buttonLabel}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

