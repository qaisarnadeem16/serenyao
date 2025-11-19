import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ProductsGrid from "@/components/common/ProductsGrid";
import ImageTextSection from "@/components/common/ImageTextSection";

const mindfulnessProducts = [
  { id: 30, name: "Mindfulness Journal", image: "/assets/Banner_gesamt.29.9_/49.png", price: "$18.99", author: "Serenyao" },
  { id: 31, name: "Calm & Joy Coloring Book", image: "/assets/Banner_gesamt.29.9_/50.png", price: "$16.99", author: "Serenyao" },
  { id: 32, name: "Self-Reflection Workbook", image: "/assets/Banner_gesamt.29.9_/51.png", price: "$19.99", author: "Serenyao" },
  { id: 33, name: "Peaceful Moments Journal", image: "/assets/Banner_gesamt.29.9_/52.png", price: "$17.99", author: "Serenyao" },
  { id: 34, name: "Mindful Mandala Coloring", image: "/assets/Banner_gesamt.29.9_/53.png", price: "$15.99", author: "Serenyao" },
  { id: 35, name: "Gratitude Practice Book", image: "/assets/Banner_gesamt.29.9_/54.png", price: "$14.99", author: "Serenyao" },
];

export default function MindfulnessCollection() {
  return (
    <>
      <PageHero
        title="Mindfulness Collection"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: "Mindfulness Collection" },
        ]}
      />

      <SectionContainer>
        <div className="flex flex-col gap-20 md:gap-16">
          {/* Introduction Section */}
          <ImageTextSection
            title="Find calm in color and clarity."
            image={{
              src: "/assets/Banner_gesamt.29.9_/49.png",
              alt: "Mindfulness Collection",
              width: 600,
              height: 600,
            }}
          >
            <>
              <p className="text-body1 text-text mb-4">
                Journals and coloring books to help you slow down and reconnect with yourself.
              </p>
              <p className="text-body1 text-text mb-4">
                The Serenyao Mindfulness Collection brings together simple tools for a quieter mind. Every page helps you breathe, reflect, and return to yourself.
              </p>
              <div className="flex flex-col gap-2 mt-6">
                <p className="text-body2 text-text">Mindfulness Journals</p>
                <p className="text-body2 text-text">Calm & Joy Coloring Books</p>
                <p className="text-body2 text-text">Self-Reflection Workbooks</p>
              </div>
            </>
          </ImageTextSection>

          {/* Products Grid */}
          <div>
            <h2 className="text-h2 md:text-h2-tablet mb-8 text-center">Explore Our Mindfulness Collection</h2>
            <ProductsGrid products={mindfulnessProducts} showCartButton={true} columns={3} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

