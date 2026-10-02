import { Parallax } from "./Parallax";

/** Full-bleed image plane — Romans-style depth between copy sections. */
export function MediaBand({
  src,
  alt,
  caption,
  speed = "fast",
  tone = "dark",
}: {
  src: string;
  alt: string;
  caption?: string;
  speed?: "slow" | "medium" | "fast";
  tone?: "dark" | "light";
}) {
  return (
    <section className={`media-band media-band--${tone}`} aria-label={caption ?? alt}>
      <div className="media-band__frame">
        <Parallax speed={speed} scale={1.22} className="media-band__layer">
          <img src={src} alt={alt} width={1920} height={1080} loading="lazy" />
        </Parallax>
        <div className="media-band__veil" aria-hidden="true" />
        {caption ? <p className="media-band__caption">{caption}</p> : null}
      </div>
    </section>
  );
}
