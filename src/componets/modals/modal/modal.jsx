import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="fixed inset-0 bg-black/25 backdrop-blur-xl"
          onClick={onClose}
        />
        <div className="bg-white rounded-md shadow-lg overflow-y-auto overflow-x-hidden w-full max-w-md mx-4 relative custom-scrollbar">
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <IoClose className="h-5 w-5" />
          </button>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
