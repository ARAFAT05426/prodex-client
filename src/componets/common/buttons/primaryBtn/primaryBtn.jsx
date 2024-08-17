import PropTypes from "prop-types";

const PrimaryBtn = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} max-w-full flex items-center justify-center bg-blue-500 text-white hover:bg-black active:bg-black hover:text-white font-semibold px-8 py-3 transition-all duration-500 ease-in-out font-montserrat rounded-sm`}
    >
      {children}
    </button>
  );
};

PrimaryBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default PrimaryBtn;
