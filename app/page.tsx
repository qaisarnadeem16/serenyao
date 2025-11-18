import HeroSection from "@/components/pages/home/HeroSection";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeader from "@/components/common/SectionHeader";
import ProductsGrid from "@/components/common/ProductsGrid";
import CTASection from "@/components/common/CTASection";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  { id: 1, name: "Book Title 1", image: "image-16.jpg", author: "Author Name" },
  { id: 2, name: "Book Title 2", image: "image-17.jpg", author: "Author Name" },
  { id: 3, name: "Book Title 3", image: "image-18.jpg", author: "Author Name" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-16 py-[150px] md:py-10 px-0 md:px-10">
      <HeroSection
        badge="Nurture the Love of Reading"
        title="Enchanting Stories for Every Little Dreamer"
        description="Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut. Id aenean"
        primaryButton={{ label: "Start Shopping" }}
        secondaryButton={{ icon: <ArrowRight className="h-5 w-5" /> }}
        image={{
          src: "https://narakido.tokotema.xyz/wp-content/uploads/2024/11/little-beautiful-smiling-girl-holding-book-against-2023-11-27-05-26-32-utc-1.png",
          alt: "Child reading book",
          width: 508,
          height: 572,
        }}
      />

      <SectionContainer>
        <SectionHeader
          title="Featured Books"
          description="Discover our handpicked selection of enchanting stories"
        />
        <ProductsGrid products={featuredProducts} columns={3} />
      </SectionContainer>

      <CTASection
        title="Start Your Reading Journey Today"
        description="Join thousands of families who have discovered the joy of reading together"
        buttonLabel="Explore Our Collection"
      />
    </div>
  );
}

