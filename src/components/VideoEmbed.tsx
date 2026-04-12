"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type VideoProvider = "youtube" | "vimeo";

interface VideoEmbedProps {
  /** YouTube video ID (e.g. "dQw4w9WgXcQ") or Vimeo video ID (e.g. "76979871") */
  id: string;
  provider?: VideoProvider;
  /** Alt text / accessible title for the video */
  title: string;
  /** Optional poster image URL. Falls back to YouTube's auto-thumbnail. */
  poster?: string;
  /** Tailwind aspect-ratio class, defaults to "aspect-video" (16/9) */
  aspectClass?: string;
}

function buildSrc(provider: VideoProvider, id: string): string {
  if (provider === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  }
  return `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`;
}

function buildPoster(provider: VideoProvider, id: string, customPoster?: string): string {
  if (customPoster) return customPoster;
  if (provider === "youtube") {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }
  // Vimeo doesn't expose public thumbnail URLs directly; fall back to a placeholder gradient
  return "";
}

/**
 * Lightweight click-to-play video embed facade.
 * Renders a poster image + play button; only injects the iframe on click.
 * Supports YouTube and Vimeo.
 */
export default function VideoEmbed({
  id,
  provider = "youtube",
  title,
  poster,
  aspectClass = "aspect-video",
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const posterSrc = buildPoster(provider, id, poster);

  return (
    <div className={`relative w-full overflow-hidden rounded-lg bg-foreground ${aspectClass}`}>
      {playing ? (
        <iframe
          src={buildSrc(provider, id)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {/* Poster image */}
          {posterSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={posterSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            /* Vimeo / custom fallback — gradient placeholder */
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30" />
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors duration-300" />

          {/* Play button */}
          <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-background/90 group-hover:bg-background group-hover:scale-110 transition-all duration-300 shadow-lg">
            <Play size={24} className="text-primary fill-primary ml-1" />
          </div>
        </button>
      )}
    </div>
  );
}
