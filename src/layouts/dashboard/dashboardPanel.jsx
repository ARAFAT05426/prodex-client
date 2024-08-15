import Sidebar from "../../componets/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const DashboardPanel = () => {
  return (
    <div className="">
      {/* Sidebar */}
      <Sidebar />
      <main className={`ml-1 lg:ml-[15.5rem] mx-2 md:mx-1 mt-[4.5rem]`}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardPanel;
