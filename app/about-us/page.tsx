import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import StoriesSection from "@/components/pages/home/StoriesSection";
import MissionTextSection from "@/components/pages/about-us/MissionTextSection";
import VisionSection from "@/components/pages/about-us/VisionSection";
import ValuesSection from "@/components/pages/about-us/ValuesSection";
import TeamSection from "@/components/pages/about-us/TeamSection";
import LocationsSection from "@/components/pages/about-us/LocationsSection";
import CareersSection from "@/components/pages/about-us/CareersSection";

export default function AboutUs() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        backgroundImage="/assets/images/Page-Header-BG.jpg"
      />

      <SectionContainer>
        <div className="flex flex-col gap-20 md:gap-12">
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
        </div>
      </SectionContainer>


      {/* Vision Section */}
      <VisionSection
        badge="OUR VISION, YOUR CHILD'S FUTURE"
        mission="To inspire a lifelong love of reading in children by providing access to diverse, engaging, and educational stories that nurture creativity, empathy, and curiosity."
        backgroundImage={{
          src: "/assets/images/Vision-BG-About.jpg",
          alt: "Purple background",
        }}
      />

      {/* Values Section */}
      <ValuesSection
        badge="GUIDED BY PURPOSE"
        title="Your Trusted Partner in Fostering the Love of Reading"
        values={[
          {
            id: 1,
            icon: "plus",
            title: "Educational Focus",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            id: 2,
            icon: "diversity",
            title: "Diversity & Inclusion",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            id: 3,
            icon: "rocket",
            title: "Sustainability First",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            id: 4,
            icon: "award",
            title: "Quality Guaranteed",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            id: 5,
            icon: "users",
            title: "Empowering Parents",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
          {
            id: 6,
            icon: "target",
            title: "Community Focus",
            description: "Vulputate in quam lobortis lobortis praesent convallis mauris. At tellus libero egestas sed facilisis lectus. Ut lobortis sit habitasse convallis quis.",
          },
        ]}
      />

      {/* Team Section */}
      <TeamSection
        badge="BEHIND THE PAGES"
        title="Handpicked Stories for Every Little Reader"
        members={[
          {
            id: 1,
            name: "Emma Carter",
            role: "Founder & Chief Story Curator",
            image: {
              src: "/assets/images/team-1.jpg",
              alt: "Emma Carter",
              width: 128,
              height: 128,
            },
            backgroundColor: "purple",
          },
          {
            id: 2,
            name: "Michael Thompson",
            role: "Head of Content Development",
            image: {
              src: "/assets/images/team-2.jpg",
              alt: "Michael Thompson",
              width: 128,
              height: 128,
            },
            backgroundColor: "green",
          },
          {
            id: 3,
            name: "Sarah Nguyen",
            role: "Illustrator & Visual Designer",
            image: {
              src: "/assets/images/team-3.jpg",
              alt: "Sarah Nguyen",
              width: 128,
              height: 128,
            },
            backgroundColor: "orange",
          },
        ]}
      />

      {/* Locations Section */}
      <LocationsSection
        badge="EXPLORE NARAKIDO NEAR YOU"
        title="Bringing Joyful Reading Experiences Closer to Your Family"
        locations={[
          {
            id: 1,
            name: "Narakido Downtown",
            address: "123 Story Lane, Downtown City",
            phone: "(123) 456-7890",
          },
          {
            id: 2,
            name: "Narakido Mall Central",
            address: "Level 2, Central Mall, Main Avenue",
            phone: "(123) 987-6543",
          },
          {
            id: 3,
            name: "Narakido Eastside",
            address: "45 Imagination, Eastside District",
            phone: "(123) 654-3210",
          },
        ]}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576675!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
      />

      {/* Careers Section */}
      <CareersSection
        badge="YOUR NEXT CHAPTER"
        title="Join a Team That Values Creativity, Passion, and Growth"
        description="Justo varius platea volutpat rhoncus. Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut. Id aenean"
        teamPhotos={[
          {
            src: "/assets/images/testimonial-1.jpg",
            alt: "Team member",
            width: 80,
            height: 80,
          },
          {
            src: "/assets/images/testimonial-2.jpg",
            alt: "Team member",
            width: 80,
            height: 80,
          },
          {
            src: "/assets/images/testimonial-3.jpg",
            alt: "Team member",
            width: 80,
            height: 80,
          },
        ]}
        buttonLabel="View Open Positions"
        buttonHref="/careers"
      />
    </>
  );
}

