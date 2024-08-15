import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import AuthProvider from "./hooks/providers/authProvider";
import DevelopmentNoticeProvider from "./hooks/providers/developmentNoticeProvider";
import DevlopmentNotice from "./componets/modals/devlopmentNotice/devlopmentNotice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DevelopmentNoticeProvider>
        <RouterProvider router={routes} />
        <DevlopmentNotice />
      </DevelopmentNoticeProvider>
    </AuthProvider>
  </React.StrictMode>
);
