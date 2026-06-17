import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/home.css";

export default function HeroBanner({ banners }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-banner-container">
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="hero-slide">
            <div className="hero-slide-overlay"></div>
            <img
              src={banner.image}
              alt={banner.title}
              className="hero-slide-image"
            />
            <div className="hero-slide-content">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
              <Link to="/collections" className="hero-shop-btn">
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="hero-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
