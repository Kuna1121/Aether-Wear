import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import type { Users } from "../models";
import { snackbar } from "../services";
import {
  MyCart,
  NavMenuOptions,
  ProductLogo,
  ProfileMenu,
} from "./components/index";
import { me } from "./services";

export default function MainLayout() {
  const [user, setUser] = useState<Users | null>(null);

  useEffect(() => {
    const getMe = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        const { id } = JSON.parse(storedUser);
        const data = await me(id);
        setUser(data);
      } catch (error) {
        snackbar.error(error);
      }
    };
    getMe();
  }, []);
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
            <ProfileMenu user={user} />
          </div>
        </div>
      </nav>

      <main className="main-content-viewport">
        <Outlet />
      </main>
    </div>
  );
}
