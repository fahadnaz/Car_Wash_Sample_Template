
import bgImage from "../assets/images.jpg";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div>
      <div className="container" style={styles.content}>
        <p style={styles.badge}>Premium Car Care</p>
        <h1 style={styles.title}>Premium Car Wash & Detailing Service</h1>
        <p style={styles.subtitle}>
          Fast • Reliable • Affordable car cleaning near you
        </p>
        <div style={styles.buttonRow}>
          <button style={styles.btnPrimary}>Book Now</button>
          <button style={styles.btnSecondary}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "140px 20px",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.45))",
  },
  content: {
    position: "relative",
    zIndex: 1,
    maxWidth: "700px",
    margin: "0 auto",
  },
  badge: {
    display: "inline-block",
    background: "rgba(255, 204, 61, 0.18)",
    color: "#ffd95d",
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "0.9rem",
    letterSpacing: "1px",
    marginBottom: "12px",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2.2rem, 4vw, 4rem)",
    lineHeight: 1.2,
  },
  subtitle: {
    marginTop: "14px",
    fontSize: "1rem",
    color: "#eef2ff",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "28px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    padding: "14px 28px",
    background: "#ffcc3d",
    color: "#1f2937",
    border: "none",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "700",
    boxShadow: "0 8px 18px rgba(255, 204, 61, 0.35)",
  },
  btnSecondary: {
    padding: "14px 28px",
    background: "transparent",
    color: "white",
    border: "1px solid white",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "700",
  },
};