import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="logo">
        🏠 <span>JBS PG House</span>
      </div>

      <div
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >

        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>

        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

        <a href="#rooms" onClick={() => setMenuOpen(false)}>Rooms</a>
<a
  href="#food"
  onClick={(e) => {
    e.preventDefault();

    document.getElementById("food")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  }}
>
  Food Menu
</a>

        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

      </div>

      <a
        href="https://wa.me/919350207464"
        target="_blank"
        rel="noreferrer"
        className="nav-btn"
      >
        💬 WhatsApp
      </a>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >

        <span></span>
        <span></span>
        <span></span>

      </div>

    </nav>

  );

}

export default Navbar;