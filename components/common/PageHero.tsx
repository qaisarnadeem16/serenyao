import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

export default function PageHero({ title, breadcrumbs, backgroundImage }: PageHeroProps) {
  const defaultBackground = "https://narakido.tokotema.xyz/wp-content/uploads/2024/11/image-19-1.png";

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-30 px-0"
      style={{
        backgroundImage: `url('${backgroundImage || defaultBackground}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="container mx-auto px-5 py-30 md:py-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-h1 md:text-h1-tablet">{title}</h1>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
    </section>
  );
}

