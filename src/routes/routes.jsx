import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact/contact";
import Signup from "../pages/signup/signup";
import About from "../pages/about/about";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Root from "../layouts/root/root";
import DashboardPanel from "../layouts/dashboard/dashboardPanel";
import Statistics from "../pages/dashboard/statistics/statistics";
import Users from "../pages/dashboard/users/users";
import Profile from "../pages/dashboard/profile/profile";
import PrivateRoute from "./privateRoute";
import ErrorPage from "../pages/errorPage/errorPage";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
        path: "users",
        element: <Users />,
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
