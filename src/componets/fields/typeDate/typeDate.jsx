import PropTypes from "prop-types";

const TypeDate = ({
  name,
  placeholder = "",
  required = true,
  value,
  onChange,
}) => {
  return (
    <div className="relative flex items-center text-sm font-montserrat font-medium">
      <input
        className="w-full px-5 py-3 border rounded-sm placeholder-gray-400 outline-none focus:shadow focus:border-blue-400 transition-all duration-300"
        placeholder={placeholder || name}
        required={required}
        name={name?.toLowerCase()}
        type="date"
        id={name?.toLowerCase()}
        value={value || ""}
        onChange={onChange}
      />
    </div>
  );
};

TypeDate.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TypeDate;
