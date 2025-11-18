import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="text-body3 text-primary hover:text-secondary">
              {item.label}
            </Link>
          ) : (
            <span className="text-body3 text-purple">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="text-body3 text-primary">/</span>}
        </div>
      ))}
    </div>
  );
}

