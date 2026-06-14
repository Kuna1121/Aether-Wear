import { Link } from "react-router-dom";
import "../pages/home.css";

export default function SupportMessage() {
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
    </div>
  );
}
