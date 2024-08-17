import { FaBehance, FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-50/25 w-full border-t font-montserrat text-sm">
      <div className="w-3/5 mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="text-center mb-6 md:mb-0">
            <img className="h-14 mx-auto" src="/logo.png" alt="" />
            <p className="text-sm font-medium text-gray-700">VP of Sales, SomeCompany</p>
          </div>
          <div className="rotate-0 md:rotate-90 w-20 h-1 bg-black rounded mb-6 md:mb-0" />
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link
              to="/"
              className="flex items-center text-black hover:text-gray-700 transition duration-300 text-xs md:text-base"
            >
              <FaEnvelope className="text-xl md:text-2xl" />
              <span className="ml-2">irene.sims@example.com</span>
            </Link>
            <Link
              to="/"
              className="flex items-center text-black hover:text-gray-700 transition duration-300 text-xs md:text-base"
            >
              <FaPhoneAlt className="text-xl md:text-2xl" />
              <span className="ml-2">+123-456-7890</span>
            </Link>
            <Link
              to="/"
              className="flex items-center text-black hover:text-gray-700 transition duration-300 text-xs md:text-base"
            >
              <FaMapLocationDot className="text-xl md:text-2xl" />
              <span className="ml-2">Austin, Texas</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white">
        <div className="flex flex-wrap items-center justify-center p-4 space-x-4">
          <Link
            to="/"
            className="flex items-center justify-center text-white transition duration-300 hover:text-gray-400"
          >
            <FaFacebookF className="text-xl md:text-2xl" />
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center text-white transition duration-300 hover:text-gray-400"
          >
            <FaTwitter className="text-xl md:text-2xl" />
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center text-white transition duration-300 hover:text-gray-400"
          >
            <FaInstagram className="text-xl md:text-2xl" />
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center text-white transition duration-300 hover:text-gray-400"
          >
            <FaBehance className="text-xl md:text-2xl" />
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center text-white transition duration-300 hover:text-gray-400"
          >
            <FaGithub className="text-xl md:text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
