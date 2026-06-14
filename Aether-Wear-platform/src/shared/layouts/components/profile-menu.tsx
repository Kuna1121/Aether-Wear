import { Link, useNavigate } from "react-router-dom";
import type { Users } from "../../models";
import { logout } from "../services";

export default function ProfileMenu({ user }: { user: Users }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    const logedOut = logout();
    if (logedOut) {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="nav-user-profile">
        <div className="user-avatar-circle">{user?.name.charAt(0)}</div>
        <div className="user-dropdown-menu">
          <div className="user-dropdown-header">
            <span className="user-profile-name">{user?.name}</span>
            <span className="user-profile-email">{user?.email}</span>
          </div>
          <div className="dropdown-divider"></div>
          <Link to="/profile" className="dropdown-item">
            My Profile
          </Link>
          <Link to="/order-history" className="dropdown-item">
            Orders History
          </Link>
          <div className="dropdown-item logout-item" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    </>
  );
}
