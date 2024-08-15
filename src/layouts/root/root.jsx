import Footer from "../../sections/common/footer/footer";
import Navbar from "../../componets/navbar/navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="mt-16 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Root;
