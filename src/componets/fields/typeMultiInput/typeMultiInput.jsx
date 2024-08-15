import PropTypes from "prop-types";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

const TypeMultiInput = ({
  name = "Select",
  placeholder = "",
  values = [],
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      onChange([...values, inputValue]);
      setInputValue("");
    }
  };

  const handleRemove = (index) => {
    const newValues = values.filter((_, i) => i !== index);
    onChange(newValues);
  };

  return (
    <>
      <div className="relative flex text-sm font-montserrat font-medium mb-3">
        <input
          className="type-text-input peer w-full outline-none px-4 py-3 rounded-sm bg-transparent placeholder-transparent focus:text-blue-400 focus:placeholder-blue-400 focus:shadow border border-opacity-50 focus:border-blue-300 transition-all duration-300 ease-in-out"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          id={name?.toLowerCase()}
          value={inputValue}
          type="text"
        />
        <label
          className={`absolute top-1/2 left-3 -translate-y-1/2 bg-white/15 backdrop-blur-md px-2 font-montserrat font-semibold transition-all duration-300 ease-in-out z-10 peer-focus:top-0 peer-focus:bg-white/15 peer-focus:text-blue-400 `}
          htmlFor={name?.toLowerCase()}
        >
          {name}
        </label>
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-3 border border-transparent hover:border-blue-400 bg-blue-200 hover:bg-blue-400 font-montserrat font-semibold text-blue-700 hover:text-white text-xs transition-all duration-300"
        >
          <MdAdd className="text-lg" />
        </button>
      </div>

      <div className="flex flex-wrap gap-1">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-2 py-[2px] text-[0.65rem] bg-blue-100 rounded text-blue-700 font-semibold"
          >
            {value}
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="text-red-500 hover:text-red-700"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

TypeMultiInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  values: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TypeMultiInput;
