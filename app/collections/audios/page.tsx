import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ProductsGrid from "@/components/common/ProductsGrid";
import ImageTextSection from "@/components/common/ImageTextSection";

const audioProducts = [
  { id: 40, name: "Sleep Stories Collection", image: "/assets/Banner_gesamt.29.9_/48.png", price: "$12.99", author: "Serenyao Audios" },
  { id: 41, name: "Guided Meditations", image: "/assets/Banner_gesamt.29.9_/55.png", price: "$14.99", author: "Serenyao Audios" },
  { id: 42, name: "Healing Music & Frequencies", image: "/assets/Banner_gesamt.29.9_/56.png", price: "$11.99", author: "Serenyao Audios" },
  { id: 43, name: "Nature Sounds for Relaxation", image: "/assets/Banner_gesamt.29.9_/57.png", price: "$10.99", author: "Serenyao Audios" },
  { id: 44, name: "Morning Mindfulness Audio", image: "/assets/Banner_gesamt.29.9_/58.png", price: "$9.99", author: "Serenyao Audios" },
  { id: 45, name: "Evening Wind-Down Stories", image: "/assets/Banner_gesamt.29.9_/59.png", price: "$13.99", author: "Serenyao Audios" },
];

export default function AudiosCollection() {
  return (
    <>
      <PageHero
        title="Healing Audios"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: "Healing Audios" },
        ]}
      />

      <SectionContainer>
        <div className="flex flex-col gap-20 md:gap-16">
          {/* Introduction Section */}
          <ImageTextSection
            title="Listen. Breathe. Restore."
            image={{
              src: "/assets/Banner_gesamt.29.9_/48.png",
              alt: "Healing Audios",
              width: 600,
              height: 600,
            }}
            reverse
          >
            <>
              <p className="text-body1 text-text mb-4">
                Gentle audio journeys for sleep, healing, and mindful living.
              </p>
              <p className="text-body1 text-text mb-4">
                Serenyao Audios are crafted to bring the body into harmony and the mind into peace. Explore guided meditations, sleep stories, and gentle soundscapes.
              </p>
              <div className="flex flex-col gap-2 mt-6">
                <p className="text-body2 text-text">Sleep Stories</p>
                <p className="text-body2 text-text">Meditations</p>
                <p className="text-body2 text-text">Healing Music & Frequencies</p>
              </div>
            </>
          </ImageTextSection>

          {/* Products Grid */}
          <div>
            <h2 className="text-h2 md:text-h2-tablet mb-8 text-center">Explore Our Audio Collection</h2>
            <ProductsGrid products={audioProducts} showCartButton={true} columns={3} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

