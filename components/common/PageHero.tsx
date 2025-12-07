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
      className="relative bg-cover bg-center bg-no-repeat px-0"
      style={{
        backgroundImage: `url('${backgroundImage || defaultBackground}')`,
        backgroundPosition: "center center",
        height: "350px",
      }}
    >
      <div className="container h-full flex items-center justify-center py-30 md:py-10 px-4 sm:px-5 md:px-10">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="text-center text-h4 sm:text-h3 md:text-h2 lg:text-h1-tablet leading-tight px-2">{title}</h1>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
    </section>
  );
}

