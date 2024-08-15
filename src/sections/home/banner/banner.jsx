import { Link } from "react-router-dom";
import PrimaryBtn from "../../../componets/common/buttons/primaryBtn/primaryBtn";

const Banner = () => {
  return (
    <header
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('/banner.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/25 backdrop-blur"></div> {/* Slightly lighter black overlay for contrast */}
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center relative z-10">
        <div>
          <h1 className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-5xl md:text-6xl text-transparent bg-clip-text font-montserrat font-bold mb-4">
            Welcome to <br /> Client Template
          </h1>
          <p className="text-white text-sm md:text-base font-medium mb-8 max-w-lg mx-auto">
            Your one-stop solution for creating stunning, professional web
            templates. Let's build something amazing together.
          </p>
          <Link to={"/dashboard"}>
            <PrimaryBtn className="bg-slate-50 text-black hover:bg-black hover:text-white">Get Started</PrimaryBtn>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Banner;
