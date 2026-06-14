import { lazy } from "react";
import type { AppRoute } from "../../routes/route.interface.model";

const Support = lazy(() => import("./pages/support"));

export const Support_ROUTES: AppRoute[] = [
  {
    path: "support",
    element: <Support />,
  },
];
