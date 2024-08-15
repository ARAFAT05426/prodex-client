import PropTypes from "prop-types";

const TypeText = ({
  name,
  type = "text",
  placeholder = "",
  required = true,
  value,
  onChange,
}) => {
  return (
    <div className="relative flex text-sm font-montserrat font-medium">
      <input
        className="type-text-input peer w-full outline-none px-4 py-3 rounded-sm bg-transparent placeholder-transparent focus:text-blue-400 focus:placeholder-blue-400 focus:shadow border border-opacity-50 focus:border-blue-300 transition-all duration-300 ease-in-out"
        placeholder={placeholder}
        required={required}
        name={name?.toLocaleLowerCase()}
        type={type}
        id={name?.toLocaleLowerCase()}
        value={value ? value : undefined}
        onChange={onChange}
      />
      <label
        className="absolute top-1/2 translate-y-[-50%] bg-white/15 backdrop-blur-md ml-3 px-2 font-montserrat font-semibold peer-focus:top-0 peer-valid:top-0 peer-focus:text-blue-400 transition-all duration-300 ease-in-out z-10"
        htmlFor={name?.toLocaleLowerCase()}
      >
        {name}
      </label>
    </div>
  );
};

TypeText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TypeText;
