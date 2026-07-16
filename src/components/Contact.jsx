function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <h2>Contact Us</h2>
        <p>Book your room today and visit JBS PG House.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+91 9350207464</p>
          </div>

          <div className="contact-card">
            <h3>💬 WhatsApp</h3>
            <p>Available 24×7</p>
          </div>

          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>
             JBS PG House
Supertech Upcountry, S6-35,
Near Galgotias University,
Sector 17A,
Greater Noida,
Uttar Pradesh – 201310
            </p>
          </div>

          <a
            href="https://wa.me/919350207464"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            Book Your Visit
          </a>

        </div>

        <div className="contact-map">

          <iframe
            title="JBS PG House"
            src="https://www.google.com/maps?q=JBS+PG+House+Supertech+Upcountry+S6-35+Sector+17A+Greater+Noida&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Contact;