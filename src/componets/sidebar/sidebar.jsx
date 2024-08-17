import ToggleBar from "../common/buttons/toggleBar/toggleBar";
import { dashboardLinks } from "../../routes/routelinks";
import useAuth from "../../hooks/providers/useAuth";
import { Link, NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [isAct, setAct] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 h-16 bg-slate-50/50 backdrop-blur-2xl flex items-center justify-between z-50 px-5 md:px-10 border-b border-b-blue-300/25">
        <div className="block lg:hidden">
          <ToggleBar isActive={isAct} onClick={() => setAct(!isAct)} />
        </div>
        <Link to="/">
          <img className="h-9" src="/logo.png" alt="" />
        </Link>
      </nav>
      <aside
        className={`fixed inset-y-0 left-0 overflow-hidden flex flex-col justify-between bg-slate-50 border-r ${
          isAct ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } lg:translate-x-0 lg:opacity-100 h-screen w-60 transition-all duration-500 z-40`}
      >
        <div className="flex flex-col items-center mt-20">
          <img
            className="w-40 h-40 border-2 border-blue-400 rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <div className="w-full flex flex-col gap-1 mt-5 font-montserrat font-medium">
            {dashboardLinks?.map((dashboardLink, i) => (
              <NavLink
                key={i}
                to={dashboardLink?.path}
                onClick={() => setAct(false)}
                className={({ isActive }) =>
                  `border-r-[0.33rem] ${
                    isActive
                      ? "border-r-blue-600 text-blue-600 font-semibold"
                      : "border-r-transparent hover:bg-blue-300/25 hover:text-blue-500 hover:tracking-widest"
                  } font-montserrat font-semibold flex items-center gap-3 px-10 py-2 transition-all duration-300`
                }
                end
              >
                <dashboardLink.icon className="text-xl" />
                {dashboardLink?.title}
              </NavLink>
            ))}
          </div>
        </div>
        <FaSignOutAlt
          onClick={handleLogout}
          className="text-3xl mx-auto mb-8 cursor-pointer hover:text-blue-600 transition-colors duration-300"
        />
      </aside>
    </>
  );
};

export default Sidebar;
