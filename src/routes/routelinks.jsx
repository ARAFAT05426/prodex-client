import { AiOutlineProduct } from "react-icons/ai";
import { FaUserShield, FaUsersLine } from "react-icons/fa6";
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
    icon: FaUsersLine,
    path: "/dashboard/users",
    title: "Users",
  },
  {
    icon: AiOutlineProduct,
    path: "/dashboard/products",
    title: "Products",
  },
  {
    icon: FaUserShield,
    path: "/dashboard/profile",
    title: "Profile",
  },
];
