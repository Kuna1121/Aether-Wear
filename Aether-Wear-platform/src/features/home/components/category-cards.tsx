import "../pages/home.css";

export default function CategoryCards({ categories }) {
  return (
    <div className="category-cards-container">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <div className="category-card-bg">
            <img src={category.image} alt={category.title} loading="lazy" />
            <div className="category-overlay"></div>
          </div>
          <div className="category-card-content">
            <h3>{category.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
