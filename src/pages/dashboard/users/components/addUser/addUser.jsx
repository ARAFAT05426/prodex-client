import PrimaryBtn from "../../../../../componets/common/buttons/primaryBtn/primaryBtn";
import TypeSelect from "../../../../../componets/fields/typeSelect/typeSelect";
import TypeText from "../../../../../componets/fields/typeText/typeText";
import axiosCommon from "../../../../../hooks/instance/axiosCommon";
import Modal from "../../../../../componets/modals/modal/modal";
import PropTypes from "prop-types";
import { useState } from "react";

const AddUser = ({ isOpen, onClose, refetch }) => {
  const [role, setRole] = useState(null);
  const [error, setError] = useState("");

  const handleAddUser = async (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    if (!name || !email || !role) {
      setError("All fields are required.");
      return;
    }

    try {
      await axiosCommon.put("/users/add", { name, email, role });
      refetch(); // Refresh the user list after adding a new user
      onClose(); // Close the modal
    } catch (error) {
      console.error("Failed to add user:", error);
      setError("Failed to add user. Please try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleAddUser} className="p-4 space-y-3">
        <h2 className="text-xl font-montserrat font-semibold ml-2">
          Add New User
        </h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <TypeText name="Name" placeholder="Set a name" />
        <TypeText name="Email" placeholder="Set an email" />
        <TypeSelect
          options={["user", "admin"]}
          onSelect={setRole}
          placeholder="Select Role"
        />
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mr-3 px-4 py-2 font-montserrat font-semibold bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-sm"
          >
            Cancel
          </button>
          <PrimaryBtn
            type="submit"
            className=""
          >
            Add User
          </PrimaryBtn>
        </div>
      </form>
    </Modal>
  );
};

AddUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default AddUser;
