import React from 'react';

const Terms = () => {
  const styles = {
    termsContainer: {
      minHeight: '100vh',
      background: '#000',
      padding: '2rem 1rem',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    termsContent: {
      maxWidth: '800px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      overflow: 'hidden'
    },
    termsHeader: {
      background: 'linear-gradient(135deg, #4a6cf7 0%, #667eea 100%)',
      color: 'white',
      padding: '3rem 2rem 2rem',
      textAlign: 'center',
      position: 'relative'
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      margin: '0',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    },
    lastUpdated: {
      fontSize: '0.9rem',
      opacity: '0.9',
      marginTop: '0.5rem'
    },
    termsBody: {
      padding: '2rem'
    },
    termsSection: {
      marginBottom: '2.5rem'
    },
    sectionTitle: {
      color: '#4a6cf7',
      fontSize: '1.4rem',
      fontWeight: '600',
      marginBottom: '1rem',
      paddingBottom: '0.5rem',
      borderBottom: '2px solid #e8f0ff',
      position: 'relative'
    },
    sectionText: {
      color: '#4a5568',
      lineHeight: '1.7',
      marginBottom: '1rem',
      textAlign: 'justify'
    },
    sectionList: {
      color: '#4a5568',
      lineHeight: '1.7',
      margin: '1rem 0',
      paddingLeft: '1.5rem'
    },
    listItem: {
      marginBottom: '0.5rem'
    },
    contactInfo: {
      background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
      padding: '1.5rem',
      borderRadius: '12px',
      borderLeft: '4px solid #4a6cf7',
      marginTop: '1rem'
    },
    contactText: {
      margin: '0.25rem 0',
      color: '#2d3748',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.termsContainer}>
      <div style={styles.termsContent}>
        <header style={styles.termsHeader}>
          <h1 style={styles.headerTitle}>Terms & Conditions</h1>
          <p style={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div style={styles.termsBody}>
          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <p style={styles.sectionText}>
              Welcome to Blue Sage. By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>2. Definitions</h2>
            <p style={styles.sectionText}>
              For the purposes of these Terms & Conditions:
            </p>
            <ul style={styles.sectionList}>
              <li style={styles.listItem}><strong>"Company"</strong> (referred to as "we", "us", or "our") refers to Blue Sage.</li>
              <li style={styles.listItem}><strong>"Service"</strong> refers to the website operated by Blue Sage.</li>
              <li style={styles.listItem}><strong>"You"</strong> refers to the individual accessing or using the service.</li>
            </ul>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>3. Use License</h2>
            <p style={styles.sectionText}>
              Permission is granted to temporarily download one copy of the materials on Blue Sage's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul style={styles.sectionList}>
              <li style={styles.listItem}>modify or copy the materials</li>
              <li style={styles.listItem}>use the materials for any commercial purpose or for any public display</li>
              <li style={styles.listItem}>attempt to reverse engineer any software contained on the website</li>
              <li style={styles.listItem}>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            <p style={styles.sectionText}>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.
            </p>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>4. User Accounts</h2>
            <p style={styles.sectionText}>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for any activities that occur under your account.
            </p>
            <p style={styles.sectionText}>
              You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
            </p>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>5. Prohibited Uses</h2>
            <p style={styles.sectionText}>
              You may not use our service:
            </p>
            <ul style={styles.sectionList}>
              <li style={styles.listItem}>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li style={styles.listItem}>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li style={styles.listItem}>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li style={styles.listItem}>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li style={styles.listItem}>To submit false or misleading information</li>
              <li style={styles.listItem}>To upload or transmit viruses or any other type of malicious code</li>
            </ul>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>6. Content</h2>
            <p style={styles.sectionText}>
              Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.
            </p>
            <p style={styles.sectionText}>
              By posting content to the service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.
            </p>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>7. Privacy Policy</h2>
            <p style={styles.sectionText}>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
            </p>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>8. Termination</h2>
            <p style={styles.sectionText}>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p style={styles.sectionText}>
              Upon termination, your right to use the service will cease immediately. If you wish to terminate your account, you may simply discontinue using the service.
            </p>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>9. Disclaimer</h2>
            <p style={styles.sectionText}>
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
            </p>
            <ul style={styles.sectionList}>
              <li style={styles.listItem}>excludes all representations and warranties relating to this website and its contents</li>
              <li style={styles.listItem}>excludes all liability for damages arising out of or in connection with your use of this website</li>
            </ul>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>10. Limitation of Liability</h2>
            <p style={styles.sectionText}>
              In no case shall Blue Sage, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, punitive, special, or consequential damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>11. Governing Law</h2>
            <p style={styles.sectionText}>
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which Blue Sage operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>12. Changes to Terms</h2>
            <p style={styles.sectionText}>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section style={styles.termsSection}>
            <h2 style={styles.sectionTitle}>13. Contact Information</h2>
            <p style={styles.sectionText}>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div style={styles.contactInfo}>
              <p style={styles.contactText}>Blue Sage</p>
              <p style={styles.contactText}>Email: legal@bluesage.com</p>
              <p style={styles.contactText}>Address: [Your Business Address]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;