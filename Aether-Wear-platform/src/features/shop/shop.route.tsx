import { lazy } from "react";
import type { AppRoute } from "../../routes/route.interface.model";

const Shop = lazy(() => import("./pages/shop"));

export const Shop_ROUTES: AppRoute[] = [
  {
    path: "shop",
    element: <Shop />,
  },
];
