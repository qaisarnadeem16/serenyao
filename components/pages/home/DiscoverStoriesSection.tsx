import Image from "next/image";

interface StoryCard {
  id: number;
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface DiscoverStoriesSectionProps {
  badge: string;
  title: string;
  stories: StoryCard[];
  className?: string;
}

export default function DiscoverStoriesSection({
  badge,
  title,
  stories,
  className = "",
}: DiscoverStoriesSectionProps) {
  return (
    <section className={`py-16 md:py-12 bg-main-bg ${className}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
              {badge}
            </span>
          </div>
          <h2 className="text-h2 md:text-h2-tablet text-primary max-w-4xl mx-auto">{title}</h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="rounded-lg overflow-hidden"
            >
              {/* Story Image */}
              <div className="relative w-full aspect-[4/3] bg-gray overflow-hidden rounded-xl">
                <Image
                  src={story.image.src}
                  alt={story.image.alt}
                  width={story.image.width}
                  height={story.image.height}
                  className="w-full h-full object-cover"
                />
                {/* Number Overlay */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-purple rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Story Title */}
              <div className="py-6 px-2">
                <h3 className="text-h2 md:text-h5-tablet text-primary">
                  {story.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

