import { Container } from "@mui/material";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="site-footer">
      <Container maxWidth="lg">
        <p className="footer-line">Website made by Juho Heikkinen.</p>
        <p className="footer-line footer-muted">
          Anonymous analytics are collected for page visits and outbound link clicks.
        </p>
      </Container>
    </footer>
  );
};

export default FooterSection;
