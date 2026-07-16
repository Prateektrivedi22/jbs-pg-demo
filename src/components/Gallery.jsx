import { useState, useEffect } from "react";

import singleRoom from "../assets/images/single-seater.jpeg";
import doubleRoom from "../assets/images/double-seater.jpeg";
import tripleRoom from "../assets/images/triple-seater.jpeg";

import singleVideo from "../assets/videos/singleseatertour.mp4";
import doubleVideo from "../assets/videos/doubleseatertour.mp4";
import tripleVideo from "../assets/videos/tripleseatertour.mp4";

function Gallery() {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        setSelectedVideo(null);
        setSelectedImage(null);
      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, []);

  const rooms = [

    {
      title: "Single Seater",
      desc: "Private room with maximum comfort.",
      image: singleRoom,
      video: singleVideo
    },

    {
      title: "Double Seater",
      desc: "Perfect balance of comfort and affordability.",
      image: doubleRoom,
      video: doubleVideo
    },

    {
      title: "Triple Seater",
      desc: "Budget-friendly shared accommodation.",
      image: tripleRoom,
      video: tripleVideo
    }

  ];

  return (

    <section className="gallery" id="gallery">

      <div className="section-title">

        <span>ROOM GALLERY</span>

        <h2>Explore Our Accommodation</h2>

        <p>
          View our rooms through photos and virtual room tours.
        </p>

      </div>

      <div className="gallery-grid">

        {rooms.map((room) => (

          <div className="gallery-card" key={room.title}>

            <img src={room.image} alt={room.title} />

            <div className="gallery-content">

              <h3>{room.title}</h3>

              <p>{room.desc}</p>

              <div className="gallery-buttons">

                <button
                  className="gallery-btn"
                  onClick={() => setSelectedImage(room.image)}
                >
                  📸 View Full Image
                </button>

                <button
                  className="gallery-btn video-btn"
                  onClick={() => setSelectedVideo(room.video)}
                >
                  🎥 Watch Room Tour
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* ================= IMAGE LIGHTBOX ================= */}

      {selectedImage && (

        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="image-container"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Room Preview"
              className="popup-image"
            />

          </div>

        </div>

      )}

      {/* ================= VIDEO POPUP ================= */}

      {selectedVideo && (

        <div
          className="video-modal"
          onClick={() => setSelectedVideo(null)}
        >

          <div
            className="video-container"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>

            <video
              controls
              autoPlay
              className="popup-video"
            >

              <source
                src={selectedVideo}
                type="video/mp4"
              />

            </video>

          </div>

        </div>

      )}

    </section>

  );

}

export default Gallery;