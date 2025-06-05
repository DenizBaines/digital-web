import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <div className="footer-logo">
              <span>BLUE SAGE</span>
              <small>communications</small>
            </div>

            <div className="footer-locations">
              <div className="location-card">
                <h4>MUNICH</h4>
                <p>
                  Innsbrucker Ring 15<br />
                  81673 München<br />
                  <strong>+49 89 360766 0</strong>
                </p>
              </div>
              
              <div className="location-card">
                <h4>REP. OFFICE NYC</h4>
                <p>
                  Spring Place<br />
                  6 St Johns Lane<br />
                  NY 10013<br />
                  <strong>+1 212 984 0689</strong>
                </p>
              </div>
              
              <div className="location-card">
                <h4>REP. OFFICE SÃO PAULO</h4>
                <p>
                  JK Iguatemi<br />
                  Av. Presidente Juscelino Kubitschek<br />
                  2.041, 5º andar – Bloco B<br />
                  Vila Olímpia, São Paulo - SP<br />
                  CEP 04543-011<br />
                  <strong>+55 11 2844 8506</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="footer-map">
            <iframe
              title="Munich Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.7147133698764!2d11.617759315931473!3d48.12796327922157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75ba63dd0b3f%3A0xb1f5147ef57ffb60!2sInnsbrucker%20Ring%2015%2C%2081673%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1659531510416!5m2!1sen!2sde"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-left">
            <p>© 2025 BLUE SAGE. All rights reserved.</p>
            <div className="social-icons">
              <Link to="https://www.instagram.com/bluesage.media/" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </Link>
              <Link to="/" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in" />
              </Link>
              <Link to="/" aria-label="YouTube">
                <i className="fa-brands fa-youtube" />
              </Link>
              <Link to="/" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f" />
              </Link>
              <Link to="/" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
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
      </div>
    </footer>
  );
};

export default Footer;