import { useEffect } from "react";
import { Link } from "react-router-dom";
import { brands } from "../content/site";
import { asset } from "../lib/asset";
import { MarkRule } from "../components/MarkRule";
import { RevealObserver } from "../components/RevealObserver";
import { ScrollType } from "../components/motion/ScrollType";

export function BrandsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const page = brands.page;
  return (
    <>
      <main className="page-parallax is-ready brands-page">
        <section className="brands-hero" aria-label="Our Brands">
          <div className="brands-hero__media" aria-hidden="true">
            <img
              src={asset("/img/brands-hero-house.jpg")}
              alt=""
              width={1920}
              height={1080}
              fetchPriority="high"
            />
            <div className="brands-hero__veil" />
          </div>
          <div className="shell brands-hero__content">
            <div className="brands-hero__panel">
              <p className="brands-hero__eyebrow">{page.eyebrow}</p>
              <h1 className="brands-hero__title">{page.title}</h1>
              <div className="brands-hero__rule" aria-hidden="true">
                <span />
                <i />
                <span />
              </div>
              <p className="brands-hero__line">{page.heroLine}</p>
            </div>
          </div>
        </section>

        <section className="section brands-intro">
          <div className="shell brands-intro__grid">
            <ScrollType text="A house of brands, manufactured with precision." mode="rise" />
            <p className="lead reveal reveal--up">{page.intro}</p>
          </div>
        </section>

        {brands.catalog.map((brand, index) => (
          <section
            key={brand.id}
            className={`section brand-block${index % 2 === 0 ? " section--alt" : ""}`}
            id={brand.id}
          >
            <div className="shell">
              <div className="brand-block__copy">
                <p className="eyebrow">{index === 0 ? "Featured Brand" : "Brand"}</p>
                <div className="brand-block__identity reveal reveal--up">
                  <img
                    className="brand-block__logo"
                    src={asset(brand.logo)}
                    alt={`${brand.name} logo`}
                    width={220}
                    height={220}
                  />
                  <h2
                    className={`brand-block__name${brand.titleClass ? ` ${brand.titleClass}` : ""}`}
                  >
                    {brand.name}
                  </h2>
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

                <div className="brands-range reveal reveal--up">
                  <p className="brands-range__label">
                    Range · {brand.products.length} products
                  </p>
                  <ul className="brands-range__strip" aria-label={`${brand.name} product range`}>
                    {brand.products.map((product, i) => (
                      <li key={product.name}>
                        <span className="brands-range__index">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="brands-range__name">{product.name}</span>
                        <span className="brands-range__cat">{product.category}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {brand.gallery.length > 0 && (
                  <div
                    className={`brands-thumbs reveal reveal--up${
                      brand.gallery.length < 3 ? " brands-thumbs--sparse" : ""
                    }`}
                    aria-label={`${brand.name} product photography`}
                  >
                    {brand.gallery.map((shot) => (
                      <figure key={shot.src} className="brands-thumbs__item">
                        <img src={asset(shot.src)} alt={shot.alt} loading="lazy" />
                        <figcaption>{shot.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        <section className="section section--alt brands-cta">
          <div className="shell brands-cta__inner reveal reveal--up">
            <h2>Partner with a Bahrain manufacturer.</h2>
            <p className="lead">
              Private label, contract manufacturing, or brand supply — talk to the team that makes
              the product.
            </p>
            <div className="brands-cta__actions">
              <Link className="btn btn-primary" to={{ pathname: "/", hash: "contact" }}>
                Request a Quote
              </Link>
              <Link className="btn btn-ghost" to={{ pathname: "/", hash: "private-label" }}>
                Private Label
              </Link>
            </div>
          </div>
        </section>
      </main>
      <RevealObserver />
    </>
  );
}
