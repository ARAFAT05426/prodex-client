import PropTypes from "prop-types";

const TypeTextArea = ({
  name,
  placeholder = "",
  required = true,
  value,
  onChange,
  rows = 5
}) => {
  return (
    <div className="relative flex text-sm font-montserrat font-medium">
      <textarea
        className="type-textarea-input peer w-full outline-none px-4 py-3 rounded-sm bg-transparent placeholder-transparent focus:text-blue-400 focus:placeholder-blue-400 focus:shadow border border-opacity-25 focus:border-blue-300 transition-all duration-300 ease-in-out"
        name={name?.toLocaleLowerCase()}
        id={name?.toLocaleLowerCase()}
        value={value ? value : ""}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        rows={rows}
      />
      <label
        className="absolute top-1/4 translate-y-[-50%] bg-white/15 backdrop-blur-md ml-3 px-2 font-montserrat font-semibold peer-focus:top-0 peer-valid:top-0 peer-focus:text-blue-400 transition-all duration-300 ease-in-out z-10"
        htmlFor={name?.toLocaleLowerCase()}
      >
        {name}
      </label>
    </div>
  );
};

TypeTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number
};

export default TypeTextArea;
