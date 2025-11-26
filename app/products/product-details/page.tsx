import PageHero from "@/components/common/PageHero";
import ProductShowcaseSection from "@/components/pages/home/ProductShowcaseSection";
import LocationsSection from "@/components/pages/about-us/LocationsSection";
import ProductDetailSection from "@/components/pages/products/ProductDetailSection";
import ProductInfoTabs from "@/components/pages/products/ProductInfoTabs";

export default function ProductDetailsPage() {
  return (
    <>
      <PageHero
        title="Product Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Product Details" },
        ]}
        backgroundImage="/assets/images/Page-Header-BG.jpg"
      />

      <ProductDetailSection />

      <ProductInfoTabs
        description="Turpis eu amet odio velit mattis eget amet egestas. Aliquet a feugiat nisl lacus fermentum lectus ornare ut. Ut auctor justo purus enim malesuada ut. Sed sit nunc neque facilisis ac. Et eros nulla condimentum viverra. Neque mattis sed elit interdum metus elementum interdum lacus. Sem elit ac aliquet tincidunt ut. Faucibus aliquam in malesuada ut et lectus et pharetra. Non ullamcorper ante in nibh in ante blandit. Mattis facilisi id faucibus elementum diam natoque nisi volutpat. A amet amet mattis viverra semper. Et id aliquam tincidunt lacus. Gravida cursus pretium aliquam volutpat etiam in tristique varius nisl. Velit senectus pretium elementum eget. Ac nibh id commodo etiam nullam vestibulum luctus."
        review={{
          text: "Turpis eu amet odio velit mattis eget amet egestas. Aliquet a feugiat nisl lacus fermentum lectus ornare ut. Ut auctor justo purus enim malesuada ut. Sed sit nunc neque facilisis ac. Et eros nulla condimentum viverra. Neque mattis sed elit interdum metus elementum interdum lacus. Sem elit ac aliquet tincidunt ut. Faucibus aliquam in malesuada ut et lectus et pharetra.",
          reviewer: "Lana Denesik",
          role: "Parent",
          image: {
            src: "/assets/images/testimonial-kids.jpg",
            alt: "Parent and child reading",
            width: 800,
            height: 400,
          },
        }}
      />

      {/* Suggested Products */}
      <ProductShowcaseSection
        badge="Readers Also Loved"
        title="Three Cozy Picks to Explore Next"
        className="bg-main-bg"
        products={[
          {
            id: 101,
            name: "Forest Friends",
            image: "/assets/images/product-2.jpg",
            price: "$16.00",
          },
          {
            id: 102,
            name: "Adventures in the Sky",
            image: "/assets/images/product-3.jpg",
            price: "$18.00",
          },
          {
            id: 103,
            name: "Dreamland Journey",
            image: "/assets/images/product-1.jpg",
            price: "$20.00",
          },
        ]}
        buttonLabel="Browse All Collections"
        buttonHref="/collections"
      />

      {/* Locations */}
      <LocationsSection
        badge="Visit Us"
        title="Find Serenyao Near You"
        locations={[
          {
            id: 1,
            name: "New York Studio",
            address: "123 Story Lane, Brooklyn, NY 11201",
            phone: "+1 (555) 123-4567",
          },
          {
            id: 2,
            name: "Berlin Atelier",
            address: "Friedrichstrasse 88, 10117 Berlin",
            phone: "+49 30 123456",
          },
          {
            id: 3,
            name: "Vienna Hub",
            address: "Mariahilfer Str. 45, 1060 Vienna",
            phone: "+43 1 2345678",
          },
        ]}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.90342215863!2d-73.99108472327497!3d40.72056713810761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259889a2b73ff%3A0xf9a520d05f6f118!2s123%20Story%20Ln%2C%20Brooklyn%2C%20NY%2011201!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
      />
    </>
  );
}


