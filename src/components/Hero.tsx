import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { home, site } from "../content/site";
import { ScrollType } from "./motion/ScrollType";
import { BrandMark } from "./BrandMark";

gsap.registerPlugin(ScrollTrigger);

/**
 * Sticky hero with snappy upward exit so copy stays readable and the page moves on.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const veil = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const scrollCue = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const media = img.current;
    const copy = content.current;
    if (!el || !media) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const ctx = gsap.context(() => {
      const scrub = fine ? 0.25 : true;

      gsap.fromTo(
        media,
        { yPercent: -4, scale: 1.12 },
        {
          yPercent: 10,
          scale: 1.02,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub,
          },
        },
      );

      if (veil.current) {
        gsap.fromTo(
          veil.current,
          { opacity: 0.55 },
          {
            opacity: 0.85,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "bottom top",
              scrub,
            },
          },
        );
      }

      // Entire hero copy rises quickly and clears — keep opacity readable until late
      if (copy) {
        gsap.to(copy, {
          yPercent: fine ? -55 : -30,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: fine ? 0.2 : true,
          },
        });
      }

      if (mark.current && fine) {
        gsap.to(mark.current, {
          yPercent: 28,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      }

      if (scrollCue.current) {
        gsap.to(scrollCue.current, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "15% top",
            scrub: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root} aria-label="Hero">
      <div className="hero__sticky">
        <div className="hero__stage" aria-hidden="true">
          <div className="hero__media">
            <img
              ref={img}
              src="/img/facility-hero.png"
              alt=""
              width={1920}
              height={1080}
              fetchPriority="high"
            />
            <div className="hero__veil" ref={veil} />
          </div>
          <div className="hero__watermark" ref={mark}>
            <BrandMark tone="white" />
          </div>
        </div>

        <div className="shell hero__content" ref={content}>
          <p className="hero__place">Bahrain · Hidd</p>
          <img
            className="hero__brand"
            src="/img/waed-logo-horizontal-white.svg"
            alt={site.legalName}
            width={420}
            height={90}
          />
          <ScrollType text={home.headline} as="h1" className="alive-headline" mode="hero" />
          <p className="hero__lead">{home.support}</p>
          <div className="hero__actions">
            <a className="btn btn-light" href="#contact">
              {home.ctaPrimary}
            </a>
            <a className="hero__text-link" href="#factory">
              {home.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true" ref={scrollCue}>
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
