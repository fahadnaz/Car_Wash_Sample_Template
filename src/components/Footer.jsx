import logoMain from "../assets/logo-main.svg";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.brandSection}>
          <img src={logoMain} alt="AutoWash Pro logo" style={styles.brandLogo} />
          <p style={styles.text}>
            Premium car care with expert detailing and spotless results.
          </p>
        </div>

        <div style={styles.linksSection}>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#pricing" style={styles.link}>Pricing</a>
          <a href="#faq" style={styles.link}>FAQ</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>

        <div style={styles.socialSection}>
          <a href="#" style={styles.socialLink} aria-label="Facebook">
            <span style={styles.socialIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M13.5 20v-8h2.7l.4-3h-3.1V3.2c0-.9.2-1.5 1.5-1.5H16V.1C15.4.1 14.4 0 13.2 0 10.8 0 9 1.6 9 4.5v2.5H6.3v3h2.7v8h4.5z"/>
              </svg>
            </span>
            <span>Facebook</span>
          </a>
          <a href="#" style={styles.socialLink} aria-label="Instagram">
            <span style={styles.socialIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zm5.75-4.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/>
              </svg>
            </span>
            <span>Instagram</span>
          </a>
          <a href="#" style={styles.socialLink} aria-label="Twitter">
            <span style={styles.socialIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M22 5.9c-.8.4-1.7.7-2.6.8a4.3 4.3 0 0 0 1.9-2.4 8.5 8.5 0 0 1-2.7 1.1 4.3 4.3 0 0 0-7.4 3.9A12.2 12.2 0 0 1 3.1 4.8a4.3 4.3 0 0 0 1.3 5.8 4.2 4.2 0 0 1-1.9-.5v.1a4.3 4.3 0 0 0 3.5 4.2 4.4 4.4 0 0 1-1.9.1 4.3 4.3 0 0 0 4 3 8.7 8.7 0 0 1-6.4 1.8A12.1 12.1 0 0 0 9.7 21c7.8 0 12.1-6.5 12.1-12.1 0-.2 0-.4-.1-.6A8.5 8.5 0 0 0 22 5.9z"/>
              </svg>
            </span>
            <span>Twitter</span>
          </a>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>© 2026 AutoWash Pro. All rights reserved. Made By Fahad Nazir</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "linear-gradient(90deg, #0f172a 0%, #1e3a8a 100%)",
    color: "#f8fafc",
    paddingTop: "50px",
    paddingLeft: "20px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr",
    gap: "30px",
    alignItems: "start",
    paddingBottom: "30px",
  },
  brandSection: {
    maxWidth: "350px",
  },
  brandLogo: {
    width: "180px",
    height: "auto",
    display: "block",
    marginBottom: "12px",
  },
  text: {
    color: "#cbd5e1",
    lineHeight: "1.6",
  },
  linksSection: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  socialSection: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    color: "#dbeafe",
    textDecoration: "none",
  },
  socialLink: {
    color: "#bfdbfe",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  socialIcon: {
    width: "36px",
    height: "36px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    color: "#ffffff",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
    padding: "15px 0",
  },
  bottomText: {
    margin: 0,
    color: "#cbd5e1",
    fontSize: "0.9rem",
  },
};