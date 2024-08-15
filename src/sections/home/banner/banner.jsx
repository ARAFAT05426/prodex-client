import { Link } from "react-router-dom";
import PrimaryBtn from "../../../componets/common/buttons/primaryBtn/primaryBtn";

const Banner = () => {
  return (
    <header
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('/banner.png')` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur"></div>
      <div className="container mx-auto flex items-center justify-center h-full text-center relative z-10">
        <div className="text-white flex flex-col items-center justify-center gap-3">
          <h1 className="bg-white text-4xl md:text-6xl text-transparent bg-clip-text font-montserrat font-bold">
            Shop To Get What You Love
          </h1>
          <p className="max-w-xl font-montserrat text-center">
            Discover the latest trends in tech innovation and simplicity,
            enhancing your lifestyle effortlessly.
          </p>
          <Link to={"/dashboard"}>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Banner;
