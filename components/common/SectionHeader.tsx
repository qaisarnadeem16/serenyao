interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = "text-center mb-12" }: SectionHeaderProps) {
  return (
    <div className={className}>
      <h2 className="text-h2 md:text-h2-tablet">{title}</h2>
      {description && <p className="text-body2 text-text mt-4">{description}</p>}
    </div>
  );
}

