import { Link } from "react-router-dom";
import "../pages/home.css";
import { ChooseUs } from "../config";

export default function SupportMessage() {
  const features = ChooseUs;

  return (
    <div className="support-message-container">
      <p>
        We hope you're finding pieces you love. If you need assistance finding
        the perfect fit or have any questions at all, our dedicated{" "}
        <Link to="/support" className="support-link">
          Support Team
        </Link>{" "}
        is always here to help.
      </p>
      <div className="features-section">
        <h2 className="features-heading">Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
