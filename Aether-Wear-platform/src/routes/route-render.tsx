import { Routes, Route } from "react-router-dom";
import type { AppRoute } from "./route.interface.model";

interface RouteRenderProps {
  routes: AppRoute[];
}

export default function RouteRender({ routes }: RouteRenderProps) {
  const renderRoutes = (routeList: AppRoute[]) => {
    return routeList.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return <Routes>{renderRoutes(routes)}</Routes>;
}
