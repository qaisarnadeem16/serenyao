import Image from "next/image";

interface VisionSectionProps {
  badge: string;
  mission: string;
  backgroundImage?: {
    src: string;
    alt: string;
  };
  className?: string;
}

export default function VisionSection({
  badge,
  mission,
  backgroundImage,
  className = "",
}: VisionSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`} style={{ minHeight: "620px" }}>
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

      <div className="container relative z-10 h-full flex items-center justify-center py-20 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
              {badge}
            </span>
          </div>

          {/* Mission Text */}
          <p className="text-h1 md:text-h1-tablet text-white leading-relaxed max-w-4xl">
            {mission}
          </p>
        </div>
      </div>
    </section>
  );
}

