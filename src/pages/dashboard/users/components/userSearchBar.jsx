import PropTypes from "prop-types";
import { BiSearchAlt } from "react-icons/bi";
import { LuRefreshCcw } from "react-icons/lu";

const UserSearchBar = ({ searchTerm, setSearchTerm, handleRefetch }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center px-3 py-2 border rounded overflow-hidden focus-within:border-blue-300 transition-all duration-300">
        <BiSearchAlt className="text-gray-500 mr-2 text-lg sm:text-xl" />
        <input
          className="outline-none px-2 w-full sm:w-auto focus:ring-0 text-sm"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          placeholder="Search users by name..."
        />
      </div>
      <button
        onClick={handleRefetch}
        className="flex items-center justify-center px-3 py-2 rounded border border-gray-200 hover:border-blue-300 transition-all duration-300"
      >
        <LuRefreshCcw className="text-lg sm:text-xl" />
      </button>
    </div>
  );
};

UserSearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  handleRefetch: PropTypes.func.isRequired,
};

export default UserSearchBar;
