"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Collections", href: "/collections" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Top Picks", href: "/top-picks" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-secondary py-6 px-0 hidden md:block">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <p className="text-subtitle text-primary font-outfit font-medium uppercase">
              Save 20% on Your First Order! Don't Miss Out.{" "}
              <span className="text-orange">Claim Your Discount</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-purple py-3">
        <div className="container">
          <div className="flex flex-row justify-between items-center">
            {/* Logo */}
            <div className="w-[30%] md:w-[20%]">
              <Link href="/">
                <Image
                  src="/assets/Logos/logo.png"
                  alt="Narakido Logo"
                  width={180}
                  height={44}
                  className=""
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-row items-center justify-end gap-4 w-[55%]">
              <ul className="flex flex-row items-center gap-6">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-button transition-colors ${
                        isActive(item.href)
                          ? "text-secondary"
                          : "text-white hover:text-secondary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center justify-end">
              <Button variant="default" className="bg-accent text-primary hover:bg-secondary">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray/20">
            <nav className="container pt-4">
              <ul className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-button transition-colors block ${
                        isActive(item.href)
                          ? "text-secondary"
                          : "text-white hover:text-secondary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Button variant="default" className="w-full bg-accent text-primary hover:bg-secondary">
                    Get Started
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

