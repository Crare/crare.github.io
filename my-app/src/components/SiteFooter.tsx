import React from "react";
import { contacts } from "../data/contacts";
import ExternalLink from "./ExternalLink";

const SiteFooter = () => (
  <footer className="wrap">
    <div className="foot">
      <ul className="social" aria-label="Social profiles">
        {contacts.map((c) => (
          <li key={c.id}>
            <ExternalLink href={c.link} trackingLabel={c.label} trackingLocation="footer">
              {c.label} <span aria-hidden="true">↗</span>
            </ExternalLink>
          </li>
        ))}
      </ul>
      <div>
        <p className="fine">© Juho Heikkinen — designed &amp; built in Finland.</p>
        <p className="fine">Anonymous analytics are collected.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
