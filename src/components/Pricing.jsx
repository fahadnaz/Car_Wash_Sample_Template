const plans = [
  {
    name: "Basic",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=500&q=80",
    details: "Quick exterior wash and tire shine.",
    features: ["Exterior rinse", "Soap wash", "Tire shine"],
  },
  {
    name: "Standard",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=500&q=80",
    details: "Interior clean plus premium exterior finish.",
    features: ["Interior vacuum", "Dashboard wipe", "Wax finish"],
  },
  {
    name: "Premium",
    price: "$50",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=500&q=80",
    details: "Full detailing service for a showroom look.",
    features: ["Full detailing", "Leather care", "Engine shine"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={styles.section}>
      <div className="container">
        <h2 style={styles.heading}>Pricing Plans</h2>
        <div style={styles.row}>
          {plans.map((plan, i) => (
            <div
              key={i}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 18px 35px rgba(15, 23, 42, 0.16)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(15, 23, 42, 0.08)";
              }}
            >
              <img src={plan.image} alt={plan.name} style={styles.image} />
              <h3 style={styles.cardTitle}>{plan.name}</h3>
              <p style={styles.details}>{plan.details}</p>
              <h1 style={styles.price}>{plan.price}</h1>
              <ul style={styles.features}>
                {plan.features.map((feature, index) => (
                  <li key={index} style={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#f8fbff",
    padding: "80px 0",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  row: {
    display: "flex",
    gap: "24px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    background: "white",
    padding: "18px",
    borderRadius: "16px",
    textAlign: "left",
    width: "260px",
    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  image: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    borderRadius: "12px",
  },
  cardTitle: {
    margin: "14px 0 8px",
    fontSize: "1.2rem",
  },
  details: {
    color: "#5b6474",
    fontSize: "0.95rem",
    lineHeight: "1.5",
    marginBottom: "10px",
  },
  price: {
    margin: "0 0 10px",
    color: "#1f6feb",
  },
  features: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  featureItem: {
    padding: "6px 0",
    color: "#334155",
    borderTop: "1px solid #eef2f7",
  },
};