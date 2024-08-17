import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

const TypeSelect = ({
  options = [],
  onSelect,
  value,
  placeholder = "Select",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || placeholder);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setIsOpen(false);
    setSelectedOption(option);
    onSelect(option === placeholder ? null : option); // if placeholder selected, return null
  };

  useEffect(() => {
    setSelectedOption(value || placeholder);
  }, [value, placeholder]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative font-montserrat font-medium" ref={dropdownRef}>
      <div
        className={`flex items-center gap-[.60rem] justify-between min-w-fit px-4 py-3 border ${
          isOpen ? "border-blue-300" : "border-gray-200"
        } rounded-sm cursor-pointer transition-all duration-300`}
        onClick={handleToggle}
      >
        <span
          className={`${
            isOpen ? "text-blue-400" : "text-gray-600"
          } transition-all duration-300 font-semibold text-sm`}
        >
          {selectedOption}
        </span>
        <FaChevronDown
          className={`mt-px text-sm transition-all duration-300 ${
            isOpen ? "rotate-180 text-blue-400" : "text-gray-600"
          }`}
        />
      </div>
      {isOpen && (
        <div
          className={`absolute inset-x-0 min-w-fit bg-slate-50 right-0 z-[15] border border-gray-300 rounded-sm mt-1 shadow`}
        >
          {[placeholder, ...options].map((option, i) => (
            <div
              key={i}
              className="text-sm px-4 py-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

TypeSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]), // handle null for the value prop
  placeholder: PropTypes.string,
};

export default TypeSelect;
