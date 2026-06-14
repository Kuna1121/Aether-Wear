import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/login");
  };

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Collections", path: "/collections" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
  ];

  return (
    <div className="main-layout-container">
      {/* Luxury Glassmorphic Navigation Bar */}
      <nav className="luxury-navbar">
        <div className="navbar-inner">
          {/* Brand Logo & Monogram */}
          <div className="navbar-brand" onClick={() => navigate("/home")}>
            <div className="brand-logo-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="brand-icon"
              >
                <defs>
                  <linearGradient
                    id="navGold"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F5E3C3" />
                    <stop offset="50%" stopColor="#D6B98C" />
                    <stop offset="100%" stopColor="#9E8052" />
                  </linearGradient>
                </defs>
                <path
                  d="M256 110 L140 370 H195 L256 230 L317 370 H372 L256 110 Z"
                  fill="url(#navGold)"
                />
                <path d="M185 300 H327" stroke="#0D0D0D" strokeWidth="18" />
                <path
                  d="M202 300 H310"
                  stroke="url(#navGold)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="brand-text">AETHER WEAR</span>
          </div>

          {/* Center Navigation Links */}
          <div className="navbar-menu">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link-item ${isActive ? "active" : ""}`}
                >
                  {item.label}
                  <span className="nav-underline"></span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Utilities */}
          <div className="navbar-actions">
            {/* Elegant Shopping Cart with Glowing Badge */}
            <div
              className="nav-action-btn cart-btn"
              onClick={() => navigate("/cart")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="action-svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="cart-badge">0</span>
            </div>

            {/* Premium User Avatar & Custom Dropdown */}
            <div className="nav-user-profile">
              <div className="user-avatar-circle">'user name'</div>
              <div className="user-dropdown-menu">
                <div className="user-dropdown-header">
                  <span className="user-profile-name">'user name'</span>
                  <span className="user-profile-email">'user email'</span>
                </div>
                <div className="dropdown-divider"></div>
                <Link to="/profile" className="dropdown-item">
                  My Profile
                </Link>
                <Link to="/orders" className="dropdown-item">
                  Orders History
                </Link>
                <div
                  className="dropdown-item logout-item"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Page Render Area */}
      <main className="main-content-viewport">
        <Outlet />
      </main>
    </div>
  );
}
