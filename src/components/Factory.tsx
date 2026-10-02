import { factory, site } from "../content/site";
import { asset } from "../lib/asset";
import { MarkRule } from "./MarkRule";
import { ScrollType } from "./motion/ScrollType";
import { Parallax } from "./motion/Parallax";

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

        <ul className="capability-matrix reveal reveal--up">
          {factory.capabilities.map((c, i) => (
            <li key={c.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <strong>{c.title}</strong>
                <p>{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
