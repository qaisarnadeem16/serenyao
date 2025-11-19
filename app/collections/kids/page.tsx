import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ProductsGrid from "@/components/common/ProductsGrid";
import ImageTextSection from "@/components/common/ImageTextSection";

const kidsProducts = [
  { id: 20, name: "Unicorn Coloring Book", image: "/assets/Banner_gesamt.29.9_/16.png", price: "$12.99", author: "Serenyao Kids" },
  { id: 21, name: "Pebbel & Friends Storybook", image: "/assets/Banner_gesamt.29.9_/17.png", price: "$15.99", author: "Serenyao Kids" },
  { id: 22, name: "Animal Adventure Activity Book", image: "/assets/Banner_gesamt.29.9_/18.png", price: "$13.99", author: "Serenyao Kids" },
  { id: 23, name: "Kids Music Collection", image: "/assets/Banner_gesamt.29.9_/19.png", price: "$9.99", author: "Serenyao Kids" },
  { id: 24, name: "Magic Forest Coloring", image: "/assets/Banner_gesamt.29.9_/20.png", price: "$11.99", author: "Serenyao Kids" },
  { id: 25, name: "Bedtime Stories Audio", image: "/assets/Banner_gesamt.29.9_/21.png", price: "$8.99", author: "Serenyao Kids" },
];

export default function KidsCollection() {
  return (
    <>
      <PageHero
        title="Kids Collection"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: "Kids Collection" },
        ]}
      />

      <SectionContainer>
        <div className="flex flex-col gap-20 md:gap-16">
          {/* Introduction Section */}
          <ImageTextSection
            title="For little dreamers and young artists."
            image={{
              src: "/assets/Banner_gesamt.29.9_/16.png",
              alt: "Kids Collection",
              width: 600,
              height: 600,
            }}
            reverse
          >
            <>
              <p className="text-body1 text-text mb-4">
                Lovingly designed books that spark imagination, calm, and color.
              </p>
              <p className="text-body1 text-text mb-4">
                Each Serenyao Kids book is made to bring calm focus and happy creativity. Simple lines, kind stories, and a touch of magic — made for children aged 3–8.
              </p>
              <div className="flex flex-col gap-2 mt-6">
                <p className="text-body2 text-text">Coloring & Activity Books</p>
                <p className="text-body2 text-text">Storybooks (Pebbel & Friends)</p>
                <p className="text-body2 text-text">Kids Music & Audio Stories</p>
              </div>
            </>
          </ImageTextSection>

          {/* Products Grid */}
          <div>
            <h2 className="text-h2 md:text-h2-tablet mb-8 text-center">Explore Our Kids Collection</h2>
            <ProductsGrid products={kidsProducts} showCartButton={true} columns={3} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

