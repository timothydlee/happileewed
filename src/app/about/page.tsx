"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SiteLayout from "@/components/SiteLayout";

const values = [
  {
    title: "Intentional",
    description:
      "Every detail we design has a purpose. We don't do cookie-cutter weddings — we craft experiences that are deeply personal to you.",
  },
  {
    title: "Graceful",
    description:
      "Whether choreographing a first dance or managing a 200-person reception, we move through every moment with calm, elegance, and warmth.",
  },
  {
    title: "Joyful",
    description:
      "We love what we do. That love shows in the care we bring to every couple, every rehearsal, and every perfect moment we help create.",
  },
];

const team = [
  {
    name: "Maya Chen",
    role: "Lead Choreographer & Founder",
    bio: "With over 12 years in professional dance and 300+ weddings, Maya brings artistry and heart to every first dance she designs.",
  },
  {
    name: "Jordan Rivera",
    role: "Senior Event Coordinator",
    bio: "Jordan's meticulous planning and vendor relationships ensure every wedding day unfolds flawlessly from first look to last song.",
  },
  {
    name: "Isla Park",
    role: "Choreographer & Rehearsal Coach",
    bio: "Isla specialises in helping nervous non-dancers find their rhythm and confidence — with laughter and patience every step of the way.",
  },
];

export default function AboutPage() {
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
            Our story
          </p>
          <h1 className="font-sans text-5xl md:text-7xl font-light leading-none tracking-wide mb-6">
            About Us
          </h1>
          <p className="font-body text-background/60 leading-relaxed max-w-xl mx-auto">
            We are a team of dancers, planners, and romantics united by one
            belief: every love story deserves to be told beautifully.
          </p>
        </motion.div>
      </section>

      {/* Origin story */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Placeholder image */}
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 w-full" />

            <div className="flex flex-col gap-6">
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                How it began
              </p>
              <h2 className="font-sans text-4xl font-light leading-snug">
                Born from a love of love
              </h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                Happilee Wed was founded in 2018 by Maya Chen, a professional
                dancer who kept being asked by engaged friends: &ldquo;Can you help us
                with our first dance?&rdquo; What started as a favour quickly became a
                calling.
              </p>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                Today, Happilee Wed is a full-service wedding choreography and
                event planning studio. We&apos;ve had the honour of celebrating over
                500 couples — helping each one feel completely at home in their
                own wedding day.
              </p>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                We are based in San Francisco and work with couples across
                California and beyond.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
              What guides us
            </p>
            <h2 className="font-sans text-4xl font-light">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map(({ title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-primary font-sans text-3xl font-light">
                    0{i + 1}
                  </span>
                  <Separator orientation="vertical" className="h-6" />
                  <h3 className="font-sans text-2xl font-medium">{title}</h3>
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
              The people behind the magic
            </p>
            <h2 className="font-sans text-4xl font-light">Meet the Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map(({ name, role, bio }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col gap-4"
              >
                {/* Placeholder headshot */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-accent/30 w-full" />
                <div>
                  <h3 className="font-sans text-xl font-medium">{name}</h3>
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-3">
                    {role}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-foreground text-background">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans text-4xl font-light mb-4 leading-snug">
            We&apos;d love to be part of <em className="text-primary">your</em> story.
          </h2>
          <p className="font-body text-background/60 mb-8 leading-relaxed">
            Reach out and let&apos;s start planning something beautiful together.
          </p>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="font-body tracking-widest uppercase text-xs"
          >
            Get in Touch
          </Button>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
