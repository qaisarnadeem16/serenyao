import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  id?: string;
}

export default function SectionContainer({
  children,
  className = "py-30 px-0 md:py-10",
  maxWidth = "full",
  id,
}: SectionContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-sm mx-auto px-5 md:px-10",
    md: "max-w-md mx-auto px-5 md:px-10",
    lg: "max-w-lg mx-auto px-5 md:px-10",
    xl: "max-w-xl mx-auto px-5 md:px-10",
    "2xl": "max-w-2xl mx-auto px-5 md:px-10",
    full: "container",
  };

  return (
    <section className={className} id={id}>
      <div className={maxWidthClasses[maxWidth]}>
        {children}
      </div>
    </section>
  );
}

