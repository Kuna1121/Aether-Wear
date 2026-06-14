import { useNavigate } from "react-router-dom";

export default function ProductLogo() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-brand" onClick={() => navigate("/home")}>
        <div className="brand-logo-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="brand-icon"
          >
            <defs>
              <linearGradient id="navBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
            </defs>
            <path
              d="M256 110 L140 370 H195 L256 230 L317 370 H372 L256 110 Z"
              fill="url(#navBlue)"
            />
            <path d="M185 300 H327" stroke="#0D0D0D" strokeWidth="18" />
            <path
              d="M202 300 H310"
              stroke="url(#navBlue)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="brand-text">AETHER WEAR</span>
      </div>
    </>
  );
}
