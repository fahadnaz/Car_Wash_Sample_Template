import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      {/* MAIN ABOUT CONTENT */}
      <section style={styles.section}>
        <div className="container" style={styles.wrapper}>

          {/* TEXT */}
          <div style={styles.textBox}>
            <h2>Who We Are</h2>
            <p>
              AutoWash Pro is a modern car wash and detailing service dedicated
              to providing high-quality cleaning with fast and reliable service.
            </p>

            <p>
              We use eco-friendly products and advanced cleaning techniques to
              ensure your car looks brand new every time.
            </p>

            <h3>Our Mission</h3>
            <p>
              To deliver premium car care services that are affordable,
              convenient, and professional.
            </p>

            <h3>Why Choose Us?</h3>
            <ul>
              <li>✔ Fast and professional service</li>
              <li>✔ Eco-friendly cleaning products</li>
              <li>✔ Affordable pricing plans</li>
              <li>✔ Experienced staff</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div style={styles.imageBox}>
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e7f1d6f0b5d"
              alt="Car wash team"
              style={styles.image}
            />
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section style={styles.stats}>
        <div className="container" style={styles.statsGrid}>

          <div style={styles.card}>
            <h2>5,000+</h2>
            <p>Cars Washed</p>
          </div>

          <div style={styles.card}>
            <h2>3 Years</h2>
            <p>Experience</p>
          </div>

          <div style={styles.card}>
            <h2>100%</h2>
            <p>Customer Satisfaction</p>
          </div>

        </div>
      </section>

  
    </>
  );
}

const styles = {
  hero: {
    background: "#0076E0",
    color: "white",
    textAlign: "center",
    padding: "100px 20px",
  },

  section: {
    padding: "80px 20px",
    background: "#f7f9fc",
  },

  wrapper: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  textBox: {
    flex: 1,
    minWidth: "280px",
  },

  imageBox: {
    flex: 1,
    minWidth: "280px",
    textAlign: "center",
  },

  image: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
  },

  stats: {
    background: "#ffffff",
    padding: "60px 20px",
  },

  statsGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  card: {
    background: "#0076E0",
    color: "white",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200px",
  },
};