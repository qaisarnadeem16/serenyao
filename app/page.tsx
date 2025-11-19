import HeroSection from "@/components/pages/home/HeroSection";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeader from "@/components/common/SectionHeader";
import ProductsGrid from "@/components/common/ProductsGrid";
import CTASection from "@/components/common/CTASection";
import ImageTextSection from "@/components/common/ImageTextSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  { id: 1, name: "Book Title 1", image: "/assets/Banner_gesamt.29.9_/27.png", author: "Author Name", price: "$19.99" },
  { id: 2, name: "Book Title 2", image: "/assets/Banner_gesamt.29.9_/28.png", author: "Author Name", price: "$17.99" },
  { id: 3, name: "Book Title 3", image: "/assets/Banner_gesamt.29.9_/35.png", author: "Author Name", price: "$21.99" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-18 py-[130px] md:py-8">
      {/* Hero Section */}
        <HeroSection
        badge="Nurture the Love of Reading"
        title="Enchanting Stories for Every Little Dreamer"
        description="Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut. Id aenean"
        primaryButton={{ label: "Start Shopping", href: "/products" }}
        secondaryButton={{ icon: <ArrowRight className="h-5 w-5" />, href: "/products" }}
        image={[
          {
            src: "/assets/Image-1.jpg",
            alt: "Child reading book",
            width: 508,
            height: 300,
          },
          {
            src: "/assets/image-2.png",
            alt: "Child reading book",
            width: 508,
            height: 300,
          },
        ]}
      />
      
      {/* Serenyao Collections - Image Left, Text Right */}
      <SectionContainer>
        <ImageTextSection
          title="Calm. Color. Clarity."
          image={{
            src: "/assets/Banner_gesamt.29.9_/46.png",
            alt: "Serenyao Collections",
            width: 508,
            height: 572,
          }}
        >
          <>
            <p className="text-body1 text-text mb-4">
              Explore books and audios that bring stillness, imagination, and gentle joy into everyday life.
            </p>
            <div className="flex flex-col lg:flex-row gap-2.5 mt-8">
              <Button variant="default" className="bg-accent text-primary hover:bg-secondary" asChild>
                <Link href="#kids-collection">Explore Kids Collection</Link>
              </Button>
              <Button variant="default" className="bg-purple text-white hover:bg-soft-purple" asChild>
                <Link href="#mindfulness-collection">Discover Mindfulness Books</Link>
              </Button>  
            </div>
            <div className="mt-8">
            <Button variant="default" className="bg-purple text-white hover:bg-soft-purple" asChild>
                <Link href="#audios">Listen to Healing Audios</Link>
            </Button>
              </div>
          </>
        </ImageTextSection>
      </SectionContainer>

      {/* Serenyao Kids Collection - Text Left, Image Right */}
      <SectionContainer id="kids-collection">
        <ImageTextSection
          title="For little dreamers and young artists."
          image={{
            src: "/assets/Banner_gesamt.29.9_/16.png",
            alt: "Serenyao Kids Collection",
            width: 600,
            height: 600,
          }}
          button={{ label: "Explore Kids Collection", href: "/collections/kids" }}
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
              <p className="text-body2 text-text"> Storybooks (Pebbel & Friends)</p>
              <p className="text-body2 text-text"> Kids Music & Audio Stories</p>
            </div>
          </>
        </ImageTextSection>
      </SectionContainer>

      {/* Serenyao Mindfulness Collection - Image Left, Text Right */}
      <SectionContainer id="mindfulness-collection" className="bg-main-bg py-30 px-0 md:py-16">
        <ImageTextSection
          title="Find calm in color and clarity."
          image={{
            src: "/assets/Banner_gesamt.29.9_/49.png",
            alt: "Serenyao Mindfulness Collection",
            width: 600,
            height: 600,
          }}
          button={{ label: "Explore Mindfulness Collection", href: "/collections/mindfulness" }}
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
      </SectionContainer>

      {/* Serenyao Audios - Text Left, Image Right */}
      <SectionContainer id="audios">
        <ImageTextSection
          title="Listen. Breathe. Restore."
          image={{
            src: "/assets/Banner_gesamt.29.9_/48.png",
            alt: "Serenyao Audios",
            width: 600,
            height: 600,
          }}
          button={{ label: "Listen to Healing Audios", href: "/collections/audios" }}
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
              <p className="text-body2 text-text"> Meditations</p>
              <p className="text-body2 text-text">Healing Music & Frequencies</p>
            </div>
          </>
        </ImageTextSection>
      </SectionContainer>

      {/* Featured Books Section - Previous Section */}
      <SectionContainer>
        <SectionHeader
          title="Featured Books"
          description="Discover our handpicked selection of enchanting stories"
        />
        <ProductsGrid products={featuredProducts} columns={3} />
      </SectionContainer>

      {/* CTA Section - Previous Section */}
      <CTASection
        title="Start Your Reading Journey Today"
        description="Join thousands of families who have discovered the joy of reading together"
        buttonLabel="Explore Our Collection"
        buttonHref="/collections"
      />
    </div>
  );
}

