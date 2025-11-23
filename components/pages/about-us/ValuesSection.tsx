import { Plus, BookOpen, Rocket, Award, Users, Target } from "lucide-react";

interface Value {
  id: number;
  icon: "plus" | "diversity" | "rocket" | "award" | "users" | "target";
  title: string;
  description: string;
}

interface ValuesSectionProps {
  badge: string;
  title: string;
  values: Value[];
  className?: string;
}

interface ValuesSectionProps {
  badge: string;
  title: string;
  values: Value[];
  className?: string;
}

const iconMap = {
  plus: Plus,
  diversity: BookOpen,
  rocket: Rocket,
  award: Award,
  users: Users,
  target: Target,
};

export default function ValuesSection({
  badge,
  title,
  values,
  className = "",
}: ValuesSectionProps) {
  return (
    <section className={`py-20 md:py-16 ${className}`}>
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

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div
                key={value.id}
                className="p-8"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-purple rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-h5 md:text-h5-tablet text-primary mb-4 font-bold">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-body2 text-text leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

