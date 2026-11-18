import React from "react";

interface CtaStripProps {
  text: string;
  children: React.ReactNode;
}

/** Closing call-to-action row at the bottom of inner pages. */
const CtaStrip = ({ text, children }: CtaStripProps) => (
  <section className="wrap" aria-label="Next step">
    <div className="strip">
      <p>{text}</p>
      <div className="btns">{children}</div>
    </div>
  </section>
);

export default CtaStrip;
