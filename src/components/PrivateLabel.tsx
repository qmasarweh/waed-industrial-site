import { privateLabel } from "../content/site";
import { MarkRule } from "./MarkRule";
import { ScrollType } from "./motion/ScrollType";
import { Parallax } from "./motion/Parallax";
import { Marquee } from "./motion/Marquee";

export function PrivateLabel() {
  return (
    <section className="section section--alt scene" id="private-label">
      <div className="shell split split--media split--parallax">
        <div className="section-head">
          <p className="eyebrow">{privateLabel.eyebrow}</p>
          <ScrollType text={privateLabel.title} mode="rise" />
          <MarkRule className="mark-rule--left" />
          <p className="lead muted reveal reveal--up">{privateLabel.partners}</p>
          <p className="lead reveal reveal--up">{privateLabel.lead}</p>
          <p className="section-head__action reveal reveal--up">
            <a className="btn btn-primary" href="#contact">
              Start a Private-Label Brief
            </a>
          </p>
        </div>

        <div className="private-label__media reveal reveal--right">
          <figure className="media-frame media-frame--parallax">
            <Parallax speed="medium" scale={1.18}>
              <img
                src="/img/logo_extract_3_2.png"
                alt="WAED Industrial Innovation Company branded facility"
                width={1200}
                height={900}
                loading="lazy"
              />
            </Parallax>
          </figure>
        </div>
      </div>

      <div className="private-label__marquee reveal reveal--up">
        <Marquee items={privateLabel.services} />
        <Marquee items={privateLabel.services} reverse />
      </div>
    </section>
  );
}
