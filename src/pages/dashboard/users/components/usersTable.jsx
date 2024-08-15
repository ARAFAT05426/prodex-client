import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa";
import Table from "../../../../componets/table/table";

const UsersTable = ({
  headers,
  filteredUsers,
  loading,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="px-3 md:px-5 mt-5 custom-scrollbar">
      {loading ? (
        <FaSpinner className="h-10 w-10 m-auto animate-spin py-10" />
      ) : (
        <Table
          loading={loading}
          rowsPerPage={10}
          headers={headers}
          columns={filteredUsers}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

UsersTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  filteredUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default UsersTable;
