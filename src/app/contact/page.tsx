"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "@tanstack/react-form";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SiteLayout from "@/components/SiteLayout";

/* ── Replace with your Formspree endpoint ───────────────────
   Sign up at https://formspree.io and paste the form ID:
   e.g. "https://formspree.io/f/xyzabcde"
   ────────────────────────────────────────────────────────── */
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const services = [
  "First Dance Choreography",
  "Bridal Party Group Dance",
  "Parent Dance Choreography",
  "Full Event Coordination",
  "Partial Planning Package",
  "Ceremony Music Direction",
  "Other / Not Sure Yet",
];

/* ── Field wrapper ────────────────────────────────────────── */
function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-xs tracking-widest uppercase text-foreground/70">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="font-body text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}

/* ── Input base styles ────────────────────────────────────── */
const inputClass =
  "w-full px-4 py-3 rounded-md border border-input bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition";

/* ── Page ─────────────────────────────────────────────────── */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      weddingDate: "",
      service: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      setServerError(null);
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(value),
        });
        if (!res.ok) throw new Error("Submission failed");
        setSubmitted(true);
      } catch {
        setServerError(
          "Something went wrong. Please try again or email us directly at hello@happileewed.com."
        );
      }
    },
  });

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
            Let&apos;s talk
          </p>
          <h1 className="font-sans text-5xl md:text-7xl font-light leading-none tracking-wide mb-6">
            Get in Touch
          </h1>
          <p className="font-body text-background/60 leading-relaxed max-w-xl mx-auto">
            Tell us about your wedding and we&apos;ll reach out to schedule a free
            30-minute consultation.
          </p>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact info sidebar */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-5">
                Contact details
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Mail, label: "hello@happileewed.com" },
                  { icon: Phone, label: "+1 (555) 000-0000" },
                  { icon: MapPin, label: "San Francisco, CA" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-primary" />
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
                Studio hours
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Monday – Friday: 9am – 6pm
                <br />
                Saturday: 10am – 4pm
                <br />
                Sunday: By appointment
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <Card className="border-primary/30">
                <CardContent className="p-10 flex flex-col items-center text-center gap-4">
                  <CheckCircle size={40} className="text-primary" />
                  <h2 className="font-sans text-3xl font-light">
                    Thank you!
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed max-w-sm">
                    We&apos;ve received your message and will be in touch within
                    one business day to schedule your free consultation.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  form.handleSubmit();
                }}
                className="flex flex-col gap-6"
                noValidate
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <form.Field
                    name="name"
                    validators={{
                      onChange: ({ value }) =>
                        !value.trim() ? "Name is required" : undefined,
                    }}
                  >
                    {(field) => (
                      <Field label="Your name" error={field.state.meta.errors[0]?.toString()} required>
                        <input
                          className={inputClass}
                          placeholder="Jane & John"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </Field>
                    )}
                  </form.Field>

                  <form.Field
                    name="email"
                    validators={{
                      onChange: ({ value }) => {
                        if (!value.trim()) return "Email is required";
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                          return "Please enter a valid email";
                        return undefined;
                      },
                    }}
                  >
                    {(field) => (
                      <Field label="Email address" error={field.state.meta.errors[0]?.toString()} required>
                        <input
                          className={inputClass}
                          type="email"
                          placeholder="you@example.com"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </Field>
                    )}
                  </form.Field>
                </div>

                {/* Phone + Wedding date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <form.Field name="phone">
                    {(field) => (
                      <Field label="Phone number">
                        <input
                          className={inputClass}
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </Field>
                    )}
                  </form.Field>

                  <form.Field name="weddingDate">
                    {(field) => (
                      <Field label="Wedding date">
                        <input
                          className={inputClass}
                          type="date"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </Field>
                    )}
                  </form.Field>
                </div>

                {/* Service */}
                <form.Field
                  name="service"
                  validators={{
                    onChange: ({ value }) =>
                      !value ? "Please select a service" : undefined,
                  }}
                >
                  {(field) => (
                    <Field label="Service you're interested in" error={field.state.meta.errors[0]?.toString()} required>
                      <select
                        className={inputClass}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  )}
                </form.Field>

                {/* Message */}
                <form.Field name="message">
                  {(field) => (
                    <Field label="Tell us about your wedding">
                      <textarea
                        className={`${inputClass} min-h-[120px] resize-y`}
                        placeholder="Venue, style, vibe, anything that excites you…"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </Field>
                  )}
                </form.Field>

                {serverError && (
                  <p className="font-body text-sm text-destructive">{serverError}</p>
                )}

                <form.Subscribe selector={(state) => state.isSubmitting}>
                  {(isSubmitting) => (
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto font-body tracking-widest uppercase text-xs"
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </Button>
                  )}
                </form.Subscribe>

                <p className="font-body text-xs text-muted-foreground">
                  We respect your privacy and will never share your details.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
