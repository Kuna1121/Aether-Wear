import { lazy } from "react";
import type { AppRoute } from "../../routes/route.interface.model";

const Profile = lazy(() => import("./pages/profile"));

export const Profile_ROUTES: AppRoute[] = [
  {
    path: "profile",
    element: <Profile />,
  },
];
