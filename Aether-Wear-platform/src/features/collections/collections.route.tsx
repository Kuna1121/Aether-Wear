import { lazy } from "react";
import type { AppRoute } from "../../routes/route.interface.model";

const Collection = lazy(() => import("./pages/collection"));

export const Collection_ROUTES: AppRoute[] = [
  {
    path: "collections",
    element: <Collection />,
  },
];
