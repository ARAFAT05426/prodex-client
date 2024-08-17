import PropTypes from "prop-types";
import axiosCommon from "../../../../../../hooks/instance/axiosCommon";
import Modal from "../../../../../../componets/modals/modal/modal";
import PrimaryBtn from "../../../../../../componets/common/buttons/primaryBtn/primaryBtn";
import { toast } from "react-toastify";

const DeleteProduct = ({ isOpen, onClose, id, refetch }) => {
  const handleConfirm = async () => {
    try {
      await axiosCommon.delete(`/products/delete/${id}`);
      toast.success("Product deleted successfully!");
      onClose();
      refetch();
    } catch (error) {
      toast.error("Error deleting product.");
      console.error("Error deleting product:", error);
    }
  };
  

  return (
    <Modal className="max-w-md" isOpen={isOpen} onClose={onClose}>
      <div className="p-6 text-center">
        <h2 className="text-xl font-montserrat font-semibold mb-4">
          Confirm Deletion
        </h2>
        <p className="mb-6 text-gray-700">
          Are you sure you want to delete this product? This action cannot be
          undone.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 font-montserrat font-semibold bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-sm"
          >
            Cancel
          </button>
          <PrimaryBtn onClick={handleConfirm} type="button">
            Confirm
          </PrimaryBtn>
        </div>
      </div>
    </Modal>
  );
};


DeleteProduct.propTypes = {
  isOpen: PropTypes.bool, 
  onClose: PropTypes.func, 
  id: PropTypes.string, 
  refetch: PropTypes.func, 
};

export default DeleteProduct;
