"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const collectionLinks = [
  { label: "Kids Dreamland", href: "/collections/kids" },
  { label: "Teens & Adults Coloring", href: "/collections/coloring" },
  { label: "Mindfulness & Journals", href: "/collections/mindfulness" },
  { label: "Shop All Books", href: "/products" },
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Top Picks", href: "/top-picks" },
  { label: "Campaigns", href: "/campaigns" },
];

const customerCareLinks = [
  { label: "FAQs", href: "/help" },
  { label: "Shipping & Delivery", href: "/help" },
  { label: "Returns & Exchanges", href: "/help" },
  { label: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "YouTube", href: "#" },
];

const footerBottomLinks = [
  { label: "Term of use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    console.log("Newsletter subscription:", email);
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="bg-main-bg/50 relative">
      <div className="container py-20 md:py-10">
        <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-12 mb-16 md:mb-12">
          {/* Logo and Newsletter */}
          <div className="w-full md:w-[30%]">
            <Image
              src="/assets/Logos/logo-footer.png"
              alt="Serenyao Logo"
              width={181}
              height={44}
              className="mb-6"
            />
            <p className="text-body2 text-text mb-6 text-center md:text-left">
              Beautiful books and mindful creations made to inspire calm, creativity and joy — for kids, teens and adults.
            </p>
            
            {/* Newsletter Form */}
            <div>
              <h6 className="text-h6 text-primary mb-4 font-medium">Stay Connected</h6>
              {isSubmitted ? (
                <div className="bg-secondary/20 border-2 border-secondary rounded-lg p-4 text-center">
                  <p className="text-body2 text-primary font-medium">Thank you for subscribing!</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-2.5 rounded-lg border border-gray text-body2 text-primary placeholder:text-text focus:outline-none focus:ring-2 focus:ring-purple"
                    />
                    <Button
                      type="submit"
                      variant="default"
                      className="bg-accent text-primary hover:bg-secondary px-6"
                    >
                      <Mail className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-caption text-text text-center md:text-left">
                    Get updates on new books, special offers & mindful tips
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Links Sections */}
          <div className="w-full md:w-[55%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {/* Collections */}
            <div>
              <h6 className="text-h6 text-primary mb-4 font-medium">Collections</h6>
              <ul className="flex flex-col gap-2.5">
                {collectionLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body2 text-text hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h6 className="text-h6 text-primary mb-4 font-medium">Explore</h6>
              <ul className="flex flex-col gap-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body2 text-text hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h6 className="text-h6 text-primary mb-4 font-medium">Customer Care</h6>
              <ul className="flex flex-col gap-2.5">
                {customerCareLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body2 text-text hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray">
          <p className="text-caption text-text text-center md:text-left">
            Copyright © {currentYear} Serenyao | Creating Calm, Wonder & Creativity for All Ages
          </p>
          <ul className="flex flex-row items-center gap-6 flex-wrap justify-center">
            <li>
              <Link
                href="/privacy"
                className="text-caption text-text hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <span className="text-gray mx-2">|</span>
              <Link
                href="/terms"
                className="text-caption text-text hover:text-secondary transition-colors"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <span className="text-gray mx-2">|</span>
              <Link
                href="/cookies"
                className="text-caption text-text hover:text-secondary transition-colors"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

