import PropTypes from "prop-types";
import "./primaryBtn.css";
const PrimaryBtn = ({
  children,
  onClick,
  type = "button",
  className = "w-fit bg-slate-50 hover:bg-blue-400 active:bg-blue-400",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} primaryBtn font-montserrat font-semibold px-7 py-4 hover:scale-x-110 rounded-sm overflow-hidden`}
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
