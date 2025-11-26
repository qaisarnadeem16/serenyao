import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonLabel: string;
  buttonHref?: string;
  highlighted?: boolean;
}

interface PricingSectionProps {
  badge: string;
  title: string;
  subscribeButtonLabel: string;
  subscribeButtonHref?: string;
  plans: PricingPlan[];
  className?: string;
}

export default function PricingSection({
  badge,
  title,
  subscribeButtonLabel,
  subscribeButtonHref,
  plans,
  className = "",
}: PricingSectionProps) {
  return (
    <section className={`py-20 md:py-16 bg-main-bg ${className}`}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <div className="inline-block mb-4">
              <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
                {badge}
              </span>
            </div>
            <h2 className="text-h2 md:text-h2-tablet text-primary max-w-3xl">{title}</h2>
          </div>
          {subscribeButtonHref ? (
            <Button
              variant="default"
              size="lg"
              className="bg-accent text-primary hover:bg-purple"
              asChild
            >
              <Link href={subscribeButtonHref}>{subscribeButtonLabel}</Link>
            </Button>
          ) : (
            <Button
              variant="default"
              size="lg"
              className="bg-accent text-primary hover:bg-purple"
            >
              {subscribeButtonLabel}
            </Button>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
            >
              {/* Price */}
              <div className="mb-4">
                <span className={`text-h1 md:text-h1-tablet font-bold ${plan.highlighted ? "text-purple" : "text-purple"}`}>
                  {plan.price}
                </span>
              </div>

              {/* Plan Name */}
              <h3 className={`text-h4 md:text-h4-tablet font-bold mb-4 ${plan.highlighted ? "text-white" : "text-primary"}`}>
                {plan.name}
              </h3>

              {/* Description */}
              <p className={`text-body2 mb-6 ${plan.highlighted ? "text-white/80" : "text-text"}`}>
                {plan.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <p className={`text-body2 font-medium mb-4 ${plan.highlighted ? "text-white" : "text-primary"}`}>
                  FEATURES:
                </p>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                      <span className={`text-body2 ${plan.highlighted ? "text-white" : "text-text"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              {plan.buttonHref ? (
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-accent text-primary hover:bg-purple"
                  asChild
                >
                  <Link href={plan.buttonHref}>{plan.buttonLabel}</Link>
                </Button>
              ) : (
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-accent text-primary hover:bg-purple"
                >
                  {plan.buttonLabel}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

