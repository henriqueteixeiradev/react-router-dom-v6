import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { Layout } from "./layouts";
import { AppRoutes } from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Layout>
      <AppRoutes />
    </Layout>
  </BrowserRouter>
);
