import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  buttonVariant?: "default" | "secondary" | "outline" | "ghost" | "link";
  className?: string;
}

export default function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
  buttonVariant = "default",
  className = "bg-main-bg py-20 md:py-16",
}: CTASectionProps) {
  return (
    <section className={className}>
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-h2 md:text-h2-tablet mb-6">{title}</h2>
        <p className="text-body1 text-text mb-8 max-w-2xl mx-auto">{description}</p>
        {buttonHref ? (
          <Button variant={buttonVariant} size="lg" className="bg-accent text-primary hover:bg-secondary" asChild>
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
        ) : (
          <Button variant={buttonVariant} size="lg" className="bg-accent text-primary hover:bg-secondary">
            {buttonLabel}
          </Button>
        )}
      </div>
    </section>
  );
}

