import Link from "next/link";
import { Globe, Share2, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: Globe },
  { href: "https://facebook.com", label: "Facebook", icon: Share2 },
  { href: "mailto:hello@happileewed.com", label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-sans text-2xl font-light tracking-[0.2em] text-background mb-4">
              HAPPILEE WED
            </p>
            <p className="font-body text-sm leading-relaxed text-background/60">
              Crafting unforgettable wedding moments through expert choreography
              and elegant event design.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-background/40 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm hover:text-background transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-background/40 mb-5">
              Connect
            </p>
            <p className="font-body text-sm mb-2">hello@happileewed.com</p>
            <p className="font-body text-sm mb-6">+1 (555) 000-0000</p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-background/20 hover:border-background/60 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-background/10" />

        <p className="font-body text-xs text-background/40 text-center tracking-wide">
          © {new Date().getFullYear()} Happilee Wed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
