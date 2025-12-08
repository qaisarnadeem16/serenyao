import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ImageTextSection from "@/components/common/ImageTextSection";
import { booksData } from "@/lib/books-data";
import BookCard from "@/components/common/BookCard";

export default function BooksPage() {
  return (
    <>
      <PageHero
        title="Our Books"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Books" },
        ]}
        backgroundImage="/assets/images/Page-Header-BG.jpg"
      />

      <SectionContainer>
        <div className="flex flex-col gap-24 md:gap-20 py-20 md:py-16">
          {booksData.map((collection, index) => (
            <div key={collection.id} className="flex flex-col gap-12">
              <div className="text-center mb-8">
                <h2 className="text-h2 md:text-h2-tablet text-primary mb-4">{collection.name}</h2>
                <p className="text-h4 md:text-h4-tablet text-purple mb-2 italic">{collection.tagline}</p>
                <p className="text-body1 text-text max-w-2xl mx-auto">{collection.description}</p>
              </div>

              <ImageTextSection
                title={collection.name}
                image={{
                  src: collection.image,
                  alt: collection.name,
                  width: 600,
                  height: 600,
                }}
                reverse={index % 2 === 1}
              >
                <>
                  <p className="text-body1 text-text mb-4">{collection.description}</p>
                  <p className="text-body2 text-text mb-6">{collection.tagline}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {Array.from(new Set(collection.books.map((b) => b.category))).map((category) => (
                      <span
                        key={category}
                        className="px-4 py-2 bg-main-bg rounded-full text-body3 text-text"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </>
              </ImageTextSection>

              <div id={collection.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 scroll-mt-20">
                {collection.books.map((book) => (
                  <BookCard
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    titleGerman={book.titleGerman}
                    image={book.image}
                    category={book.category}
                    ageRange={book.ageRange}
                    slug={book.slug}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}

