import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export default function SectionContainer({
  children,
  className = "py-30 px-0 md:py-10",
  maxWidth = "full",
}: SectionContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "",
  };

  return (
    <section className={className}>
      <div className={`container mx-auto px-5 md:px-10 ${maxWidthClasses[maxWidth]}`}>
        {children}
      </div>
    </section>
  );
}

