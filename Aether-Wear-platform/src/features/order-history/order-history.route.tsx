import { lazy } from "react";
import type { AppRoute } from "../../routes/route.interface.model";

const OrderHistory = lazy(() => import("./pages/order-history"));

export const OrderHistory_ROUTES: AppRoute[] = [
  {
    path: "order-history",
    element: <OrderHistory />,
  },
];
