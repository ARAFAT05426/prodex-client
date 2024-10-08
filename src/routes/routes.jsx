import Home from "../pages/home/home";
import Root from "../layouts/root/root";
import Login from "../pages/login/login";
import PrivateRoute from "./privateRoute";
import Signup from "../pages/signup/signup";
import Products from "../pages/products/products";
import ErrorPage from "../pages/errorPage/errorPage";
import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/dashboard/profile/profile";
import DashboardPanel from "../layouts/dashboard/dashboardPanel";
import Statistics from "../pages/dashboard/statistics/statistics";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardPanel />
      </PrivateRoute>
    ),

    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
