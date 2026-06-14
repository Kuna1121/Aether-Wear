import "../pages/about.css";

export default function AboutHero() {
  return (
    <div className="about-hero-container">
      <div className="about-hero-overlay"></div>
      <img
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
        alt="Aether Wear Story"
        className="about-hero-image"
      />
      <div className="about-hero-content">
        <h1>Our Story</h1>
        <p>
          As a child, I always dreamed of building something of my own something
          that reflected my vision and creativity. Years later, that dream
          became Aether Wear. Born from a desire to combine premium quality with
          everyday comfort, Aether Wear is more than clothing; it's a reminder
          that every great journey starts with a simple dream and the courage to
          pursue it.
        </p>
      </div>
    </div>
  );
}
