import { brands, lineup } from "../content/site";
import { MarkRule } from "./MarkRule";
import { ScrollType } from "./motion/ScrollType";

export function Products() {
  return (
    <section className="section scene scene--cover" id="products">
      <div className="shell">
        <div className="section-head section-head--center">
          <p className="eyebrow">{lineup.eyebrow}</p>
          <ScrollType text={lineup.title} mode="rise" />
          <MarkRule />
          <p className="lead reveal reveal--up">{lineup.lead}</p>
        </div>

        <ul className="product-grid reveal reveal--up" aria-label="Product lineup">
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

        <p className="product-note reveal reveal--up">{lineup.productsNote}</p>

        <p className="section-head__action section-head__action--center reveal reveal--up">
          <a className="btn btn-primary" href="#contact">
            Request a Product Quote
          </a>
        </p>

        <div className="brands-block" id="brands">
          <div className="section-head section-head--center">
            <ScrollType text={brands.title} className="brands-block__title" mode="rise" />
            <MarkRule />
            <p className="lead reveal reveal--up">{brands.lead}</p>
          </div>

          <article className="brand-feature reveal reveal--up">
            <p className="brand-feature__label">Current brand</p>
            <h3 className="brand-feature__name enaya-title">{brands.name}</h3>
            <p className="brand-feature__tagline">{brands.tagline}</p>
            <p className="brand-feature__body">{brands.purpose}</p>
            <p className="brand-feature__note">{brands.growingNote}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
