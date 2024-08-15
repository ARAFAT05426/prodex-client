import { FaUsers, FaUserShield } from "react-icons/fa6";
import { TfiBarChartAlt } from "react-icons/tfi";

export const routelinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

export const dashboardLinks = [
  {
    icon: TfiBarChartAlt,
    path: "/dashboard",
    title: "Statistics",
  },
  {
    icon: FaUsers,
    path: "/dashboard/users",
    title: "Users",
  },
  {
    icon: FaUserShield,
    path: "/dashboard/profile",
    title: "Profile",
  },
];
