import { Link } from "react-router-dom";
import PrimaryBtn from "../../../componets/common/buttons/primaryBtn/primaryBtn";

const Banner = () => {
  return (
    <header
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('/banner.png')` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center relative z-10 px-4 md:px-6 lg:px-8">
        <div className="text-white flex flex-col items-center justify-center gap-4 md:gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-bold bg-white text-transparent bg-clip-text">
            Shop To Get What You Love
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl max-w-lg md:max-w-xl lg:max-w-2xl">
            Discover the latest trends in tech innovation and simplicity,
            enhancing your lifestyle effortlessly.
          </p>
          <Link to={"/dashboard"}>
            <PrimaryBtn className="px-4 py-2 md:px-6 md:py-3 text-base md:text-lg">
              Get Started
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Banner;

