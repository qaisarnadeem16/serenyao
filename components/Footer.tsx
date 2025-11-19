"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Shop All Books", href: "/products" },
  { label: "Collections", href: "/collections" },
  { label: "Top Picks", href: "/top-picks" },
];

const customerCareLinks = [
  { label: "FAQs", href: "/faqs" },
  { label: "Shipping & Delivery", href: "/shipping" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy" },
];

const quickLinks = [
  { label: "Shop by Age", href: "/shop-by-age" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Special Offers", href: "/offers" },
  { label: "Blog & Resources", href: "/blog" },
  { label: "Literacy Programs", href: "/literacy" },
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

  return (
    <footer className="bg-main-bg/50 relative">
      <div className="container py-20 md:py-10">
        <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-12 mb-16 md:mb-12">
          {/* Logo and Newsletter */}
          <div className="w-full md:w-[23.68%]">
            <Image
              src="/assets/Logos/logo-footer.png"
              alt="Narakido Logo"
              width={181}
              height={44}
              className="mb-6 md:mb-0"
            />
            <p className="text-body2 text-text mb-6 text-center md:text-left">
              Rhoncus leo odio nullam sit nibh. In ac mattis a gravida. Nec quam enim tempus feugiat sodales ut id aenean
            </p>
            <Button variant="default" className="w-full bg-accent text-primary hover:bg-secondary">
              Subscribe to Our Newsletter
            </Button>
          </div>

          {/* Links Sections */}
          <div className="w-full md:w-[55%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
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

            {/* Quick Links */}
            <div>
              <h6 className="text-h6 text-primary mb-4 font-medium">Quick Links</h6>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
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

            {/* Follow Us */}
            <div>
              <h6 className="text-h6 text-primary mb-4 font-medium">Follow Us</h6>
              <ul className="flex flex-col gap-2.5">
                {socialLinks.map((link) => (
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
            Copyright © {currentYear} Narakido | Design by Tokotema
          </p>
          <ul className="flex flex-row items-center gap-6 flex-wrap justify-center">
            {footerBottomLinks.map((link, index) => (
              <li key={link.href}>
                {index > 0 && <span className="text-gray mx-2">|</span>}
                <Link
                  href={link.href}
                  className="text-caption text-text hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

