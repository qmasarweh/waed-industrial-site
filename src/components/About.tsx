import { about } from "../content/site";
import { MarkRule } from "./MarkRule";
import { ScrollType } from "./motion/ScrollType";
import { DriftRail } from "./motion/DriftRail";

export function About() {
  return (
    <section className="section scene scene--cover" id="about">
      <div className="shell">
        <div className="section-head section-head--center">
          <p className="eyebrow">{about.eyebrow}</p>
          <ScrollType text={about.title} mode="drift" />
          <MarkRule />
          <p className="lead muted reveal reveal--up">{about.mission}</p>
        </div>
      </div>

      <DriftRail items={about.values.map((v) => v.name)} />
    </section>
  );
}
