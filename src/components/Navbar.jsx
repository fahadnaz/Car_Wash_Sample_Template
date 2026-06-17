import logoMain from "../assets/logo-main.svg";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <img src={logoMain} alt="AutoWash Pro logo" style={styles.brandLogo} />
      <div style={styles.links}>
        <a
          href="#services"
          style={styles.link}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Services
        </a>
        <a
          href="#pricing"
          style={styles.link}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Pricing
        </a>
        <a
          href="#faq"
          style={styles.link}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          FAQ
        </a>
        <a
          href="#contact"
          style={styles.link}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.12)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 24px",
    background: "linear-gradient(90deg, #0f172a 0%, #1e3a8a 100%)",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 18px rgba(15, 23, 42, 0.15)",
  },
  brandLogo: {
    width: "150px",
    height: "auto",
    display: "block",
  },
  links: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "0.95rem",
    padding: "10px 14px",
    borderRadius: "999px",
    transition: "background 0.3s ease, transform 0.3s ease, color 0.3s ease",
  },
};