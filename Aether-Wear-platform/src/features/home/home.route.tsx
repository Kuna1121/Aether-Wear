import { lazy } from "react";
import type { AppRoute } from "../../routes/route.interface.model";

const Home = lazy(() => import("./pages/home"));

export const HOME_ROUTES: AppRoute[] = [
  {
    path: "home",
    element: <Home />,
  },
];
