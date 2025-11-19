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
      <div className="w-16 h-16 border-2 border-secondary rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
        <Image src={icon.src} alt={icon.alt} width={64} height={64} className="w-full h-full rounded-full object-cover" />
      </div>
      <h3 className="text-h6 mb-4">{title}</h3>
      <p className="text-body2 text-text">{description}</p>
    </div>
  );
}

