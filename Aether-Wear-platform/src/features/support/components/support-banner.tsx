import { BannerConfig } from "../config/support-banner.config";
import "./support-banner.css";

export function SupportBanner() {
  return (
    <div className="support-banner-section">
      <div className="support-banner-container">
        {BannerConfig.map((item) => (
          <div key={item.id} className="support-banner-item">
            <div className="banner-icon">{item.icon}</div>
            <div className="banner-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
