"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import VideoEmbed from "@/components/VideoEmbed";
import SiteLayout from "@/components/SiteLayout";

/* ── Gallery data ─────────────────────────────────────────────
   Replace the id values with real YouTube or Vimeo video IDs.
   For Vimeo videos, set provider: "vimeo" and supply a `poster`
   URL (Vimeo doesn't expose public thumbnails).
   ─────────────────────────────────────────────────────────── */
const videos = [
  {
    id: "dQw4w9WgXcQ",          // ← replace with real YouTube ID
    provider: "youtube" as const,
    title: "Amara & Daniel — First Dance",
    category: "First Dance",
    couple: "Amara & Daniel",
    date: "Spring 2024",
    aspect: "aspect-video",
  },
  {
    id: "dQw4w9WgXcQ",
    provider: "youtube" as const,
    title: "Sofia & James — Bridal Party Performance",
    category: "Party Dance",
    couple: "Sofia & James",
    date: "Autumn 2023",
    aspect: "aspect-video",
  },
  {
    id: "dQw4w9WgXcQ",
    provider: "youtube" as const,
    title: "Priya & Luca — Ceremony Highlights",
    category: "Ceremony",
    couple: "Priya & Luca",
    date: "Summer 2024",
    aspect: "aspect-video",
  },
  {
    id: "dQw4w9WgXcQ",
    provider: "youtube" as const,
    title: "Maya & Ethan — Father-Daughter Dance",
    category: "Parent Dance",
    couple: "Maya & Ethan",
    date: "Winter 2023",
    aspect: "aspect-video",
  },
  {
    id: "dQw4w9WgXcQ",
    provider: "youtube" as const,
    title: "Nadia & Chris — Full Wedding Highlights",
    category: "Full Event",
    couple: "Nadia & Chris",
    date: "Spring 2023",
    aspect: "aspect-[4/3]",
  },
  {
    id: "dQw4w9WgXcQ",
    provider: "youtube" as const,
    title: "Lena & Theo — First Dance",
    category: "First Dance",
    couple: "Lena & Theo",
    date: "Summer 2023",
    aspect: "aspect-video",
  },
];

const categories = ["All", "First Dance", "Party Dance", "Ceremony", "Parent Dance", "Full Event"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? videos
    : videos.filter((v) => v.category === active);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-foreground text-background">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-widest uppercase text-background/40 mb-4">
            Our work
          </p>
          <h1 className="font-sans text-5xl md:text-7xl font-light leading-none tracking-wide mb-6">
            Gallery
          </h1>
          <p className="font-body text-background/60 leading-relaxed max-w-xl mx-auto">
            Watch real moments we&apos;ve helped create — first dances, surprise
            performances, and the beautiful details in between.
          </p>
        </motion.div>
      </section>

      {/* Filter tabs */}
      <section className="py-10 px-6 border-b border-border/40 sticky top-16 z-40 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="focus:outline-none"
            >
              <Badge
                variant={active === cat ? "default" : "outline"}
                className="font-body text-xs tracking-widest uppercase cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-1.5"
              >
                {cat}
              </Badge>
            </button>
          ))}
        </div>
      </section>

      {/* Video grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ id, provider, title, category, couple, date, aspect }, i) => (
            <motion.div
              key={`${id}-${category}-${couple}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col gap-3"
            >
              <VideoEmbed
                id={id}
                provider={provider}
                title={title}
                aspectClass={aspect}
              />

              <div>
                <div className="flex items-center justify-between">
                  <p className="font-sans text-lg font-medium">{couple}</p>
                  <Badge
                    variant="outline"
                    className="font-body text-[10px] tracking-widest uppercase"
                  >
                    {category}
                  </Badge>
                </div>
                <p className="font-body text-xs text-muted-foreground tracking-wide mt-0.5">
                  {date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-body text-muted-foreground py-16">
            No videos in this category yet — check back soon.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-muted/40">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-4xl font-light mb-4">
            Ready to create your own beautiful moments?
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Let&apos;s bring your vision to life.
          </p>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="font-body tracking-widest uppercase text-xs"
          >
            Book a Consult
          </Button>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
