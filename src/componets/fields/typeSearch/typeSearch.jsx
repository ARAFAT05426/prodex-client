import PropTypes from "prop-types";
import { BiSearchAlt } from "react-icons/bi";
import { LuRefreshCcw } from "react-icons/lu";
import { useState, useEffect } from "react";

const TypeSearch = ({
  searchTerm = "",
  setSearchTerm,
  handleRefetch,
  placeholder = "Search...",
}) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(localSearchTerm);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center px-3 py-3 border rounded overflow-hidden focus-within:border-blue-300 transition-all duration-300">
        <input
          className="outline-none px-2 w-full sm:w-auto focus:ring-0 text-sm"
          type="text"
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          placeholder={placeholder}
        />
        <button onClick={handleSearch} className="text-gray-700 ml-2 text-xl">
          <BiSearchAlt />
        </button>
      </div>
      {handleRefetch && (
        <button
          onClick={handleRefetch}
          className="flex items-center justify-center px-3 py-2 rounded border border-gray-200 hover:border-blue-300 transition-all duration-300"
        >
          <LuRefreshCcw className="text-lg sm:text-xl" />
        </button>
      )}
    </div>
  );
};

TypeSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  handleRefetch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default TypeSearch;
