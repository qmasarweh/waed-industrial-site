import { useEffect, useId, useRef, useState } from "react";
import { isNavDropdown, nav, site } from "../content/site";
import { asset } from "../lib/asset";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [overDark, setOverDark] = useState(true);
  const [desktopBrandsOpen, setDesktopBrandsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const brandsMenuId = useId();
  const brandsWrapRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!desktopBrandsOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!brandsWrapRef.current?.contains(event.target as Node)) {
        setDesktopBrandsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDesktopBrandsOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [desktopBrandsOpen]);

  const close = () => {
    setOpen(false);
    setMobileBrandsOpen(false);
    setDesktopBrandsOpen(false);
  };

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
              src={light ? asset("/img/waed-logo-vertical-white.svg") : asset("/img/waed-logo-vertical.svg")}
              alt={site.legalName}
              width={36}
              height={42}
            />
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((item) => {
              if (!isNavDropdown(item)) {
                return (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                );
              }

              return (
                <div
                  key={item.label}
                  className={`nav-dropdown${desktopBrandsOpen ? " is-open" : ""}`}
                  ref={brandsWrapRef}
                  onMouseEnter={() => setDesktopBrandsOpen(true)}
                  onMouseLeave={() => setDesktopBrandsOpen(false)}
                >
                  <button
                    type="button"
                    className="nav-dropdown__trigger"
                    aria-haspopup="true"
                    aria-expanded={desktopBrandsOpen}
                    aria-controls={brandsMenuId}
                    onClick={() => setDesktopBrandsOpen((v) => !v)}
                  >
                    {item.label}
                    <span className="nav-dropdown__caret" aria-hidden="true" />
                  </button>
                  <div
                    id={brandsMenuId}
                    className="nav-dropdown__menu"
                    role="menu"
                    hidden={!desktopBrandsOpen}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setDesktopBrandsOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                    {/* Add future brand items in site.ts → nav → Our Brands → children */}
                  </div>
                </div>
              );
            })}
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
          {nav.map((item) => {
            if (!isNavDropdown(item)) {
              return (
                <a key={item.href} href={item.href} onClick={close}>
                  {item.label}
                </a>
              );
            }

            return (
              <div
                key={item.label}
                className={`nav-mobile__dropdown${mobileBrandsOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="nav-mobile__dropdown-trigger"
                  aria-haspopup="true"
                  aria-expanded={mobileBrandsOpen}
                  onClick={() => setMobileBrandsOpen((v) => !v)}
                >
                  {item.label}
                  <span className="nav-dropdown__caret" aria-hidden="true" />
                </button>
                <div className="nav-mobile__submenu" hidden={!mobileBrandsOpen}>
                  {item.children.map((child) => (
                    <a key={child.href} href={child.href} onClick={close}>
                      {child.label}
                    </a>
                  ))}
                  {/* Add future brand items in site.ts → nav → Our Brands → children */}
                </div>
              </div>
            );
          })}
          <a className="btn btn-primary nav-mobile__cta" href="#contact" onClick={close}>
            Request a Quote
          </a>
        </div>
      </nav>
    </>
  );
}
