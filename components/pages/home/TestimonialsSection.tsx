import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    rating: number;
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

interface TestimonialsSectionProps {
    badge: string;
    title: string;
    testimonials: Testimonial[];
    mainImage: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    buttonLabel?: string;
    buttonHref?: string;
    className?: string;
}

export default function TestimonialsSection({
    badge,
    title,
    testimonials,
    mainImage,
    buttonLabel,
    buttonHref,
    className = "",
}: TestimonialsSectionProps) {
    return (
        <section className={`py-20 md:py-16 ${className}`}>
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
                    {buttonLabel && buttonHref && (
                        <Button
                            variant="default"
                            size="lg"
                            className="bg-accent text-primary hover:bg-purple"
                            asChild
                        >
                            <Link href={buttonHref}>{buttonLabel}</Link>
                        </Button>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left: Testimonials */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-12">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="flex gap-6">
                                {/* Profile Picture */}
                                <div className="flex-shrink-0">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray">
                                        <Image
                                            src={testimonial.image.src}
                                            alt={testimonial.image.alt}
                                            width={testimonial.image.width}
                                            height={testimonial.image.height}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Testimonial Content */}
                                <div className="flex-1">
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                                        ))}
                                    </div>
                                    <p className="text-h6 text-primary mb-4 font-medium">
                                        "{testimonial.quote}"
                                    </p>
                                    <p className="text-body3 text-purple uppercase">
                                        {testimonial.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Main Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <Image
                                src={mainImage.src}
                                alt={mainImage.alt}
                                width={mainImage.width}
                                height={mainImage.height}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

