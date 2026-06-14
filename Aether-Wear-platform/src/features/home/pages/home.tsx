import { CategoryCards, HeroBanner } from "../components";
import { BANNERS, CATEGORIES } from "../configs";
import "./home.css";

export default function Home() {
  const categories = CATEGORIES;
  const banners = BANNERS;

  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <HeroBanner banners={banners} />
        <CategoryCards categories={categories} />
      </div>
    </div>
  );
}
