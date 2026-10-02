import { quality } from "../content/site";
import { MarkRule } from "./MarkRule";
import { ScrollType } from "./motion/ScrollType";

export function Quality() {
  return (
    <section className="section section--navy scene scene--cover" id="quality">
      <div className="shell">
        <div className="section-head section-head--center section-head--on-dark">
          <p className="eyebrow">{quality.eyebrow}</p>
          <ScrollType text={quality.title} mode="drift" />
          <MarkRule className="mark-rule--light" />
          <p className="lead reveal reveal--up">{quality.lead}</p>
        </div>

        <div className="cert-row">
          {quality.certifications.map((c) => (
            <article className="cert reveal reveal--up" key={c.code}>
              <strong>{c.code}</strong>
              <span>{c.title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
