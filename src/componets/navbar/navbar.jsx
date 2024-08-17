import "./navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { routelinks } from "../../routes/routelinks";
import ToggleBar from "../common/buttons/toggleBar/toggleBar";
import { FaSignInAlt } from "react-icons/fa";
import useAuth from "../../hooks/providers/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify

const Navbar = () => {
  const [isAct, setActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => setActive((prev) => !prev);
  const { user, logOut } = useAuth();

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  const handleLogout = async () => {
    try {
      await logOut(); // Assume logOut is an async function
      toast.success("Logged out successfully!"); // Show success message
    } catch (error) {
      toast.error("Logout failed. Please try again."); // Show error message
    }
  };

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
              to={routelink?.path}
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-500 font-black underline" : ""
                } text-lg hover:text-primary transition-colors duration-300`
              }
            >
              {routelink?.title}
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
                className="h-10 w-10 border-2 border-blue-500 rounded-full"
                src={user?.photoURL}
                alt="User"
              />
            </Link>
            {dropdownOpen && (
              <div className="absolute top-full right-0 divide-y bg-white border border-gray-200 text-center text-xs font-semibold rounded-sm w-28 transition-transform transform scale-100 opacity-100">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout} // Use handleLogout function here
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300 w-full"
                >
                  logOut
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <FaSignInAlt className="text-3xl hover:text-blue-500 transition-transform duration-300 transform hover:scale-110" />
          </Link>
        )}
      </div>
      {/* Small device toggleBar */}
      <div className="flex md:hidden items-center justify-between px-5">
        <Link to={"/"}>
          <img className="h-9" src="/logo.png" alt="Logo" />
        </Link>
        <div className="flex items-center gap-3">
          {user ? (
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/dashboard">
                <img
                  className="h-8 w-8 border-2 border-blue-500 rounded-full"
                  src={user?.photoURL}
                  alt="User"
                />
              </Link>
              {dropdownOpen && (
                <div className="absolute top-full right-0 divide-y bg-white border border-gray-200 text-center text-xs font-semibold rounded w-28 transition-transform transform scale-100 opacity-100">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout} // Use handleLogout function here
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-300 w-full"
                  >
                    logOut
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <FaSignInAlt className="text-3xl hover:text-blue-500 transition-transform duration-300 transform hover:scale-110" />
            </Link>
          )}
          <ToggleBar onClick={toggleMenu} isActive={isAct} />
        </div>
      </div>
      {/* Small device links */}
      <div
        className={`fixed inset-0 h-screen ${
          isAct ? "menu-opened" : "menu-closed"
        } bg-blue-100 flex flex-col gap-5 font-semibold p-24`}
      >
        {routelinks.map((routelink, i) => (
          <NavLink
            key={i}
            to={routelink.path}
            className={({ isActive }) =>
              `routelink-sm ${
                isActive ? "text-blue-500 font-black underline" : ""
              } text-5xl hover:text-primary transition-colors duration-300`
            }
            onClick={toggleMenu}
            style={{ transitionDelay: `${i * 0.3}s` }}
          >
            {routelink.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
