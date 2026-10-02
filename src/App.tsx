import { useCallback, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Factory } from "./components/Factory";
import { Products } from "./components/Products";
import { PrivateLabel } from "./components/PrivateLabel";
import { Quality } from "./components/Quality";
import { Markets } from "./components/Markets";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Statement } from "./components/Statement";
import { RevealObserver } from "./components/RevealObserver";
import { SmoothScroll } from "./components/motion/SmoothScroll";
import { ScrollProgress } from "./components/motion/ScrollProgress";
import { LiveGlow } from "./components/motion/LiveGlow";
import { MediaBand } from "./components/motion/MediaBand";
import { IntroLoader } from "./components/IntroLoader";
import { asset } from "./lib/asset";

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  return (
    <>
      {!introDone && <IntroLoader onComplete={handleIntroComplete} />}

      <SmoothScroll />
      <ScrollProgress />
      <LiveGlow />
      <div className="noise" aria-hidden="true" />
      <Header />
      <main className={`page-parallax${introDone ? " is-ready" : ""}`}>
        <Hero />
        <About />
        <Statement line="Local manufacturing. Regional reach. Reliable supply." />
        <MediaBand
          src={asset("/img/placeholders/logo_page_0.png")}
          alt="WAED Industrial facility with brand mark"
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
      <Footer />
      {introDone && <RevealObserver />}
    </>
  );
}
