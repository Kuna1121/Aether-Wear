import { ArrowRightOutlined } from "@ant-design/icons";
import { Supportpconfig } from "../config";

export default function SupportCards() {
  const supportCards = Supportpconfig;
  return (
    <>
      <div className="support-cards-container">
        {supportCards.map((value) => (
          <div key={value.id} className="support-help-card">
            <div className="support-help-card-bg">
              <span className="feature-icon">{value.icon}</span>
              <div className="support-help-card-overlay"></div>
            </div>
            <div className="support-help-card-content">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <div className="support-help-card-arrow">
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
