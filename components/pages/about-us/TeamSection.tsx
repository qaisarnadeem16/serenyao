import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  backgroundColor: "purple" | "green" | "orange";
}

interface TeamSectionProps {
  badge: string;
  title: string;
  members: TeamMember[];
  className?: string;
}

const backgroundColorClasses = {
  purple: "bg-soft-purple",
  green: "bg-secondary",
  orange: "bg-orange/20",
};

const textColorClasses = {
  purple: "text-purple",
  green: "text-green-600",
  orange: "text-orange",
};

export default function TeamSection({
  badge,
  title,
  members,
  className = "bg-main-bg",
}: TeamSectionProps) {
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
          <h2 className="text-h2 md:text-h2-tablet text-primary max-w-3xl mx-auto">{title}</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {members.map((member) => (
            <div
              key={member.id}
              className={`rounded-lg p-4`}
            >
              {/* Member Image */}
              <div className="mb-6">
                <div className="relative rounded-xl mx-auto overflow-hidden bg-white">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    width={member.image.width}
                    height={member.image.height}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-start">
                <h3 className="text-h4 md:text-h4-tablet text-primary mb-2 font-bold">
                  {member.name}
                </h3>
                <p className={`text-body2 font-medium text-purple`}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

