import { NavLink, useNavigate } from "react-router-dom";
import type { Users } from "../../models";
import { logout } from "../services";
import "./profile-menu.css";

export default function ProfileMenu({ user }: { user: Users }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const loggedOut = logout();

    if (loggedOut) {
      navigate("/login");
    }
  };

  return (
    <div className="nav-user-profile">
      <div className="user-avatar-circle">{user?.name?.charAt(0)}</div>

      <div className="user-dropdown-menu">
        <div className="user-dropdown-header">
          <span className="user-profile-name">{user?.name}</span>
          <span className="user-profile-email">{user?.email}</span>
        </div>

        <div className="dropdown-divider"></div>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `dropdown-item ${isActive ? "active" : ""}`
          }
        >
          My Profile
        </NavLink>

        <NavLink
          to="/order-history"
          className={({ isActive }) =>
            `dropdown-item ${isActive ? "active" : ""}`
          }
        >
          Orders History
        </NavLink>

        <div className="dropdown-item logout-item" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
}
