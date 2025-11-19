import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ProductsGrid from "@/components/common/ProductsGrid";

const products = [
  { id: 10, name: "Adventure Stories", image: "/assets/Banner_gesamt.29.9_/34.png", price: "$19.99" },
  { id: 11, name: "Fairy Tales", image: "/assets/Banner_gesamt.29.9_/21.png", price: "$17.99" },
  { id: 12, name: "Educational Books", image: "/assets/Banner_gesamt.29.9_/35.png", price: "$21.99" },
  { id: 13, name: "Picture Books", image: "/assets/Banner_gesamt.29.9_/40.png", price: "$15.99" },
  { id: 14, name: "Science Books", image: "/assets/Banner_gesamt.29.9_/4.png", price: "$23.99" },
  { id: 15, name: "Story Collections", image: "/assets/Banner_gesamt.29.9_/22.png", price: "$25.99" },
];

export default function Products() {
  return (
    <>
      <PageHero
        title="Our Products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <SectionContainer>
        <ProductsGrid products={products} showCartButton={true} columns={3} />
      </SectionContainer>
    </>
  );
}

