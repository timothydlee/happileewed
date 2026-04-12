"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music, Heart, Calendar, Users, Camera, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SiteLayout from "@/components/SiteLayout";

const services = [
  {
    icon: Music,
    title: "First Dance Choreography",
    badge: "Most Popular",
    description:
      "Our signature service. We work one-on-one with couples to design a first dance that reflects your unique love story. Whether you have two left feet or a background in dance, we tailor every step to your confidence level and vision.",
    includes: [
      "Initial consultation to choose your song and vision",
      "Up to 6 private rehearsal sessions",
      "Costume and footwear guidance",
      "Day-of touch-up rehearsal",
    ],
    price: "From $650",
  },
  {
    icon: Heart,
    title: "Bridal Party Group Dance",
    badge: null,
    description:
      "Turn your reception into an unforgettable show with a coordinated surprise performance from the wedding party. We design routines that are fun, achievable, and guaranteed to bring the house down.",
    includes: [
      "Group choreography for up to 12 participants",
      "4 group rehearsal sessions",
      "Individual practice guides",
      "Music editing and cueing",
    ],
    price: "From $850",
  },
  {
    icon: Users,
    title: "Parent Dance Choreography",
    badge: null,
    description:
      "The father-daughter and mother-son dances are cherished moments. We help create gentle, meaningful routines that feel natural and emotionally resonant — no dance experience required.",
    includes: [
      "Up to 4 private rehearsal sessions",
      "Song selection assistance",
      "Simplified routine adapted to comfort level",
    ],
    price: "From $350",
  },
  {
    icon: Calendar,
    title: "Full Event Coordination",
    badge: "Premium",
    description:
      "Leave every logistical detail in our hands. From vendor management to timeline creation to day-of coordination, we ensure your wedding day runs with effortless precision.",
    includes: [
      "Unlimited planning consultations",
      "Vendor research, negotiation, and booking",
      "Detailed wedding day timeline",
      "Full day-of coordination team",
      "Post-event wrap-up and vendor payments",
    ],
    price: "From $2,400",
  },
  {
    icon: Camera,
    title: "Partial Planning Package",
    badge: null,
    description:
      "Already have some vendors in place? We step in during the final months to pull everything together, confirm details, and coordinate seamlessly on the day.",
    includes: [
      "Up to 10 planning meetings",
      "Vendor confirmation and coordination",
      "Day-of timeline management",
      "Rehearsal dinner coordination",
    ],
    price: "From $1,200",
  },
  {
    icon: Mic,
    title: "Ceremony Music Direction",
    badge: null,
    description:
      "We curate and direct all musical elements of your ceremony — from the processional to the recessional — ensuring every cue is perfectly timed and emotionally matched.",
    includes: [
      "Full ceremony music consultation",
      "Processional and recessional choreography",
      "Coordination with musician or DJ",
      "Live rehearsal walkthrough",
    ],
    price: "From $400",
  },
];

export default function ServicesPage() {
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
            What we offer
          </p>
          <h1 className="font-sans text-5xl md:text-7xl font-light leading-none tracking-wide mb-6">
            Our Services
          </h1>
          <p className="font-body text-background/60 leading-relaxed max-w-xl mx-auto">
            From choreographed first dances to full wedding coordination, every
            service is tailored to you — your vision, your style, your story.
          </p>
        </motion.div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, badge, description, includes, price }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/60 hover:shadow-md transition-shadow">
                  <CardContent className="p-8 flex flex-col gap-5">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                        <Icon size={22} className="text-primary" />
                      </div>
                      {badge && (
                        <Badge className="font-body text-xs tracking-widest">
                          {badge}
                        </Badge>
                      )}
                    </div>

                    <div>
                      <h2 className="font-sans text-2xl font-medium mb-2">{title}</h2>
                      <p className="font-body text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
                        Includes
                      </p>
                      <ul className="space-y-2">
                        {includes.map((item) => (
                          <li key={item} className="flex gap-2 items-start font-body text-sm">
                            <span className="text-primary mt-0.5">✦</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4">
                      <p className="font-sans text-xl font-medium text-primary">{price}</p>
                      <Button
                        render={<Link href="/contact" />}
                        size="sm"
                        variant="outline"
                        className="font-body text-xs tracking-widest uppercase"
                      >
                        Enquire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
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
            Not sure which package is right for you?
          </h2>
          <p className="font-body text-muted-foreground mb-8 leading-relaxed">
            Book a free consultation and we&apos;ll help you find the perfect fit
            for your wedding vision and budget.
          </p>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="font-body tracking-widest uppercase text-xs"
          >
            Book a Free Consult
          </Button>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
