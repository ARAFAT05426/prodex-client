import PropTypes from "prop-types";

const PrimaryBtn = ({ children, onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-blue-600 hover:bg-black active:bg-black hover:text-white font-semibold px-8 py-3 transition-all duration-500 ease-in-out font-montserrat rounded`}
    >
      {children}
    </button>
  );
};

PrimaryBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default PrimaryBtn;
