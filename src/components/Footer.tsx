import { nav, site } from "../content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <img
            src="/img/waed-logo-horizontal-navy.svg"
            alt={site.legalName}
            width={240}
            height={52}
          />
          <p>
            Bahrain-based manufacturer of soap, detergents, cleaning and polishing preparations —
            for retail, institutional, professional and private-label partners.
          </p>
        </div>
        <div className="footer-cols">
          <div>
            <strong>Explore</strong>
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <strong>Contact</strong>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            <a href={site.mapLink} target="_blank" rel="noreferrer">
              Hidd, Kingdom of Bahrain
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer-copy">
        © {year} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
