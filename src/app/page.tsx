"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Heart, Music, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SiteLayout from "@/components/SiteLayout";

/* ── Animation helpers ────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

/* ── Data ─────────────────────────────────────────────────── */
const services = [
  {
    icon: Music,
    title: "First Dance Choreography",
    description:
      "A personalised first dance crafted around your song, your story, and your comfort level — from simple and romantic to show-stopping.",
  },
  {
    icon: Heart,
    title: "Wedding Party Performances",
    description:
      "Coordinate surprise group dances for the bridal party or family, turning your reception into a joyful celebration everyone will remember.",
  },
  {
    icon: Calendar,
    title: "Full Event Coordination",
    description:
      "End-to-end planning and day-of coordination so every detail — timeline, vendors, décor — flows seamlessly together.",
  },
];

const testimonials = [
  {
    quote:
      "Our first dance was the highlight of the evening. Every guest was in tears — in the best way possible.",
    name: "Amara & Daniel",
    wedding: "Spring 2024",
  },
  {
    quote:
      "The team thought of everything. We showed up on our wedding day and just got to enjoy every moment.",
    name: "Priya & Luca",
    wedding: "Summer 2024",
  },
  {
    quote:
      "The bridal party surprise dance brought the house down. Absolutely worth every rehearsal.",
    name: "Sofia & James",
    wedding: "Autumn 2023",
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <SiteLayout>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
        {/*
          OPTIONAL BACKGROUND VIDEO
          Place a video file at /public/hero.mp4 (and /public/hero.webm for better
          browser support) then uncomment the block below. The video will loop
          silently behind the hero text. Keep it short (10-30s) and compressed.

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            aria-hidden="true"
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4"  type="video/mp4" />
          </video>
        */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.3_0.04_80/0.4)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <Badge
              variant="outline"
              className="border-primary/50 text-primary font-body tracking-widest uppercase text-xs mb-8"
            >
              Wedding Choreography & Event Planning
            </Badge>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="font-sans text-6xl md:text-8xl font-light text-background leading-none tracking-wide mb-6"
          >
            Your love story,
            <br />
            <span className="italic text-primary">beautifully told.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="font-body text-lg text-background/60 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            We choreograph first dances, coordinate surprise performances, and
            plan every detail so your wedding day is effortless and unforgettable.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="tracking-widest uppercase text-xs font-body"
            >
              Book a Free Consult
            </Button>
            <Button
              render={<Link href="/services" />}
              variant="outline"
              size="lg"
              className="tracking-widest uppercase text-xs font-body border-background/30 text-background hover:bg-background/10"
            >
              Our Services
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-12 bg-background/20"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── Intro tagline ──────────────────────────────────── */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-4xl md:text-5xl font-light leading-snug text-foreground">
            Every couple deserves a wedding that{" "}
            <em className="text-primary">moves</em> people — literally.
          </p>
        </motion.div>
      </section>

      {/* ── Services overview ──────────────────────────────── */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
              What we offer
            </p>
            <h2 className="font-sans text-4xl md:text-5xl font-light">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <Card className="h-full border-border/60 hover:shadow-md transition-shadow">
                  <CardContent className="p-8 flex flex-col gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-sans text-2xl font-medium">{title}</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              render={<Link href="/services" />}
              variant="outline"
              className="tracking-widest uppercase text-xs font-body"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
              Love notes
            </p>
            <h2 className="font-sans text-4xl md:text-5xl font-light">What couples say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, name, wedding }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col gap-5 p-8 border border-border/60 rounded-lg bg-card"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-sans text-xl font-light leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-auto">
                  <p className="font-body text-sm font-bold">{name}</p>
                  <p className="font-body text-xs text-muted-foreground tracking-wide">{wedding}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-foreground text-background">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-sans text-4xl md:text-5xl font-light mb-6 leading-snug">
            Ready to make your wedding <em className="text-primary">magical?</em>
          </h2>
          <p className="font-body text-background/60 mb-10 leading-relaxed">
            Book a free 30-minute consultation and let&apos;s start crafting the
            moments you&apos;ll treasure forever.
          </p>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="tracking-widest uppercase text-xs font-body"
          >
            Get in Touch
          </Button>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
