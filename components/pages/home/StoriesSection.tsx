import Image from "next/image";

interface StoryItem {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
}

interface StoriesSectionProps {
  badge?: string;
  mainTitle: string;
  stories: StoryItem[];
  mainImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className?: string;
}

export default function StoriesSection({
  badge,
  mainTitle,
  stories,
  mainImage,
  className = "",
}: StoriesSectionProps) {
  return (
    <section className={`py-6 ${className}`}>
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          {badge && (
            <div className="inline-block mb-4">
              <span className="inline-block px-5 py-2.5 bg-secondary text-primary rounded-full text-subtitle font-medium uppercase">
                {badge}
              </span>
            </div>
          )}
          <h2 className="text-h2 md:text-h2-tablet text-primary leading-relaxed max-w-3xl">
            {mainTitle}
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12">
          {/* Left Column: Book Covers */}
          <div className="flex flex-col gap-6 items-start flex-shrink-0" style={{ width: '250px' }}>
            {stories.map((story, index) => (
              <div key={index} className="relative w-full">
                <Image
                  src={story.image.src}
                  alt={story.image.alt}
                  width={story.image.width}
                  height={story.image.height}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </div>

          {/* Middle Column: Text Descriptions */}
          <div className="flex flex-col justify-around flex-1 relative gap-36">
            {stories.map((story, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-h6 md:text-h4-tablet text-primary mb-4">
                  {story.title}
                </h3>
                <p className="text-sm text-text leading-relaxed">
                  {story.description}
                </p>
              </div>
            ))}
            {stories.length > 1 && (
              <hr className="w-full border-t border-gray-300 absolute top-1/2 left-0 -translate-y-1/2" />
            )}
          </div>

          {/* Right Column: Main Image */}
          <div className="flex-shrink-0" style={{ width: '400px' }}>
            <div className="relative">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                width={mainImage.width}
                height={mainImage.height}
                className="w-full object-cover rounded-lg h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

