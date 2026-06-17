const services = [
  {
    title: "Exterior Wash",
    logo: "🚗",
    detail: "High-pressure rinse, foam wash, and shine finish.",
  },
  {
    title: "Interior Cleaning",
    logo: "🧼",
    detail: "Vacuuming, dashboard wipe-down, and odor removal.",
  },
  {
    title: "Full Detailing",
    logo: "✨",
    detail: "Complete polish, trim restoration, and deep clean.",
  },
  {
    title: "Engine Cleaning",
    logo: "⚙️",
    detail: "Degreasing and protection for a cleaner engine bay.",
  },
];

export default function Services() {
  return (
    <section id="services" style={styles.section}>
      <div className="container">
        <h2 style={styles.heading}>Our Services</h2>
        <div style={styles.grid}>
          {services.map((service) => (
            <div
              key={service.title}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(15, 23, 42, 0.12)";
                e.currentTarget.querySelector("span").style.transform = "scale(1.08)";
                e.currentTarget.querySelector("span").style.background = "#eef6ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 18px rgba(15, 23, 42, 0.08)";
                e.currentTarget.querySelector("span").style.transform = "scale(1)";
                e.currentTarget.querySelector("span").style.background = "#f5f7fb";
              }}
            >
              <div style={styles.logoWrap}>
                <span style={styles.logo}>{service.logo}</span>
              </div>
              <h3 style={styles.title}>{service.title}</h3>
              <p style={styles.detail}>{service.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    background: "linear-gradient(180deg, #f9fbff 0%, #eef6ff 100%)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "22px",
  },
  card: {
    background: "white",
    padding: "24px 18px",
    borderRadius: "16px",
    boxShadow: "0 8px 18px rgba(15, 23, 42, 0.08)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  logoWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "12px",
  },
  logo: {
    fontSize: "2rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    background: "#f5f7fb",
    transition: "transform 0.3s ease, background 0.3s ease",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "1rem",
    color: "#102447",
  },
  detail: {
    margin: 0,
    fontSize: "0.92rem",
    color: "#5b6474",
    lineHeight: "1.5",
  },
};