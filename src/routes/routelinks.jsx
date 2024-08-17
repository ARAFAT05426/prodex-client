import { FaUserShield } from "react-icons/fa6";
import { TfiBarChartAlt } from "react-icons/tfi";

export const routelinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/products",
    title: "Products",
  },
];

export const dashboardLinks = [
  {
    icon: TfiBarChartAlt,
    path: "/dashboard",
    title: "Statistics",
  },
  {
    icon: FaUserShield,
    path: "/dashboard/profile",
    title: "Profile",
  },
];
