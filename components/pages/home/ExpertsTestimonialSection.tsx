import Image from "next/image";
import { Star } from "lucide-react";

interface Expert {
  name: string;
  image: string;
  alt: string;
}

interface Testimonial {
  rating: number;
  text: string;
  author: {
    name: string;
    role: string;
    image: string;
    alt: string;
  };
}

interface ExpertsTestimonialSectionProps {
  title: string;
  experts: Expert[];
  testimonial: Testimonial;
  className?: string;
}

export default function ExpertsTestimonialSection({
  title,
  experts,
  testimonial,
  className = "",
}: ExpertsTestimonialSectionProps) {
  return (
    <section className={`py-4 ${className}`}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Experts Section */}
          <div className="w-full lg:w-1/2">
            <p className="text-h6 md:text-h6-tablet mb-8 text-primary leading-relaxed max-w-sm">{title}</p>
            <div className="flex gap-6">
              {experts.map((expert, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray">
                    <Image
                      src={expert.image}
                      alt={expert.alt}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonial Section */}
          <div className="w-full lg:w-1/2">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-orange text-orange" />
              ))}
            </div>
            <p className="text-body1 text-text mb-6 leading-relaxed">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray flex-shrink-0">
                <Image
                  src={testimonial.author.image}
                  alt={testimonial.author.alt}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-body2 font-medium text-primary mb-1">
                  {testimonial.author.name}
                </p>
                <p className="text-body3 text-text">{testimonial.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

