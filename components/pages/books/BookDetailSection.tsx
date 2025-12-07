import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Book } from "@/lib/books-data";
import { ExternalLink } from "lucide-react";
import { getBookBanner } from "@/lib/banner-mapping";
import BannerCarousel from "./BannerCarousel";

interface BookDetailSectionProps {
  book: Book;
}

export default function BookDetailSection({ book }: BookDetailSectionProps) {
  let bannersToShow: string[] = [];
  
  if (book.banners && book.banners.length > 0) {
    bannersToShow = book.banners;
  } else if (book.banner) {
    bannersToShow = [book.banner];
  } else {
    const defaultBanner = getBookBanner(book.collection, book.banner);
    if (defaultBanner) {
      bannersToShow = [defaultBanner];
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-5 md:px-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-h4 sm:text-h3 md:text-h2 lg:text-h1-tablet text-primary mb-3 sm:mb-4 px-2 leading-tight">{book.title}</h1>
          {book.titleGerman && (
            <p className="text-h6 sm:text-h5 md:text-h4-tablet lg:text-h4 text-purple mb-3 sm:mb-4 italic px-2">{book.titleGerman}</p>
          )}
          <p className="text-body2 sm:text-body1 text-text px-2">{book.category}</p>
        </div>

        {bannersToShow.length > 0 && (
          <BannerCarousel banners={bannersToShow} bookTitle={book.title} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {book.mockups.map((mockup, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={mockup}
                alt={`${book.title} mockup ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {book.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-main-bg rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-h4 sm:text-h3 text-purple">{index + 1}</span>
              </div>
              <h3 className="text-h6 sm:text-h5 md:text-h5-tablet text-primary mb-3 sm:mb-4">{benefit.title}</h3>
              <p className="text-body3 sm:text-body2 text-text">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-main-bg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-h3 sm:text-h2 md:text-h2-tablet text-primary mb-6 sm:mb-8 text-center px-2">
            {book.whatsInside.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {book.whatsInside.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-body2 sm:text-body1 text-text">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-2">
          <Button
            variant="default"
            size="lg"
            className="bg-orange text-white hover:bg-orange/90 px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-button uppercase tracking-wide w-full sm:w-auto"
            asChild
          >
            <a
              href={book.amazonUrl || "#"}
              target={book.amazonUrl ? "_blank" : undefined}
              rel={book.amazonUrl ? "noopener noreferrer" : undefined}
              className="flex items-center justify-center gap-2"
            >
              Get it on Amazon
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </Button>
          {!book.amazonUrl && (
            <p className="text-body3 text-text mt-3 sm:mt-4 italic">Amazon link coming soon</p>
          )}
        </div>
      </div>
    </section>
  );
}

