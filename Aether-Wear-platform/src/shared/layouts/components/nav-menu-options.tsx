import { Link, useLocation } from "react-router-dom";

export default function NavMenuOptions() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Collections", path: "/collections" },
    { label: "Shop", path: "/shop" },
    { label: "About", path: "/about" },
    { label: "Support", path: "/support" },
  ];

  return (
    <>
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
    </>
  );
}
