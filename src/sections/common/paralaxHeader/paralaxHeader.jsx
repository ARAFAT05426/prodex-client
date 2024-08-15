import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const ParalaxHeader = ({ title }) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 h-72 bg-slate-50 border-b border-b-slate-200">
      {/* Icons */}
      <div className="absolute bottom-5 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-12">
        <RiLightbulbFlashLine className="text-[6rem] animate-fade-in text-slate-200/75" />
      </div>
      <div className="absolute top-5 right-1/4 transform -translate-x-1/2 -translate-y-1/4 rotate-12">
        <HiOutlineRocketLaunch className="text-[6rem] animate-smooth-up-down text-slate-200/75" />
      </div>
      {/* Title */}
      <h1 className="font-montserrat font-semibold uppercase text-5xl">
        {title}
      </h1>
      <div className="flex items-center gap-1 font-semibold z-10">
        Template <IoIosArrowForward className="mt-[2px]" />
        {title}
      </div>
    </div>
  );
};

ParalaxHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ParalaxHeader;
