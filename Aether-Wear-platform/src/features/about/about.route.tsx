import { lazy } from "react";
import type { AppRoute } from "../../routes/route.interface.model";

const About = lazy(() => import("./pages/about"));

export const ABOUT_ROUTES: AppRoute[] = [
  {
    path: "about",
    element: <About />,
  },
];
