export function CtaBand() {
  return (
    <section className="cta-band" aria-label="Request a quote">
      <div className="shell cta-band__inner reveal reveal--up">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Ready to manufacture with WAED?</h2>
          <p className="lead">
            Send your product, pack size and volume — or ask for a private-label sample — and our team will respond with a quote.
          </p>
        </div>
        <div className="cta-band__actions">
          <a className="btn btn-primary" href="#contact">
            Request a Quote
          </a>
          <a className="btn btn-ghost" href="#private-label">
            Private Label
          </a>
        </div>
      </div>
    </section>
  );
}
