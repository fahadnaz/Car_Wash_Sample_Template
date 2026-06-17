export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div className="container" style={styles.wrapper}>
        <div style={styles.info}>
          <h2 style={styles.heading}>Contact Us</h2>
          <p style={styles.text}>
            Ready to give your car the shine it deserves? Reach out today.
          </p>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📍</span>
            <span>Sultan town , Lahore</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📞</span>
            <span>+92 305 4560799</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>✉️</span>
            <span>fahadn170@gmail.com</span>
          </div>
        </div>

        <form style={styles.form}>
          <input style={styles.input} placeholder="Name" />
          <input style={styles.input} placeholder="Phone" />
          <textarea style={styles.textarea} placeholder="Message"></textarea>
          <button style={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 0",
    background: "linear-gradient(180deg, #f9fbff 0%, #eef6ff 100%)",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    alignItems: "center",
  },
  info: {
    padding: "30px",
  },
  heading: {
    marginBottom: "10px",
    color: "#1f3b64",
  },
  text: {
    color: "#5f6f88",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
    color: "#334155",
  },
  icon: {
    fontSize: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "500px",
    width: "100%",
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
  },
  input: {
    padding: "12px 14px",
    border: "1px solid #dbe3f0",
    borderRadius: "10px",
    outline: "none",
    fontSize: "1rem",
  },
  textarea: {
    padding: "12px 14px",
    minHeight: "130px",
    border: "1px solid #dbe3f0",
    borderRadius: "10px",
    resize: "vertical",
    outline: "none",
    fontSize: "1rem",
  },
  button: {
    padding: "12px 18px",
    background: "#1f6feb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.3s ease",
  },
};