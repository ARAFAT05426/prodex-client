import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../../../../../componets/modals/modal/modal";
import TypeSelect from "../../../../../componets/fields/typeSelect/typeSelect";
import PrimaryBtn from "../../../../../componets/common/buttons/primaryBtn/primaryBtn";
import axiosCommon from "../../../../../hooks/instance/axiosCommon";

const RoleUpdateModal = ({ isOpen, onClose, user, refetch }) => {
  const [selectedRole, setRole] = useState(null);

  const handleRoleUpdate = async () => {
    try {
      const response = await axiosCommon.patch("/users/update", {
        email: user?.email,
        role: selectedRole,
      });
      refetch();
      onClose();
      console.log(response.data);
    } catch (error) {
      console.error("Error updating user role:", error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="mt-3">
        <TypeSelect
          options={["admin", "user"]}
          onSelect={setRole}
          placeholder="Select a role"
        />
      </div>
      <PrimaryBtn
        onClick={handleRoleUpdate}
        className="w-full text-sm mt-3 bg-blue-300 hover:bg-blue-500 active:bg-blue-500"
      >
        Update Role
      </PrimaryBtn>
    </Modal>
  );
};

RoleUpdateModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
  refetch: PropTypes.func,
};

export default RoleUpdateModal;
