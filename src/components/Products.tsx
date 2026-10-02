import { brands } from "../content/site";
import { MarkRule } from "./MarkRule";
import { ScrollType } from "./motion/ScrollType";

export function Products() {
  return (
    <section className="section scene scene--cover" id="products">
      <div className="shell">
        <div className="section-head section-head--center">
          <p className="eyebrow">{brands.eyebrow}</p>
          <ScrollType text={brands.name} className="enaya-title" mode="drift" />
          <MarkRule />
          <p className="lead reveal reveal--up">{brands.tagline}</p>
          <p className="lead muted reveal reveal--up">{brands.purpose}</p>
        </div>

        <div className="product-lineup reveal reveal--up">
          <h3 className="product-lineup__title">Our Product Lineup</h3>
        </div>

        <ul className="product-grid reveal reveal--up" aria-label="ENAYA product range">
          {brands.products.map((product, i) => (
            <li key={product.name}>
              <div className="product-grid__meta">
                <span className="product-grid__index">{String(i + 1).padStart(2, "0")}</span>
                <span className="product-grid__category">{product.category}</span>
              </div>
              <strong>{product.name}</strong>
              <p>{product.body}</p>
            </li>
          ))}
        </ul>

        <p className="product-note reveal reveal--up">{brands.productsNote}</p>

        <p className="section-head__action section-head__action--center reveal reveal--up">
          <a className="btn btn-primary" href="#contact">
            Request a Product Quote
          </a>
        </p>
      </div>
    </section>
  );
}
