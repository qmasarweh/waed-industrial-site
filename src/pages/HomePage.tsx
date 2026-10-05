import { useCallback, useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Factory } from "../components/Factory";
import { Products } from "../components/Products";
import { PrivateLabel } from "../components/PrivateLabel";
import { Quality } from "../components/Quality";
import { Markets } from "../components/Markets";
import { Contact } from "../components/Contact";
import { Statement } from "../components/Statement";
import { RevealObserver } from "../components/RevealObserver";
import { MediaBand } from "../components/motion/MediaBand";
import { IntroLoader } from "../components/IntroLoader";
import { asset } from "../lib/asset";

const INTRO_KEY = "waed-intro-seen";

export function HomePage() {
  const [introDone, setIntroDone] = useState(() => {
    try {
      return sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {
      return false;
    }
  });

  const handleIntroComplete = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* ignore */
    }
    setIntroDone(true);
  }, []);

  useEffect(() => {
    if (!introDone) return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [introDone]);

  return (
    <>
      {!introDone && <IntroLoader onComplete={handleIntroComplete} />}
      <main className={`page-parallax${introDone ? " is-ready" : ""}`}>
        <Hero />
        <About />
        <Statement line="Local manufacturing. Regional reach. Reliable supply." />
        <MediaBand
          src={asset("/img/facility-media.jpg")}
          alt="WAED Industrial manufacturing facility exterior"
          caption="Facility · Brand · Bahrain"
          speed="fast"
        />
        <Factory />
        <Products />
        <Statement
          tone="navy"
          eyebrow="Private label"
          line="Your brand. Our facility. Made in Bahrain."
        />
        <PrivateLabel />
        <MediaBand
          src={asset("/img/logo-wall.png")}
          alt="WAED Industrial brand wall"
          caption="Brand · Built in Bahrain"
          speed="medium"
        />
        <Quality />
        <Markets />
        <Contact />
      </main>
      {introDone && <RevealObserver />}
    </>
  );
}
