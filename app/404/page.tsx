import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-h1 md:text-h1-tablet mb-6">404</h1>
        <h2 className="text-h2 md:text-h2-tablet mb-4">Page Not Found</h2>
        <p className="text-body1 text-text mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

