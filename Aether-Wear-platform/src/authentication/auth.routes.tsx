import { lazy } from "react";
import type { AppRoute } from "../routes/route.interface.model";

const LoginPage = lazy(() => import("./pages/login"));
const SignupPage = lazy(() => import("./pages/signup"));

export const AUTH_ROUTES: AppRoute[] = [
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
];
