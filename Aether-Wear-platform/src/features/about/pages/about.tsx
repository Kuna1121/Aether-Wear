import { AboutHero, BrandValues, TeamSection } from "../components";
import { BRAND_VALUES, TEAM_MEMBERS } from "../configs";
import "./about.css";

export default function AboutPage() {
  const values = BRAND_VALUES;
  const team = TEAM_MEMBERS;

  return (
    <div className="about-page-container">
      <div className="about-page-content">
        <AboutHero />
        <BrandValues values={values} />
        <TeamSection team={team} />
      </div>
    </div>
  );
}
