import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TeamPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CareersSectionProps {
  badge: string;
  title: string;
  description: string;
  teamPhotos: TeamPhoto[];
  buttonLabel: string;
  buttonHref?: string;
  className?: string;
}

export default function CareersSection({
  badge,
  title,
  description,
  teamPhotos,
  buttonLabel,
  buttonHref,
  className = "",
}: CareersSectionProps) {
  return (
    <section className={`py-20 md:py-16 ${className}`}>
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
              {badge}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-h2 md:text-h2-tablet text-primary mb-8 max-w-7xl">
            {title}
          </h2>

          {/* Team Photos */}
          <div className="flex justify-center gap-6 mb-8">
            {teamPhotos.map((photo, index) => (
              <div key={index} className="relative w-20 h-20 rounded-full overflow-hidden bg-gray">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-body1 text-text mb-8 leading-relaxed">
            {description}
          </p>

          {/* CTA Button */}
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
    </section>
  );
}

