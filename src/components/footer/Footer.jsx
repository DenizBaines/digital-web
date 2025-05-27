import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <div className="footer-logo">
            <span>WHITE</span>
            <small>communications</small>
          </div>

          <div className="footer-locations">
            <div>
              <h4>MUNICH</h4>
              <p>Innsbrucker Ring 15,<br />81673 München<br />+49 89 360766 0</p>
            </div>
            <div>
              <h4>REP. OFFICE NEW YORK CITY</h4>
              <p>Spring Place, 6 St Johns Ln<br />NY 10013<br />+1 212 984 0689</p>
            </div>
            <div>
              <h4>REP. OFFICE SÃO PAULO</h4>
              <p>JK Iguatemi,<br />
                Av. Presidente Juscelino Kubitschek<br />
                2.041, 5º andar – Bloco B Vila Olímpia<br />
                São Paulo - SP, CEP 04543-011<br />
                +55 11 2844 8506
              </p>
            </div>
          </div>
        </div>

        <div className="footer-map">
          <iframe
            title="Munich Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.7147133698764!2d11.617759315931473!3d48.12796327922157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75ba63dd0b3f%3A0xb1f5147ef57ffb60!2sInnsbrucker%20Ring%2015%2C%2081673%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1659531510416!5m2!1sen!2sde"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <p>© 2025 WHITE Communications GmbH</p>
          <div className="social-icons">
            <Link to="/"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="/"><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link to="/"><i className="fa-brands fa-youtube"></i></Link>
            <Link to="/"><i className="fa-brands fa-facebook-f"></i></Link>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/career">Career ↗</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/imprint">Imprint</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
