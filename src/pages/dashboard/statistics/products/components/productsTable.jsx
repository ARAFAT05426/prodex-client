import PropTypes from "prop-types";
import Table from "../../../../../componets/table/table";
import Loader from "../../../../../componets/loader/loader";

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
        <div className="h-40 flex items-center justify-center">
          <Loader />
        </div>
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
