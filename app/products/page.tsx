import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ProductsGrid from "@/components/common/ProductsGrid";

const products = [
  { id: 1, name: "Adventure Stories", image: "image-16.jpg", price: "$19.99" },
  { id: 2, name: "Fairy Tales", image: "image-17.jpg", price: "$17.99" },
  { id: 3, name: "Educational Books", image: "image-18.jpg", price: "$21.99" },
  { id: 4, name: "Picture Books", image: "image-33.jpg", price: "$15.99" },
  { id: 5, name: "Science Books", image: "image-34.jpg", price: "$23.99" },
  { id: 6, name: "Story Collections", image: "image-35.png", price: "$25.99" },
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

