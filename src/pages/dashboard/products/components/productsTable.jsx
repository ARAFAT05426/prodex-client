import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa";
import Table from "../../../../componets/table/table";

const ProductsTable = ({
  headers,
  loading,
  totalPages,
  currentPage,
  onPageChange,
  modifiedProducts,
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
          columns={modifiedProducts}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

ProductsTable.propTypes = {
  headers: PropTypes.array,
  loading: PropTypes.bool,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  modifiedProducts: PropTypes.array,
};

export default ProductsTable;
