import { BrowserRouter } from "react-router-dom";
import RouteRender from "./routes/route-render";
import "./App.css";
import { APP_ROUTES } from "./routes/index";
import { App as AntdApp } from "antd";
import { AntdStaticHolder } from "./shared/services/snackbar.service";

export default function App() {
  return (
    <BrowserRouter>
      <AntdApp>
        <AntdStaticHolder />
        <RouteRender routes={APP_ROUTES} />
      </AntdApp>
    </BrowserRouter>
  );
}
