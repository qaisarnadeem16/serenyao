import PageHero from "@/components/common/PageHero";
import SectionContainer from "@/components/common/SectionContainer";
import ImageTextSection from "@/components/common/ImageTextSection";
import { booksData } from "@/lib/books-data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

              <div id={collection.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 scroll-mt-20">
                {collection.books.map((book) => (
                  <Link
                    key={book.id}
                    href={`/books/${book.slug}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-h6 mb-2 text-primary group-hover:text-purple transition-colors">
                        {book.title}
                      </h3>
                      {book.titleGerman && (
                        <p className="text-body3 text-text mb-2 italic">{book.titleGerman}</p>
                      )}
                      <p className="text-body3 text-text mb-4">{book.category}</p>
                      {book.ageRange && (
                        <p className="text-caption text-purple mb-4">Ages {book.ageRange}</p>
                      )}
                      <Button
                        variant="default"
                        className="w-full bg-accent text-primary hover:bg-secondary"
                        asChild
                      >
                        <span>View Details</span>
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}

