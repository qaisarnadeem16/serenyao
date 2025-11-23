import HeroSection from "@/components/pages/home/HeroSection";
import CTASection from "@/components/common/CTASection";
import ExpertsTestimonialSection from "@/components/pages/home/ExpertsTestimonialSection";
import FeaturesSection from "@/components/pages/home/FeaturesSection";
import StoriesSection from "@/components/pages/home/StoriesSection";
import ProductShowcaseSection from "@/components/pages/home/ProductShowcaseSection";
import TrustedPartnerSection from "@/components/pages/home/TrustedPartnerSection";
import DiscoverStoriesSection from "@/components/pages/home/DiscoverStoriesSection";
import TestimonialsSection from "@/components/pages/home/TestimonialsSection";
import BringStoriesHomeSection from "@/components/pages/home/BringStoriesHomeSection";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-18">
      {/* Hero Section */}
      <HeroSection
        badge="Nurture the Love of Reading"
        title="Enchanting Stories for Every Little Dreamer"
        description="Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut. Id aenean"
        primaryButton={{ label: "Start Shopping", href: "/products" }}
        secondaryButton={{ icon: <ArrowRight className="h-5 w-5 text-black" />, href: "/products" }}
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

      {/* Experts & Testimonial Section */}
      <ExpertsTestimonialSection
        title="Handpicked by Experts in Children's Literature"
        experts={[
          {
            name: "Expert 1",
            image: "/assets/images/testimonial-1.jpg",
            alt: "Children's literature expert",
          },
          {
            name: "Expert 2",
            image: "/assets/images/testimonial-2.jpg",
            alt: "Children's literature expert",
          },
          {
            name: "Expert 3",
            image: "/assets/images/testimonial-3.jpg",
            alt: "Children's literature expert",
          },
        ]}
        testimonial={{
          rating: 5,
          text: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          author: {
            name: "Lana Denesik",
            role: "Parent",
            image: "/assets/images/testimonial-1.jpg",
            alt: "Lana Denesik",
          },
        }}
      />

      {/* Features Section - Full Width with Purple Background */}
      <FeaturesSection
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
            title: "Secure Online Payment",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            title: "Free Shipping on Orders Over $50",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            title: "24/7 Customer Support",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
        ]}
      />

      {/* Stories Section */}
      <StoriesSection
        badge="WHERE IMAGINATION MEETS EDUCATION"
        mainTitle="Enchanting Stories for Every Little Dreamer"
        stories={[
          {
            image: {
              src: "/assets/images/stories-1.jpg",
              alt: "Children's book cover",
              width: 250,
              height: 250,
            },
            title: "Diverse Stories for Every Child",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            image: {
              src: "/assets/images/stories-2.jpg",
              alt: "Children's book cover",
              width: 250,
              height: 250,
            },
            title: "Books That Educate & Entertain",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
        ]}
        mainImage={{
          src: "/assets/images/stories-3.jpg",
          alt: "Child reading book",
          width: 400,
          height: 600,
        }}
      />

      {/* Product Showcase Section */}
      <ProductShowcaseSection
        badge="BOOKS THEY'LL TREASURE"
        title="Handpicked Stories for Every Little Reader"
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

      {/* Discover Stories Section */}
      <DiscoverStoriesSection
        badge="TODAY'S FAVORITES"
        title="Discover the Stories Kids Can't Stop Talking About"
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
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        badge="WHAT PARENTS ARE SAYING"
        title="Real Stories from Families Who Love Narakido"
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
        buttonLabel="See All Testimonials"
        buttonHref="/testimonials"
      />

      {/* Bring Stories Home Section */}
      <BringStoriesHomeSection
        badge="BRING STORIES HOME"
        title="Explore Books That Make Reading Magical for Every Child"
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
        buttonLabel="Start Shopping Now"
        buttonHref="/products"
      />
    </div>
  );
}

