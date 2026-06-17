import "../pages/home.css";

const trendingProducts = [
  {
    id: 1,
    name: "Oversized Hoodie",
    price: "$59",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: "$89",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
  },
  {
    id: 3,
    name: "Premium Sneakers",
    price: "$129",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    id: 4,
    name: "Essential T-Shirt",
    price: "$35",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
  },
];

export default function Trending() {
  return (
    <section className="trending-section">
      <div className="trending-header">
        <h2>Trending Now</h2>
        <p>Discover the hottest styles everyone is loving right now.</p>
      </div>

      <div className="trending-grid">
        {trendingProducts.map((product) => (
          <div key={product.id} className="trending-card">
            <img
              src={product.image}
              alt={product.name}
              className="trending-image"
            />

            <div className="trending-overlay">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>View Product</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
