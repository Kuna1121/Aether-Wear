import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CommonDialog } from "../../dialog";
import type { Users } from "../../models";
import { logout } from "../services";
import "./profile-menu.css";

export default function ProfileMenu({ user }: { user: Users }) {
  const navigate = useNavigate();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsLogoutDialogOpen(true);
  };

  const handleConfirmLogout = () => {
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

        <div className="dropdown-item logout-item" onClick={handleLogoutClick}>
          Logout
        </div>
      </div>

      <CommonDialog
        isOpen={isLogoutDialogOpen}
        onClose={() => setIsLogoutDialogOpen(false)}
        heading="User Logout"
        description="Are you sure you want to log out of your account?"
        primaryButtonText="Logout"
        secondaryButtonText="Cancel"
        onPrimaryClick={handleConfirmLogout}
      />
    </div>
  );
}
