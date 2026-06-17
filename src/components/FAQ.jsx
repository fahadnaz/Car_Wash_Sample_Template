const faqs = [
  {
    question: "How long does a wash take?",
    answer: "Most washes take around 20 to 40 minutes depending on the service selected.",
  },
  {
    question: "Do you use eco-friendly products?",
    answer: "Yes, we use safe and eco-conscious products that are gentle on your car and the environment.",
  },
  {
    question: "Can I book an appointment online?",
    answer: "Absolutely. You can schedule your visit quickly through our contact form or by phone.",
  },
  {
    question: "Do you offer detailing for luxury cars?",
    answer: "Yes, we provide premium detailing services tailored for luxury and high-end vehicles.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" style={styles.section}>
      <div className="container">
        <h2 style={styles.heading}>Frequently Asked Questions</h2>
        <div style={styles.list}>
          {faqs.map((item, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.question}>{item.question}</h3>
              <p style={styles.answer}>{item.answer}</p>
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
    background: "#f9fbff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  list: {
    display: "grid",
    gap: "16px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "18px 20px",
    boxShadow: "0 6px 16px rgba(15, 23, 42, 0.06)",
    borderLeft: "4px solid #1f6feb",
  },
  question: {
    margin: "0 0 8px",
    color: "#102447",
  },
  answer: {
    margin: 0,
    color: "#5b6474",
    lineHeight: "1.6",
  },
};