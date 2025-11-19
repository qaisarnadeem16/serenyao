import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ImageTextSection from "@/components/common/ImageTextSection";
import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    id: "kids",
    title: "Kids Collection",
    description: "For little dreamers and young artists. Lovingly designed books that spark imagination, calm, and color.",
    image: "/assets/Banner_gesamt.29.9_/16.png",
    href: "/collections/kids",
    categories: ["Coloring & Activity Books", "Storybooks (Pebbel & Friends)", "Kids Music & Audio Stories"],
  },
  {
    id: "mindfulness",
    title: "Mindfulness Collection",
    description: "Find calm in color and clarity. Journals and coloring books to help you slow down and reconnect with yourself.",
    image: "/assets/Banner_gesamt.29.9_/49.png",
    href: "/collections/mindfulness",
    categories: ["Mindfulness Journals", "Calm & Joy Coloring Books", "Self-Reflection Workbooks"],
  },
  {
    id: "audios",
    title: "Healing Audios",
    description: "Listen. Breathe. Restore. Gentle audio journeys for sleep, healing, and mindful living.",
    image: "/assets/Banner_gesamt.29.9_/48.png",
    href: "/collections/audios",
    categories: ["Sleep Stories", "Meditations", "Healing Music & Frequencies"],
  },
];

export default function Collections() {
  return (
    <>
      <PageHero
        title="Our Collections"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Collections" },
        ]}
      />

      <SectionContainer>
        <div className="flex flex-col gap-20 md:gap-16">
          {collections.map((collection, index) => (
            <ImageTextSection
              key={collection.id}
              title={collection.title}
              image={{
                src: collection.image,
                alt: collection.title,
                width: 600,
                height: 600,
              }}
              button={{ label: `Explore ${collection.title}`, href: collection.href }}
              reverse={index % 2 === 1}
            >
              <>
                <p className="text-body1 text-text mb-4">{collection.description}</p>
                <div className="flex flex-col gap-2 mt-6">
                  {collection.categories.map((category, catIndex) => (
                    <p key={catIndex} className="text-body2 text-text">
                      {category}
                    </p>
                  ))}
                </div>
              </>
            </ImageTextSection>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}

