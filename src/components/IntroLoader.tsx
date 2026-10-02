import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";
import { asset } from "../lib/asset";

type IntroLoaderProps = {
  onComplete: () => void;
};

const INTRO_DESKTOP = asset("/video/waed-intro.mp4");
const INTRO_MOBILE = asset("/video/waed-intro-mobile.mp4");

function pickIntroSrc() {
  if (typeof window === "undefined") return INTRO_DESKTOP;
  const narrow = window.matchMedia("(max-width: 768px)").matches;
  const portraitPhone =
    window.matchMedia("(orientation: portrait)").matches &&
    Math.min(window.innerWidth, window.innerHeight) < 768;
  return narrow || portraitPhone ? INTRO_MOBILE : INTRO_DESKTOP;
}

/**
 * Full-screen intro: plays a device-fit brand video once, then reveals the site.
 */
export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();
  const [exiting, setExiting] = useState(false);
  const [src] = useState(pickIntroSrc);
  const done = useRef(false);
  const triedFallback = useRef(false);

  const finish = useCallback(() => {
    if (done.current) return;
    done.current = true;
    setExiting(true);
    window.setTimeout(() => onComplete(), 700);
  }, [onComplete]);

  useEffect(() => {
    document.documentElement.classList.add("intro-active");
    return () => document.documentElement.classList.remove("intro-active");
  }, []);

  useEffect(() => {
    if (reduced) {
      finish();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.defaultMuted = true;
        video.muted = true;
        video.setAttribute("muted", "");
        video.playsInline = true;
        await video.play();
      } catch {
        finish();
      }
    };

    tryPlay();

    const safety = window.setTimeout(finish, 28000);
    return () => window.clearTimeout(safety);
  }, [reduced, finish, src]);

  const handleError = () => {
    const video = videoRef.current;
    if (!video || triedFallback.current) {
      finish();
      return;
    }
    if (src === INTRO_MOBILE) {
      triedFallback.current = true;
      video.src = INTRO_DESKTOP;
      video.load();
      void video.play().catch(finish);
      return;
    }
    finish();
  };

  const isMobileSrc = src === INTRO_MOBILE;

  return (
    <div
      className={`intro-loader${isMobileSrc ? " intro-loader--mobile" : ""}${exiting ? " is-exiting" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="WAED Industrial introduction"
    >
      <video
        key={src}
        ref={videoRef}
        className="intro-loader__video"
        src={src}
        playsInline
        muted
        autoPlay
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        onEnded={finish}
        onError={handleError}
      />
      <div className="intro-loader__veil" aria-hidden="true" />
      <div className="intro-loader__chrome">
        <p className="intro-loader__brand">WAED Industrial</p>
        <button type="button" className="intro-loader__skip" onClick={finish}>
          Enter site
        </button>
      </div>
    </div>
  );
}
