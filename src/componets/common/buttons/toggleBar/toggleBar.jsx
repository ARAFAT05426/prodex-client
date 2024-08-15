import PropTypes from "prop-types";
import "./toggleBar.css";

const ToggleBar = ({ onClick, isActive = false }) => {
  return (
    <button
      className={`toggle-menu bg-[#1abc9c] before:bg-[#1abc9c] ${
        isActive ? "active" : ""
      }`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span></span>
    </button>
  );
};

ToggleBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ToggleBar;
