import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-container">
          <div className="terms-hero-content">
            <h1 className="terms-hero-title">TERMS & CONDITIONS</h1>
            <div className="terms-title-divider"></div>
            <p className="terms-hero-subtitle">
              Please read these terms and conditions carefully before using our service. 
              Your continued use of our website constitutes acceptance of these terms.
            </p>
            <div className="terms-last-updated">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="terms-content-section">
        <div className="terms-content-container">
          
          <div className="terms-section">
            <h2 className="terms-section-title">1. Acceptance of Terms</h2>
            <p className="terms-section-text">
              Welcome to Blue Sage. By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">2. Definitions</h2>
            <p className="terms-section-text">
              For the purposes of these Terms & Conditions:
            </p>
            <ul className="terms-section-list">
              <li className="terms-list-item">
                <span><strong>"Company"</strong> (referred to as "we", "us", or "our") refers to Blue Sage.</span>
              </li>
              <li className="terms-list-item">
                <span><strong>"Service"</strong> refers to the website operated by Blue Sage.</span>
              </li>
              <li className="terms-list-item">
                <span><strong>"You"</strong> refers to the individual accessing or using the service.</span>
              </li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">3. Use License</h2>
            <p className="terms-section-text">
              Permission is granted to temporarily download one copy of the materials on Blue Sage's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="terms-section-list">
              <li className="terms-list-item">
                <span>modify or copy the materials</span>
              </li>
              <li className="terms-list-item">
                <span>use the materials for any commercial purpose or for any public display</span>
              </li>
              <li className="terms-list-item">
                <span>attempt to reverse engineer any software contained on the website</span>
              </li>
              <li className="terms-list-item">
                <span>remove any copyright or other proprietary notations from the materials</span>
              </li>
            </ul>
            <p className="terms-section-text">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">4. User Accounts</h2>
            <p className="terms-section-text">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for any activities that occur under your account.
            </p>
            <p className="terms-section-text">
              You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">5. Prohibited Uses</h2>
            <p className="terms-section-text">
              You may not use our service:
            </p>
            <ul className="terms-section-list">
              <li className="terms-list-item">
                <span>For any unlawful purpose or to solicit others to perform unlawful acts</span>
              </li>
              <li className="terms-list-item">
                <span>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</span>
              </li>
              <li className="terms-list-item">
                <span>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</span>
              </li>
              <li className="terms-list-item">
                <span>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</span>
              </li>
              <li className="terms-list-item">
                <span>To submit false or misleading information</span>
              </li>
              <li className="terms-list-item">
                <span>To upload or transmit viruses or any other type of malicious code</span>
              </li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">6. Content</h2>
            <p className="terms-section-text">
              Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.
            </p>
            <p className="terms-section-text">
              By posting content to the service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">7. Privacy Policy</h2>
            <p className="terms-section-text">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">8. Termination</h2>
            <p className="terms-section-text">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="terms-section-text">
              Upon termination, your right to use the service will cease immediately. If you wish to terminate your account, you may simply discontinue using the service.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">9. Disclaimer</h2>
            <p className="terms-section-text">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
            </p>
            <ul className="terms-section-list">
              <li className="terms-list-item">
                <span>excludes all representations and warranties relating to this website and its contents</span>
              </li>
              <li className="terms-list-item">
                <span>excludes all liability for damages arising out of or in connection with your use of this website</span>
              </li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">10. Limitation of Liability</h2>
            <p className="terms-section-text">
              In no case shall Blue Sage, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, punitive, special, or consequential damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">11. Governing Law</h2>
            <p className="terms-section-text">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which Blue Sage operates, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">12. Changes to Terms</h2>
            <p className="terms-section-text">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">13. Contact Information</h2>
            <p className="terms-section-text">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="terms-contact-card">
              <h3 className="terms-contact-title">Get in Touch</h3>
              <div className="terms-contact-info">
                <p className="terms-contact-item">
                  <span className="terms-contact-label">Company:</span>
                  <span>Blue Sage</span>
                </p>
                <p className="terms-contact-item">
                  <span className="terms-contact-label">Email:</span>
                  <span>legal@bluesage.com</span>
                </p>
                <p className="terms-contact-item">
                  <span className="terms-contact-label">Address:</span>
                  <span>[Your Business Address]</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Terms;