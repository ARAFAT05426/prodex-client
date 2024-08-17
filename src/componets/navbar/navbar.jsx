import "./navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { routelinks } from "../../routes/routelinks";
import ToggleBar from "../common/buttons/toggleBar/toggleBar";
import { FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const [isAct, setActive] = useState(false);

  const toggleMenu = () => setActive((prev) => !prev);

  return (
    <nav className="fixed top-0 inset-x-0 h-16 py-4 bg-white/50 backdrop-blur-xl z-50 shadow-md font-montserrat">
      {/* Large device links */}
      <div className="relative hidden md:flex items-center justify-between container mx-auto">
        <Link to={"/"} className="text-3xl font-extrabold">
          <img className="h-9" src="/logo.png" alt="" />
        </Link>
        <div className="relative flex items-center gap-3 font-semibold">
          {routelinks?.map((routelink, i) => (
            <NavLink
              key={i}
              to={routelink?.path}
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-500 font-black underline" : ""
                } text- routelink-lg hover:text-primary transition-colors duration-300`
              }
            >
              {routelink?.title}
            </NavLink>
          ))}
          <div className="underbar" />
        </div>
        <Link to={"/login"}>
          <FaSignInAlt className="text-3xl hover:text-blue-500" />
        </Link>
      </div>
      {/* Small device toggleBar */}
      <div className="flex md:hidden items-center justify-between px-5">
        <Link to={"/"} className="">
          <img className="h-9" src="/logo.png" alt="" />
        </Link>
        <ToggleBar onClick={toggleMenu} isActive={isAct} />
      </div>
      {/* Small device links */}
      <div
        className={`fixed inset-0 h-screen ${
          isAct === true ? "menu-opened" : "menu-closed"
        } bg-blue-100 flex flex-col  gap-5 font-semibold p-24 transition-all duration-700 ease-in-out`}
      >
        {routelinks.map((routelink, i) => (
          <NavLink
            key={i}
            to={routelink?.path}
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500 font-black underline" : ""
              } text-5xl hover:text-primary transition-colors duration-300 routelink-sm`
            }
            onClick={toggleMenu}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            {routelink?.title}
          </NavLink>
        ))}
        <Link to={"/login"}>
          <FaSignInAlt
            style={{ transitionDelay: `${routelinks?.length * 0.2}s` }}
            className="text-3xl hover:text-primary routelink-sm"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
