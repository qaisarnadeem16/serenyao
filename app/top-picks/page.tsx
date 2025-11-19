import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ProductsGrid from "@/components/common/ProductsGrid";
import SectionHeader from "@/components/common/SectionHeader";

// Top picks - featured products from all collections
const topPicks = [
  { id: 1, name: "Book Title 1", image: "/assets/Banner_gesamt.29.9_/27.png", author: "Author Name", price: "$19.99" },
  { id: 2, name: "Book Title 2", image: "/assets/Banner_gesamt.29.9_/28.png", author: "Author Name", price: "$17.99" },
  { id: 3, name: "Book Title 3", image: "/assets/Banner_gesamt.29.9_/35.png", author: "Author Name", price: "$21.99" },
  { id: 20, name: "Unicorn Coloring Book", image: "/assets/Banner_gesamt.29.9_/16.png", price: "$12.99", author: "Serenyao Kids" },
  { id: 30, name: "Mindfulness Journal", image: "/assets/Banner_gesamt.29.9_/49.png", price: "$18.99", author: "Serenyao" },
  { id: 40, name: "Sleep Stories Collection", image: "/assets/Banner_gesamt.29.9_/48.png", price: "$12.99", author: "Serenyao Audios" },
  { id: 10, name: "Adventure Stories", image: "/assets/Banner_gesamt.29.9_/34.png", price: "$19.99" },
  { id: 11, name: "Fairy Tales", image: "/assets/Banner_gesamt.29.9_/21.png", price: "$17.99" },
  { id: 31, name: "Calm & Joy Coloring Book", image: "/assets/Banner_gesamt.29.9_/50.png", price: "$16.99", author: "Serenyao" },
];

export default function TopPicks() {
  return (
    <>
      <PageHero
        title="Top Picks"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Top Picks" },
        ]}
      />

      <SectionContainer>
        <SectionHeader
          title="Our Most Loved Products"
          description="Discover our handpicked selection of the most popular and beloved books, journals, and audio collections from all our collections."
        />
        <ProductsGrid products={topPicks} showCartButton={true} columns={3} />
      </SectionContainer>
    </>
  );
}

