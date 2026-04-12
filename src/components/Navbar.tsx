"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-2xl font-light tracking-[0.2em] text-foreground hover:text-primary transition-colors"
        >
          HAPPILEE WED
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-body text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                  pathname === href
                    ? "text-primary border-b border-primary pb-0.5"
                    : "text-foreground/70"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            render={<Link href="/contact" />}
            size="sm"
            className="tracking-widest uppercase text-xs font-body"
          >
            Book a Consult
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger
            className="md:hidden p-2 text-foreground"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle className="font-sans font-light tracking-[0.2em] text-lg text-left">
                HAPPILEE WED
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-8 flex flex-col gap-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-body text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                      pathname === href ? "text-primary" : "text-foreground/70"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  render={<Link href="/contact" />}
                  size="sm"
                  className="w-full tracking-widest uppercase text-xs font-body"
                >
                  Book a Consult
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
