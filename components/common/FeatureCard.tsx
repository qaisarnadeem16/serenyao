import Image from "next/image";

interface FeatureCardProps {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
        <Image src={icon.src} alt={icon.alt} width={32} height={32} />
      </div>
      <h3 className="text-h6 mb-4">{title}</h3>
      <p className="text-body2 text-text">{description}</p>
    </div>
  );
}

