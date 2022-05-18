import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-body">
      {[0, 1, 2, 3, 5].map((a: any) => (
        <div className="footer-section" key={a}>
          <div className="footer-section-title">Redes Sociales</div>
          <div className="footer-section-list">
            <div className="footer-section-item">
              <Instagram />
              Instagram
            </div>
            <div className="footer-section-item">
              <Facebook />
              Facebook
            </div>
            <div className="footer-section-item">
              <LinkedIn />
              Linkedin
            </div>
            <div className="footer-section-item">
              <YouTube />
              Youtube
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
