import PageHero from "@/components/common/PageHero";
import ProductShowcaseSection from "@/components/pages/home/ProductShowcaseSection";
import TrustedPartnerSection from "@/components/pages/home/TrustedPartnerSection";
import DiscoverStoriesSection from "@/components/pages/home/DiscoverStoriesSection";
import BringStoriesHomeSection from "@/components/pages/home/BringStoriesHomeSection";
import TestimonialsSection from "@/components/pages/home/TestimonialsSection";
import PricingSection from "@/components/pages/home/PricingSection";

export default function Products() {
  return (
    <>
      <PageHero
        title="Our Products"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        backgroundImage="/assets/images/Page-Header-BG.jpg"
      />

      {/* Product Showcase Section */}
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
          {
            id: 4,
            name: "The Magical Forest",
            image: "/assets/images/discover-1.jpg",
            price: "$19.99",
          },
          {
            id: 5,
            name: "The Alphabet Kingdom",
            image: "/assets/images/discover-2.jpg",
            price: "$17.99",
          },
          {
            id: 6,
            name: "My First Adventure",
            image: "/assets/images/discover-4.jpg",
            price: "$16.99",
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
        sectionBackground="main-bg"
        featuresBackground="white"
      />

      {/* Discover Stories Section */}
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
        background="none"
      />

      {/* Pricing Section */}
      <PricingSection
        badge="AFFORDABLE MAGIC"
        title="Plans Designed for Every Little Book Lover"
        subscribeButtonLabel="Subscribe Now"
        subscribeButtonHref="/subscribe"
        plans={[
          {
            id: 1,
            name: "Basic Plan",
            price: "$9.99/mo",
            description: "Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida.",
            features: [
              { text: "Access to 3 books per month" },
              { text: "Free standard shipping" },
              { text: "Exclusive member-only discounts" },
            ],
            buttonLabel: "Get Basic",
            buttonHref: "/subscribe/basic",
          },
          {
            id: 2,
            name: "Premium Plan",
            price: "$19.99/mo",
            description: "Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida.",
            features: [
              { text: "Access to 7 books per month" },
              { text: "Free standard shipping" },
              { text: "Exclusive member-only discounts" },
            ],
            buttonLabel: "Get Premium",
            buttonHref: "/subscribe/premium",
            highlighted: true,
          },
          {
            id: 3,
            name: "Family Plan",
            price: "$29.99/mo",
            description: "Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida.",
            features: [
              { text: "Access to 12 books per month" },
              { text: "Free standard shipping" },
              { text: "Exclusive member-only discounts" },
            ],
            buttonLabel: "Get Family",
            buttonHref: "/subscribe/family",
          },
        ]}
      />

      {/* Bring Stories Home Section */}
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

      {/* Testimonials Section */}
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
    </>
  );
}

