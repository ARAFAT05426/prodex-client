/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { IoArrowBack, IoHome } from "react-icons/io5";
import PrimaryBtn from "../../componets/common/buttons/primaryBtn/primaryBtn";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat bg-blend-darkeno p-4">
      {/* Blurry Background */}
      <div className="absolute inset-0 bg-blue-200/50 backdrop-blur-3xl z-[-1]" />
      <img
        src="/404.png"
        alt="404 Error"
        className="w-full max-w-md animate-smooth-up-down"
      />
      <div className="text-center font-montserrat mb-3">
        <p className="text-3xl font-semibold">Oops!</p>
        <p className="text-xs font-semibold mt-2">
          The page you're looking for does not exist.
        </p>
      </div>
      <div className="flex ite space-x-3">
        <PrimaryBtn
          onClick={() => navigate(-1)}
          className="bg-blue-400 text-blue-800 hover:bg-blue-500 flex items-center transform transition-transform duration-300"
        >
          <IoArrowBack className="mr-2" /> Go Back
        </PrimaryBtn>
        <button
          onClick={() => navigate("/")}
          className="w-full flex items-center font-montserrat border-2 border-blue-400 bg-transparent hover:border-blue-500 text-blue-400 
          hover:text-white text-nowrap hover:scale-x-105 font-semibold py-3 px-7 rounded-sm hover:bg-blue-500 transition-all duration-300"
        >
          <IoHome className="mr-2" /> Home Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
