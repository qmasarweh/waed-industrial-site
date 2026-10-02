import { useState, type FormEvent } from "react";
import { contact, site } from "../content/site";
import { MarkRule } from "./MarkRule";
import { ScrollType } from "./motion/ScrollType";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get("subject") || "General Inquiry");
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `WAED enquiry — ${subject}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="section section--alt scene scene--cover" id="contact">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <ScrollType text={contact.title} mode="rise" />
          <MarkRule className="mark-rule--left" />
          <p className="lead reveal reveal--up">{contact.lead}</p>

          <div className="contact-details">
            <a className="contact-chip" href={`mailto:${site.email}`}>
              <strong>Email</strong>
              <span>{site.email}</span>
            </a>
            <a className="contact-chip" href={`tel:${site.phoneHref}`}>
              <strong>Phone</strong>
              <span>{site.phoneDisplay}</span>
            </a>
            <div className="contact-chip">
              <strong>Factory</strong>
              <span>{site.address.street}</span>
            </div>
          </div>
        </div>

        <form className="form reveal reveal--up" onSubmit={onSubmit}>
          <div className="form-row">
            <label>
              Name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              Subject
              <select name="subject" defaultValue={contact.subjects[1]}>
                {contact.subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Message
            <textarea name="message" required placeholder="Product, pack size, estimated volume…" />
          </label>
          <p className="form-note">
            For quotes, include product, pack size and estimated volume. For private-label, include target market and artwork status.
          </p>
          <button className="btn btn-primary" type="submit">
            Send Enquiry
          </button>
          {sent && (
            <p className="form-success" role="status">
              Your email client should open with the enquiry ready to send.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
