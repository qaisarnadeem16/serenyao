interface MissionTextSectionProps {
  text: string;
  backgroundImage?: string;
  className?: string;
}

export default function MissionTextSection({
  text,
  backgroundImage,
  className = "",
}: MissionTextSectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "350px",
      }}
    >
      <div className="container h-full flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-h3 md:text-h3-tablet text-white leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

