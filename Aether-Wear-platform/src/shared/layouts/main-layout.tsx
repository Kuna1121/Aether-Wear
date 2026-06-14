import { Outlet } from "react-router-dom";
import {
  MyCart,
  NavMenuOptions,
  ProductLogo,
  ProfileMenu,
} from "./components/index";

export default function MainLayout() {
  return (
    <div className="main-layout-container">
      <nav className="luxury-navbar">
        <div className="navbar-inner">
          <ProductLogo />

          <div className="navbar-menu">
            <NavMenuOptions />
          </div>

          <div className="navbar-actions">
            <MyCart />
            <ProfileMenu />
          </div>
        </div>
      </nav>

      <main className="main-content-viewport">
        <Outlet />
      </main>
    </div>
  );
}
