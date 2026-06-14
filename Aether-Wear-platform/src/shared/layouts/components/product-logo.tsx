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
              d="M 246 80 C 106 120 66 240 116 350 L 166 300 V 260 H 206 V 360 L 246 400 V 80 Z M 166 220 C 166 180 186 140 206 120 V 220 H 166 Z"
              fill="url(#navBlue)"
            />
            <path
              d="M 266 80 V 400 L 306 360 V 230 L 331 180 L 356 230 V 300 L 396 350 C 446 240 406 120 266 80 Z"
              fill="url(#navBlue)"
            />
          </svg>
        </div>
        <span className="brand-text">AETHER WEAR</span>
      </div>
    </>
  );
}
