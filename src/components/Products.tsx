import { Link } from "react-router-dom";
import { lineup, products } from "../content/site";
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
          {products.map((product, i) => (
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

        <div className="brands-launch reveal reveal--up">
          <p className="brands-launch__kicker">Next</p>
          <h3 className="brands-launch__title">Explore Our Brands</h3>
          <p className="brands-launch__copy">
            Meet Enaya, Clean — and the brand house growing from our facility in Bahrain.
          </p>
          <Link className="brands-launch__btn" to="/brands">
            Explore Our Brands
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
