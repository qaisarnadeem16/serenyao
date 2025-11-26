import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface TrustedPartnerSectionProps {
  badge: string;
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  features: Feature[];
  buttonLabel: string;
  buttonHref?: string;
  className?: string;
  sectionBackground?: "main-bg" | "none";
  featuresBackground?: "main-bg" | "white";
}

export default function TrustedPartnerSection({
  badge,
  title,
  image,
  features,
  buttonLabel,
  buttonHref,
  className = "",
  sectionBackground = "none",
  featuresBackground = "main-bg",
}: TrustedPartnerSectionProps) {
  const sectionBgClass = sectionBackground === "main-bg" ? "bg-main-bg" : "";
  const featuresBgClass = featuresBackground === "white" ? "bg-white" : "bg-main-bg";
  
  return (
    <section className={`py-20 md:py-16 ${sectionBgClass} ${className}`}>
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
              {badge}
            </span>
          </div>
          <h2 className="text-h2 md:text-h2-tablet text-primary max-w-4xl">{title}</h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right: Features Panel */}
          <div className="w-full lg:w-3/5 flex flex-col justify-between gap-8">
            <div className={`${featuresBgClass} rounded-lg p-8 md:p-10`}>
              <div className="flex flex-col gap-8 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-h5 md:text-h5-tablet text-primary mb-2 font-bold">
                        {feature.title}
                      </h3>
                      <p className="text-body2 text-text leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              {buttonHref ? (
                <Button
                  variant="default"
                  size="lg"
                  className="bg-accent text-primary hover:bg-purple"
                  asChild
                >
                  <Link href={buttonHref}>{buttonLabel}</Link>
                </Button>
              ) : (
                <Button
                  variant="default"
                  size="lg"
                  className="bg-accent text-primary hover:bg-purple"
                >
                  {buttonLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

