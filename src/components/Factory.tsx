import type { ReactNode } from "react";
import { factory, site } from "../content/site";
import { asset } from "../lib/asset";
import { MarkRule } from "./MarkRule";
import { ScrollType } from "./motion/ScrollType";
import { Parallax } from "./motion/Parallax";

const stageIcons: Record<string, ReactNode> = {
  Mixing: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 11c4 4.5 6.2 9 6.2 13S28 32.5 24 37c-4-4.5-6.2-9-6.2-13S20 15.5 24 11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M11 24h26" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2.2" fill="currentColor" />
    </svg>
  ),
  Filling: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M18 9h12v6l4.5 6.5V37a2.5 2.5 0 0 1-2.5 2.5H16A2.5 2.5 0 0 1 13.5 37V21.5L18 15V9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M20 9V7h8v2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M16 29h16" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M24 7v-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Packaging: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M9 18 24 9l15 9v17l-15 9-15-9V18Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M24 9v35M9 18l15 9 15-9" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Development: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M15 37c0-7 4-11.5 9-16 5 4.5 9 9 9 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="13" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M13 37h22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 22h10M21 27h6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
};

export function Factory() {
  return (
    <section className="section section--alt scene" id="factory">
      <div className="shell">
        <div className="split split--media split--parallax">
          <div className="section-head">
            <p className="eyebrow">{factory.eyebrow}</p>
            <ScrollType text={factory.title} mode="rise" />
            <MarkRule className="mark-rule--left" />
            <p className="lead reveal reveal--up">{factory.lead}</p>
            <p className="lead muted reveal reveal--up">{factory.location}</p>
            <p className="section-head__action reveal reveal--up">
              <a className="btn btn-primary" href={site.mapLink} target="_blank" rel="noreferrer">
                Open in Maps
              </a>
            </p>
          </div>
          <figure className="media-frame media-frame--parallax reveal reveal--scale">
            <Parallax speed="fast" scale={1.2}>
              <img
                src={asset("/img/facility-hero.png")}
                alt="WAED Industrial manufacturing facility in Hidd, Bahrain"
                width={1400}
                height={900}
                loading="lazy"
              />
            </Parallax>
            <figcaption>Registered manufacturing · Hidd, Bahrain</figcaption>
          </figure>
        </div>

        <div className="factory-flow reveal reveal--up">
          <div className="factory-flow__head">
            <p className="factory-flow__kicker">Production path</p>
            <h3 className="factory-flow__title">Four stages. One controlled line.</h3>
          </div>

          <ol className="factory-flow__track" aria-label="Factory production stages">
            {factory.capabilities.map((stage, i) => (
              <li key={stage.title} className="factory-flow__stage">
                <div className="factory-flow__marker" aria-hidden="true">
                  <span className="factory-flow__index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="factory-flow__icon">{stageIcons[stage.title]}</span>
                </div>
                <div className="factory-flow__copy">
                  <strong>{stage.title}</strong>
                  <p>{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
