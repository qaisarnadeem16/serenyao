import HeroSection from "@/components/pages/home/HeroSection";
import CollectionPathsSection from "@/components/pages/home/CollectionPathsSection";
import FeaturesSection from "@/components/pages/home/FeaturesSection";
import ProductShowcaseSection from "@/components/pages/home/ProductShowcaseSection";
import StoriesSection from "@/components/pages/home/StoriesSection";
import DiscoverStoriesSection from "@/components/pages/home/DiscoverStoriesSection";
import TestimonialsSection from "@/components/pages/home/TestimonialsSection";
import BringStoriesHomeSection from "@/components/pages/home/BringStoriesHomeSection";
import { ArrowRight } from "lucide-react";
import TrustedPartnerSection from "@/components/pages/home/TrustedPartnerSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-18">
      {/* Hero Section */}
      <HeroSection
        badge="Books That Bring Calm, Creativity & Joy."
        secondaryBadge="Cozy • Creative • Mindful"
        title="Creating Calm, Wonder & Creativity for All Ages."
        description="Beautiful books and mindful creations made to inspire calm, creativity and joy — for kids, teens and adults."
        primaryButton={{ label: "Start Exploring", href: "/products" }}
        secondaryButton={{ label: "Browse Collections", icon: <ArrowRight className="h-5 w-5" />, href: "/collections" }}
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

      {/* Collection Paths Section */}
      <CollectionPathsSection
        badge="Choose Your Cozy Path"
        paths={[
          {
            id: 1,
            title: "Kids Dreamland",
            ageRange: "1–8 years",
            features: [
              "Cute & cozy coloring books",
              "Early reading & scribble books",
              "First creativity experiences",
            ],
            ctaLabel: "Explore Kids Books",
            ctaHref: "/collections/kids",
          },
          {
            id: 2,
            title: "Teens & Adults Cozy Coloring",
            ageRange: "9+ years",
            features: [
              "Stress-relief coloring",
              "Cozy cute themes",
              "Calming premium designs",
            ],
            ctaLabel: "Explore Cozy Coloring",
            ctaHref: "/collections/coloring",
          },
          {
            id: 3,
            title: "Mindfulness & Journals",
            ageRange: "All ages",
            features: [
              "Gratitude Journals",
              "Self-Healing, Calm & Reflection",
              "Gentle daily practices",
            ],
            ctaLabel: "Explore Mindfulness",
            ctaHref: "/collections/mindfulness",
          },
        ]}
      />

      {/* Features Section - Why Serenyao Works */}
      <FeaturesSection
        badge="Why Serenyao Works"
        title="Feel-Good Books Made With Heart & Science."
        image={{
          src: "/assets/images/feature-img.png",
          alt: "Child reading book",
          width: 500,
          height: 600,
        }}
        backgroundImage={{
          src: "/assets/images/Feature-BG.jpg",
          alt: "Background pattern",
        }}
        features={[
          {
            title: "Mindfully Crafted",
            description: "Designs made to calm the mind & spark creativity.",
          },
          {
            title: "Kids-Safe & Parent-Trusted",
            description: "Age-appropriate, warm & imagination-friendly.",
          },
          {
            title: "Stress-Relief for All Ages",
            description: "Gentle creative pauses for busy minds.",
          },
        ]}
        buttonLabel="Discover Our Difference"
        buttonHref="/about-us"
      />

      {/* Education / Value Section */}
      <StoriesSection
        badge="Where Creativity Meets Calm"
        mainTitle="Books That Grow With You."
        stories={[
          {
            image: {
              src: "/assets/images/stories-1.jpg",
              alt: "Children's book cover",
              width: 250,
              height: 250,
            },
            title: "Supports Emotional Calm",
            description: "Whether you're a parent, a creative teen or an adult looking for quiet moments — Serenyao brings calm, clarity and joy into your everyday life.",
          },
          {
            image: {
              src: "/assets/images/stories-2.jpg",
              alt: "Children's book cover",
              width: 250,
              height: 250,
            },
            title: "Boosts Creativity & Focus",
            description: "Whether you're a parent, a creative teen or an adult looking for quiet moments — Serenyao brings calm, clarity and joy into your everyday life.",
          },
          {
            image: {
              src: "/assets/images/stories-1.jpg",
              alt: "Children's book cover",
              width: 250,
              height: 250,
            },
            title: "Screen-Free Quality Time",
            description: "Whether you're a parent, a creative teen or an adult looking for quiet moments — Serenyao brings calm, clarity and joy into your everyday life.",
          },
        ]}
        mainImage={{
          src: "/assets/images/stories-3.jpg",
          alt: "Child reading book",
          width: 400,
          height: 600,
        }}
        buttonLabel="Learn More"
        buttonHref="/about-us"
      />

      {/* Featured Collections Section */}
      <ProductShowcaseSection
        badge="Handpicked for You"
        title="Discover Your Next Favorite Book."
        products={[
          {
            id: 1,
            name: "Whiskers' Big Day Out",
            image: "/assets/images/product-1.jpg",
            price: "$18.00",
          },
          {
            id: 2,
            name: "The Explorer of the Ice Age",
            image: "/assets/images/product-2.jpg",
            price: "$18.00",
          },
          {
            id: 3,
            name: "Jungle Journey",
            image: "/assets/images/product-3.jpg",
            price: "$18.00",
          },
        ]}
        buttonLabel="Browse All Collections"
        buttonHref="/collections"
      />

       {/* Trusted Partner Section */}
       <TrustedPartnerSection
        badge="WHERE STORIES COME TO LIFE"
        title="Your Trusted Partner in Fostering the Love of Reading"
        image={{
          src: "/assets/images/trusted-partner.jpg",
          alt: "Girl reading book",
          width: 500,
          height: 600,
        }}
        features={[
          {
            title: "Educational Focus",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            title: "Personalized Recommendations",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            title: "Safe & Secure Shopping",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
        ]}
        buttonLabel="Discover Our Difference"
        buttonHref="/about-us"
      />

      {/* Popular Right Now - Kids Picks */}
      <DiscoverStoriesSection
        badge="Popular Picks"
        title="Books Kids Can't Stop Talking About"
        stories={[
          {
            id: 1,
            title: "The Magical Forest",
            image: {
              src: "/assets/images/discover-1.jpg",
              alt: "The Magical Forest book",
              width: 400,
              height: 300,
            },
          },
          {
            id: 2,
            title: "The Alphabet Kingdom",
            image: {
              src: "/assets/images/discover-2.jpg",
              alt: "The Alphabet Kingdom book",
              width: 400,
              height: 300,
            },
          },
          {
            id: 3,
            title: "Jungle Journey",
            image: {
              src: "/assets/images/discover-3.jpg",
              alt: "Jungle Journey book",
              width: 400,
              height: 300,
            },
          },
          {
            id: 4,
            title: "My First Adventure",
            image: {
              src: "/assets/images/discover-4.jpg",
              alt: "My First Adventure book",
              width: 400,
              height: 300,
            },
          },
        ]}
        buttonLabel="See All Kids Books"
        buttonHref="/collections/kids"
      />

      {/* Social Proof / Reviews Section */}
      <TestimonialsSection
        badge="Loved by Families & Creatives"
        title="Real Stories from People Who Love Serenyao"
        testimonials={[
          {
            id: 1,
            quote: "An absolute treasure trove for young readers!",
            author: "SARAH L.",
            rating: 5,
            image: {
              src: "/assets/images/testimonial-1.jpg",
              alt: "Sarah L.",
              width: 64,
              height: 64,
            },
          },
          {
            id: 2,
            quote: "The perfect place to find meaningful books for children",
            author: "MICHAEL R",
            rating: 5,
            image: {
              src: "/assets/images/testimonial-2.jpg",
              alt: "Michael R",
              width: 64,
              height: 64,
            },
          },
          {
            id: 3,
            quote: "A delightful experience from start to finish.",
            author: "LINDA M",
            rating: 5,
            image: {
              src: "/assets/images/testimonial-3.jpg",
              alt: "Linda M",
              width: 64,
              height: 64,
            },
          },
        ]}
        mainImage={{
          src: "/assets/images/testimonial-kids.jpg",
          alt: "Children reading together",
          width: 600,
          height: 500,
        }}
        buttonLabel="Read More Reviews"
        buttonHref="/testimonials"
      />

      {/* Secondary Hero - For Kids Only */}
      <BringStoriesHomeSection
        badge="Kids Dream Bigger"
        title="Explore Books That Make Reading Magical"
        image={{
          src: "/assets/images/stories-home.png",
          alt: "Boy reading book",
          width: 500,
          height: 600,
        }}
        backgroundImage={{
          src: "/assets/images/Feature-BG.jpg",
          alt: "Purple background",
        }}
        features={[
          {
            title: "Trusted by parents and educators.",
          },
          {
            title: "Books that inspire creativity and learning.",
          },
          {
            title: "Eco-friendly packaging and delivery.",
          },
        ]}
        buttonLabel="Shop Kids Dreamland"
        buttonHref="/collections/kids"
      />
    </div>
  );
}

