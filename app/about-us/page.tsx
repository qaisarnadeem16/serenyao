import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ImageTextSection from "@/components/common/ImageTextSection";
import FeatureCard from "@/components/common/FeatureCard";

const features = [
  {
    icon: {
      src: "https://narakido.tokotema.xyz/wp-content/uploads/2024/11/Puzzle.png",
      alt: "Puzzle",
    },
    title: "Quality",
    description: "We carefully select each book to ensure the highest quality content for children.",
  },
  {
    icon: {
      src: "https://narakido.tokotema.xyz/wp-content/uploads/2024/11/Blocks.png",
      alt: "Blocks",
    },
    title: "Education",
    description: "Every book is chosen to inspire learning and spark imagination in young minds.",
  },
  {
    icon: {
      src: "https://narakido.tokotema.xyz/wp-content/uploads/2024/11/Rocket.png",
      alt: "Rocket",
    },
    title: "Innovation",
    description: "We stay ahead with the latest trends in children's literature and education.",
  },
];

export default function AboutUs() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <SectionContainer>
        <div className="flex flex-col gap-20 md:gap-12">
          <ImageTextSection
            title="Our Story"
            image={{
              src: "https://narakido.tokotema.xyz/wp-content/uploads/2024/11/image-9.jpg",
              alt: "About us",
              width: 250,
              height: 250,
            }}
            button={{ label: "Learn More" }}
          >
            <>
              <p className="text-body1 text-text mb-4">
                Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut id aenean.
              </p>
              <p className="text-body1 text-text mb-4">
                Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut id aenean.
              </p>
            </>
          </ImageTextSection>

          <ImageTextSection
            title="Our Mission"
            image={{
              src: "https://narakido.tokotema.xyz/wp-content/uploads/2024/11/image-10.jpg",
              alt: "Our mission",
              width: 250,
              height: 250,
            }}
            button={{ label: "Contact Us", href: "/contact-us" }}
            reverse
          >
            <>
              <p className="text-body1 text-text mb-4">
                Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut id aenean.
              </p>
              <p className="text-body1 text-text mb-4">
                Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut id aenean.
              </p>
            </>
          </ImageTextSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

