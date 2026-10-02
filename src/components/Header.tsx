import { useEffect, useState } from "react";
import { nav, site } from "../content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      // Stay light while sticky hero is still pinned (~full viewport of travel)
      setOverDark(y < window.innerHeight * 0.95);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const light = overDark && !scrolled && !open;

  return (
    <>
      <header
        className={`site-header${scrolled || open ? " is-scrolled" : ""}${light ? " is-light" : ""}${open ? " is-open" : ""}`}
      >
        <div className="site-header__inner">
          <a className="brand-lockup" href="#top" aria-label={`${site.displayName} home`} onClick={close}>
            <img
              className="brand-lockup__mark"
              src={light ? "/img/waed-logo-vertical-white.svg" : "/img/waed-logo-vertical.svg"}
              alt={site.legalName}
              width={36}
              height={42}
            />
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className={`nav-cta${light ? " nav-cta--light" : ""}`} href="#contact">
              Request a Quote
            </a>
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
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary nav-mobile__cta" href="#contact" onClick={close}>
            Request a Quote
          </a>
        </div>
      </nav>
    </>
  );
}
