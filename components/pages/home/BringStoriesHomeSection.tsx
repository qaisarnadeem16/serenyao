import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Feature {
    title: string;
}

interface BringStoriesHomeSectionProps {
    badge: string;
    title: string;
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
    buttonLabel: string;
    buttonHref?: string;
    className?: string;
}

export default function BringStoriesHomeSection({
    badge,
    title,
    image,
    backgroundImage,
    features,
    buttonLabel,
    buttonHref,
    className = "",
}: BringStoriesHomeSectionProps) {
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
                        <div className="inline-block mb-4">
                            <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
                                {badge}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-h2 md:text-h2-tablet text-white mb-8">
                            {title}
                        </h2>

                        {/* Features List */}
                        <div className="flex flex-col gap-6 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 items-center">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                        <Check className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="text-body1 text-white">{feature.title}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        {buttonHref ? (
                            <Button
                                variant="default"
                                size="lg"
                                className="bg-accent text-primary hover:bg-secondary"
                                asChild
                            >
                                <Link href={buttonHref}>{buttonLabel}</Link>
                            </Button>
                        ) : (
                            <Button
                                variant="default"
                                size="lg"
                                className="bg-accent text-primary hover:bg-secondary"
                            >
                                {buttonLabel}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

