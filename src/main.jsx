import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { routes } from "./routes/routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./hooks/providers/authProvider";
import DevelopmentNoticeProvider from "./hooks/providers/developmentNoticeProvider";
import DevlopmentNotice from "./componets/modals/devlopmentNotice/devlopmentNotice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DevelopmentNoticeProvider>
        <RouterProvider router={routes} />
        <DevlopmentNotice />
        <ToastContainer className={`text-xs`} position="top-center" />
      </DevelopmentNoticeProvider>
    </AuthProvider>
  </React.StrictMode>
);
