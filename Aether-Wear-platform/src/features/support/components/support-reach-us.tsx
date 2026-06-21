import { ReachUsConfig } from "../config/support-reach-us.config";
import "./support-reach-us.css";

export function SupportReachUs() {
  return (
    <div className="support-reach-us-section">
      <h2>Other Ways to Reach Us</h2>
      <div className="reach-us-cards">
        {ReachUsConfig.map((item) => (
          <div key={item.id} className="reach-us-card">
            <div className="reach-us-icon">{item.icon}</div>
            <div className="reach-us-content">
              <h3>{item.title}</h3>
              <div className="reach-us-link">{item.link}</div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
