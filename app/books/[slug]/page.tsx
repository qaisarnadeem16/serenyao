import PageHero from "@/components/common/PageHero";
import BookDetailSection from "@/components/pages/books/BookDetailSection";
import { getBookBySlug, booksData } from "@/lib/books-data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return booksData.flatMap((collection) =>
    collection.books.map((book) => ({
      slug: book.slug,
    }))
  );
}

export default function BookDetailPage({ params }: { params: { slug: string } }) {
  const book = getBookBySlug(params.slug);

  if (!book) {
    notFound();
  }

  const collection = booksData.find((c) => c.id === book.collection);
  const relatedBooks = collection
    ? collection.books.filter((b) => b.id !== book.id).slice(0, 3)
    : [];

  return (
    <>
      <PageHero
        title={book.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Books", href: "/books" },
          { label: book.title },
        ]}
        backgroundImage="/assets/images/Page-Header-BG.jpg"
      />

      <BookDetailSection book={book} />

      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-purple/10 via-soft-purple/10 to-purple/10">
        <div className="container px-4 sm:px-5 md:px-10">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-soft-purple/20"></div>
            <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 text-center">
              <h2 className="text-h3 sm:text-h2 md:text-h2-tablet text-primary mb-3 sm:mb-4 px-2">
                {collection?.tagline || "Discover More"}
              </h2>
              <p className="text-body2 sm:text-body1 text-text max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                {collection?.description || "Explore our complete collection of books designed to inspire, calm, and bring joy."}
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-accent text-primary hover:bg-secondary px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base w-full sm:w-auto"
                asChild
              >
                <a href={`/books#${collection?.id || ""}`}>Explore {collection?.name || "Collection"}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {relatedBooks.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 bg-main-bg">
          <div className="container px-4 sm:px-5 md:px-10">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 bg-secondary text-primary rounded-full text-xs sm:text-subtitle font-medium uppercase">
                  More from This Collection
                </span>
              </div>
              <h2 className="text-h3 sm:text-h2 md:text-h2-tablet text-primary text-center mx-auto max-w-4xl px-2">
                Explore More Books
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              {relatedBooks.map((b) => (
                <Link
                  key={b.id}
                  href={`/books/${b.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-h6 mb-2 text-primary group-hover:text-purple transition-colors">
                      {b.title}
                    </h3>
                    {b.titleGerman && (
                      <p className="text-body3 text-text mb-2 italic">{b.titleGerman}</p>
                    )}
                    <p className="text-body3 text-text">{b.category}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="default"
                size="lg"
                className="bg-accent text-primary hover:bg-purple px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base w-full sm:w-auto"
                asChild
              >
                <Link href="/books">View All Books</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

