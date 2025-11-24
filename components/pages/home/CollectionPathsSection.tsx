import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CollectionPath {
  id: number;
  title: string;
  ageRange: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

interface CollectionPathsSectionProps {
  badge: string;
  paths: CollectionPath[];
  className?: string;
}

export default function CollectionPathsSection({
  badge,
  paths,
  className = "",
}: CollectionPathsSectionProps) {
  return (
    <section className={`py-20 md:py-16 ${className}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
              {badge}
            </span>
          </div>
        </div>

        {/* Collection Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path) => (
            <div
              key={path.id}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              {/* Title */}
              <h3 className="text-h4 md:text-h4-tablet text-primary mb-2 font-bold">
                {path.title}
              </h3>
              
              {/* Age Range */}
              <p className="text-body2 text-text mb-6">
                {path.ageRange}
              </p>

              {/* Features List */}
              <ul className="flex flex-col gap-3 mb-8">
                {path.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple mt-1">•</span>
                    <span className="text-body2 text-text">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant="default"
                size="lg"
                className="w-full bg-purple text-white hover:bg-soft-purple"
                asChild
              >
                <Link href={path.ctaHref}>{path.ctaLabel}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

