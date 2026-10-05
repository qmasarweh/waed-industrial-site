import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, site } from "../content/site";
import { asset } from "../lib/asset";

export function Header() {
  const location = useLocation();
  const isBrands = location.pathname === "/brands";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      if (isBrands) {
        setOverDark(y < window.innerHeight * 0.72);
      } else {
        setOverDark(y < window.innerHeight * 0.95);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isBrands, location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const close = () => setOpen(false);
  const light = overDark && !scrolled && !open;

  return (
    <>
      <header
        className={`site-header${scrolled || open ? " is-scrolled" : ""}${light ? " is-light" : ""}${open ? " is-open" : ""}`}
      >
        <div className="site-header__inner">
          <Link className="brand-lockup" to="/" aria-label={`${site.displayName} home`} onClick={close}>
            <img
              className="brand-lockup__mark"
              src={light ? asset("/img/waed-logo-vertical-white.svg") : asset("/img/waed-logo-vertical.svg")}
              alt={site.legalName}
              width={36}
              height={42}
            />
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className={`nav-cta${light ? " nav-cta--light" : ""}`} to="/#contact">
              Request a Quote
            </Link>
            <button
              className={`nav-toggle${open ? " is-active" : ""}`}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`nav-mobile${open ? " is-open" : ""}`} aria-label="Mobile">
        <div className="nav-mobile__panel">
          {nav.map((item) => (
            <Link key={item.href} to={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
          <Link className="btn btn-primary nav-mobile__cta" to="/#contact" onClick={close}>
            Request a Quote
          </Link>
        </div>
      </nav>
    </>
  );
}
