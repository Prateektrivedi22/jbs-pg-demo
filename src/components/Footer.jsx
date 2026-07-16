function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>JBS PG House</h2>

          <p>
            Premium Student Accommodation near
            <br />
            Galgotias University &
            <br />
            Noida International University.
          </p>
        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#food">Food Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-box">

          <h3>Facilities</h3>

          <p>✔ High-Speed WiFi</p>
          <p>✔ Home-style Food</p>
          <p>✔ CCTV Security</p>
          <p>✔ RO Drinking Water</p>
          <p>✔ Daily Housekeeping</p>

        </div>

        <div className="footer-box">

          <h3>Contact</h3>

          <p>📞 +91 9350207464</p>

          <p>📍 Greater Noida</p>

          <a
            href="https://wa.me/919350207464"
            target="_blank"
            rel="noreferrer"
            className="footer-btn"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 JBS PG House • All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;