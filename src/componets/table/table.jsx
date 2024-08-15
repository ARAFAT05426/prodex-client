import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Table = ({
  loading = true,
  headers = [],
  columns = [],
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const getPaginationButtons = () => {
    const pages = [];
    const maxButtons = 3;
    const half = Math.floor(maxButtons / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage <= half) {
      end = Math.min(totalPages, maxButtons);
    } else if (currentPage + half >= totalPages) {
      start = Math.max(1, totalPages - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-semibold ${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "text-gray-600 bg-blue-50/50 hover:bg-blue-100 hover:text-blue-600"
          }`}
        >
          {i}
        </button>
      );
    }

    if (start > 1) {
      pages.unshift(
        <span
          key="start-ellipsis"
          className="px-2 py-1 md:px-3 md:py-2 text-gray-500 text-xs md:text-sm"
        >
          ...
        </span>
      );
    }

    if (end < totalPages) {
      pages.push(
        <span
          key="end-ellipsis"
          className="px-2 py-1 md:px-3 md:py-2 text-gray-500 text-xs md:text-sm"
        >
          ...
        </span>
      );
    }

    return pages;
  };

  return (
    <>
      {loading ? (
        <FaSpinner className="h-10 w-10 m-auto animate-spin py-10" />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border-collapse table">
              <thead className="">
                <tr className="font-montserrat font-semibold bg-gray-100">
                  {headers.map(({ header }) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-2 py-2 md:px-4 md:py-4 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {columns.length > 0 ? (
                  columns.map((row, index) => (
                    <tr
                      key={index}
                      className={` ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-blue-50/75`}
                    >
                      {headers.map(({ accessor }) => (
                        <td
                          key={accessor}
                          className="px-2 py-2 md:px-4 md:py-3 text-nowrap text-sm text-gray-900"
                        >
                          {row[accessor] || "-"}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr className="">
                    <td
                      colSpan={headers.length}
                      className="text-center py-4 text-sm text-gray-500"
                    >
                      No data available for this page.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center justify-end mt-4 text-xs md:text-sm">
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-1 md:px-5 md:py-2 text-gray-600 bg-blue-50/75 hover:bg-blue-100 hover:text-blue-600 ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <MdOutlineKeyboardArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <div className="flex items-center space-x-1">
              {getPaginationButtons()}
            </div>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-2 py-1 md:px-3 md:py-2 text-gray-600 bg-blue-50/75 hover:bg-blue-100 hover:text-blue-600 ${
                currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <MdOutlineKeyboardArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

Table.propTypes = {
  loading: PropTypes.bool,
  headers: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Table;
