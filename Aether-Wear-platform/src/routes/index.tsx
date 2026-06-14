import { Navigate } from "react-router-dom";
import { AUTH_ROUTES } from "../authentication/auth.routes";
import { ABOUT_ROUTES } from "../features/about/about.route";
import { HOME_ROUTES } from "../features/home/home.route";
import { Shop_ROUTES } from "../features/shop/shop.route";
import { Support_ROUTES } from "../features/support/support.route";
import MainLayout from "../shared/layouts/main-layout";
import type { AppRoute } from "./route.interface.model";
import { Collection_ROUTES } from "../features/collections/collections.route";
import { Profile_ROUTES } from "../features/profile/profile.routes";

export const APP_ROUTES: AppRoute[] = [
  ...AUTH_ROUTES,
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/home" replace />,
      },
      ...HOME_ROUTES,
      ...ABOUT_ROUTES,
      ...Support_ROUTES,
      ...Shop_ROUTES,
      ...Collection_ROUTES,
      ...Profile_ROUTES,
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];
