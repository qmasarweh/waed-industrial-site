import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getBrand } from "../content/site";
import { asset } from "../lib/asset";
import { MarkRule } from "../components/MarkRule";
import { RevealObserver } from "../components/RevealObserver";

export function BrandPage() {
  const { brandId = "" } = useParams();
  const brand = getBrand(brandId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandId]);

  if (!brand) {
    return <Navigate to="/brands" replace />;
  }

  return (
    <>
      <main className="page-parallax is-ready brands-page">
        <section className="section section--alt brand-detail">
          <div className="shell">
            <p className="brand-detail__crumb reveal reveal--up">
              <Link to="/brands">Our Brands</Link>
              <span aria-hidden="true"> / </span>
              <span>{brand.name}</span>
            </p>

            <div className="brand-block__copy">
              <p className="eyebrow">Brand</p>
              <div className="brand-block__identity reveal reveal--up">
                <img
                  className="brand-block__logo"
                  src={asset(brand.logo)}
                  alt={`${brand.name} logo`}
                  width={220}
                  height={220}
                />
                <h1
                  className={`brand-block__name${brand.titleClass ? ` ${brand.titleClass}` : ""}`}
                >
                  {brand.name}
                </h1>
                <p className="brand-block__tagline">{brand.tagline}</p>
              </div>
              <MarkRule />
              <p className="lead reveal reveal--up">{brand.story}</p>
              <ul
                className="brand-block__focus reveal reveal--up"
                aria-label={`${brand.name} focus markets`}
              >
                {brand.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head section-head--center">
              <p className="eyebrow">Products</p>
              <h2 className="brand-detail__products-title">{brand.name} Product Range</h2>
              <MarkRule />
              <p className="lead reveal reveal--up">
                Explore the {brand.name} range — manufactured by WAED Industrial in Bahrain.
              </p>
            </div>

            <ul className="brand-product-grid reveal reveal--up" aria-label={`${brand.name} products`}>
              {brand.products.map((product) => (
                <li key={product.name} className="brand-product">
                  <div className="brand-product__media">
                    {product.image ? (
                      <img
                        src={asset(product.image)}
                        alt={product.name}
                        loading="lazy"
                      />
                    ) : (
                      <div className="brand-product__placeholder" aria-hidden="true">
                        <span>{product.name.slice(0, 1)}</span>
                      </div>
                    )}
                  </div>
                  <div className="brand-product__copy">
                    <span className="brand-product__cat">{product.category}</span>
                    <strong>{product.name}</strong>
                    <p>{product.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            {brand.gallery.length > 0 && (
              <div
                className={`brands-thumbs brands-thumbs--detail reveal reveal--up${
                  brand.gallery.length < 3 ? " brands-thumbs--sparse" : ""
                }`}
                aria-label={`${brand.name} photography`}
              >
                {brand.gallery.map((shot) => (
                  <figure key={shot.src} className="brands-thumbs__item">
                    <img src={asset(shot.src)} alt={shot.alt} loading="lazy" />
                    <figcaption>{shot.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}

            <p className="section-head__action section-head__action--center reveal reveal--up">
              <Link className="btn btn-ghost" to="/brands">
                Back to Our Brands
              </Link>
              <Link className="btn btn-primary" to={{ pathname: "/", hash: "contact" }}>
                Request a Quote
              </Link>
            </p>
          </div>
        </section>
      </main>
      <RevealObserver />
    </>
  );
}
