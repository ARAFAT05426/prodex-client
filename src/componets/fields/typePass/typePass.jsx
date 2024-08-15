import { FaEye, FaEyeSlash } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

const TypePass = ({ placeholder = "", value = "", onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex text-sm font-montserrat font-medium">
      <input
        className="peer w-full outline-none px-4 py-3 rounded-sm bg-transparent placeholder-transparent focus:text-blue-400 focus:placeholder-blue-400 focus:shadow border border-opacity-25 focus:border-blue-300 transition-all duration-300 ease-in-out"
        placeholder={placeholder}
        required
        name="password"
        type={showPassword ? "text" : "password"}
        id="password"
        value={value ? value : undefined}
        onChange={onChange}
      />
      <label
        className="absolute top-1/2 translate-y-[-50%] bg-white/15 backdrop-blur-md ml-3 px-2 font-semibold peer-focus:top-0 peer-valid:top-0 peer-focus:text-blue-400 transition-all duration-300 ease-in-out"
        htmlFor="password"
      >
        Password
      </label>
      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 opacity-0 peer-focus:opacity-100 peer-valid:opacity-100 text-lg text-blue-400 outline-none transition-all duration-200"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

TypePass.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TypePass;
