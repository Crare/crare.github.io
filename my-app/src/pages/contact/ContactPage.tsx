import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../../components/PageMeta";
import ExternalLink from "../../components/ExternalLink";
import { ArrowRight } from "../../components/Icons";
import { contacts } from "../../data/contacts";

const TIME_ZONE = "Europe/Helsinki";

/** Current time in Finland as HH:mm:ss (24-hour). */
export const finlandTime = (date: Date): string => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const part = (type: string) => (parts.find((p) => p.type === type)?.value ?? "00").padStart(2, "0");
  return `${part("hour")}:${part("minute")}:${part("second")}`;
};

/** e.g. "Tuesday · Helsinki · EET" */
export const finlandZone = (date: Date): string => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    weekday: "long",
    timeZoneName: "short",
  }).formatToParts(date);
  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${part("weekday")} · Helsinki · ${part("timeZoneName")}`;
};

const ContactPage = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="p-contact">
      <PageMeta
        title="Contact – Juho Heikkinen | Software Developer"
        description="Get in touch with Juho Heikkinen via LinkedIn, GitHub, Itch.io or Bluesky."
        path="/contact"
        ogDescription="Connect with Juho Heikkinen on LinkedIn, GitHub, Itch.io or Bluesky."
      />

      <section className="chero" aria-labelledby="contact-h">
        <div className="wrap cgrid">
          <div>
            <p className="kick fade"><span className="acc" aria-hidden="true">●</span>  [06] Contact</p>
            <h1 className="huge" id="contact-h">
              <span className="visually-hidden">Get in touch: </span>
              <span className="ln"><span style={{ animationDelay: ".05s" }}>Let’s</span></span>{" "}
              <span className="ln"><span style={{ animationDelay: ".18s" }}><em>talk</em><i className="caret" aria-hidden="true" /></span></span>
            </h1>
            <p className="intro fade" style={{ animationDelay: ".5s" }}>
              Have a project, a role or just a question? Pick the channel that suits you best — for work-related
              messages, start with LinkedIn.
            </p>
          </div>
          <aside className="status" aria-label="Where I am">
            <div className="sh"><span className="dot" aria-hidden="true" />Local time in Finland</div>
            {/* Not a live region: a ticking clock would be announced every second. */}
            <div className="clock">
              <b><time dateTime={now.toISOString()}>{finlandTime(now)}</time></b>
              <span>{finlandZone(now)}</span>
            </div>
            <dl className="facts">
              <div><dt>Based in</dt><dd>Finland</dd></div>
              <div><dt>Currently</dt><dd>Full-stack developer at Zure</dd></div>
              <div><dt>Building</dt><dd>Web, mobile &amp; cloud</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="sec" aria-labelledby="ch-h" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="sechead">
            <div><p className="kick">Channels / {String(contacts.length).padStart(2, "0")}</p><h2 className="h2" id="ch-h">Find me here</h2></div>
          </div>
          <ul className="board">
            {contacts.map((c, i) => (
              <li key={c.id}>
                <ExternalLink
                  className={c.id === "linkedin" ? "ch pri" : "ch"}
                  href={c.link}
                  ariaLabel={`${c.label}: ${c.description} (${c.handle})`}
                  trackingLabel={c.label}
                  trackingLocation="contact"
                >
                  <span className="n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <span className="name">{c.label}</span>
                  <span className="info"><b>{c.description}</b><span>{c.handle}</span></span>
                  <span className="arr" aria-hidden="true"><ArrowRight size={22} /></span>
                </ExternalLink>
              </li>
            ))}
          </ul>
          <div className="bottom">
            <p>Prefer to look around first? See what I’ve shipped, or read a bit more about me.</p>
            <div className="btns">
              <Link className="btn" to="/projects">See projects</Link>
              <Link className="btn" to="/about">About me</Link>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: 72 }} aria-hidden="true" />
    </div>
  );
};

export default ContactPage;
