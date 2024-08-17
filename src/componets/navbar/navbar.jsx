import "./navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { routelinks } from "../../routes/routelinks";
import ToggleBar from "../common/buttons/toggleBar/toggleBar";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import useAuth from "../../hooks/providers/useAuth";

const Navbar = () => {
  const [isAct, setActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => setActive((prev) => !prev);
  const { user, logout } = useAuth();

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <nav className="fixed top-0 inset-x-0 h-16 py-4 bg-white/50 backdrop-blur-xl z-50 shadow-md font-montserrat">
      {/* Large device links */}
      <div className="relative hidden md:flex items-center justify-between container mx-auto">
        <Link to={"/"} className="text-3xl font-extrabold">
          <img className="h-9" src="/logo.png" alt="Logo" />
        </Link>
        <div className="relative flex items-center gap-3 font-semibold">
          {routelinks.map((routelink, i) => (
            <NavLink
              key={i}
              to={routelink.path}
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-500 font-black underline" : ""
                } text-lg hover:text-primary transition-colors duration-300`
              }
            >
              {routelink.title}
            </NavLink>
          ))}
          <div className="underbar" />
        </div>
        {user ? (
          <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/dashboard">
              <img
                className="h-10 border-2 border-blue-500 rounded-full"
                src={user.photoURL}
                alt="User"
              />
            </Link>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-40 md:w-48">
                <Link
                  to="/dashboard"
                  className="block px-3 py-1 text-gray-800 hover:bg-gray-100 text-center text-sm"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="block px-3 py-1 text-gray-800 hover:bg-gray-100 w-full text-center text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <FaSignInAlt className="text-3xl hover:text-blue-500" />
          </Link>
        )}
      </div>
      {/* Small device toggleBar */}
      <div className="flex md:hidden items-center justify-between px-5">
        <Link to={"/"}>
          <img className="h-9" src="/logo.png" alt="Logo" />
        </Link>
        <ToggleBar onClick={toggleMenu} isActive={isAct} />
      </div>
      {/* Small device links */}
      <div
        className={`fixed inset-0 h-screen ${
          isAct ? "menu-opened" : "menu-closed"
        } bg-blue-100 flex flex-col gap-5 font-semibold p-6 md:p-24 transition-all duration-700 ease-in-out`}
      >
        {routelinks.map((routelink, i) => (
          <NavLink
            key={i}
            to={routelink.path}
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500 font-black underline" : ""
              } text-5xl hover:text-primary transition-colors duration-300`
            }
            onClick={toggleMenu}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            {routelink.title}
          </NavLink>
        ))}
        {user ? (
          <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/dashboard">
              <FaUser
                style={{ transitionDelay: `${routelinks.length * 0.2}s` }}
                className="text-3xl hover:text-primary"
              />
            </Link>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-40 md:w-48">
                <Link
                  to="/dashboard"
                  className="block px-3 py-1 text-gray-800 hover:bg-gray-100 text-center text-sm"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="block px-3 py-1 text-gray-800 hover:bg-gray-100 w-full text-center text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <FaSignInAlt
              style={{ transitionDelay: `${routelinks.length * 0.2}s` }}
              className="text-3xl hover:text-primary"
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
