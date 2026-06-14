import { Navigate } from "react-router-dom";
import { AUTH_ROUTES } from "../authentication/auth.routes";
import { HOME_ROUTES } from "../features/home/home.route";
import type { AppRoute } from "./route.interface.model";
import MainLayout from "../shared/layouts/main-layout";

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
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
];
