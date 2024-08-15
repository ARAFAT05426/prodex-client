import PropTypes from "prop-types";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useState } from "react";

const TypeFile = ({ name, onChange }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(file);
    } else {
      setFileName("");
    }
  };

  const formatFileName = (name) => {
    const maxLength = 35;
    if (name.length > maxLength) {
      return `${name.slice(0, maxLength)}...${name.split('.').pop()}`;
    }
    return name;
  };

  return (
    <div className="relative text-sm font-montserrat font-medium">
      <input
        className="hidden peer"
        required={true}
        name={name?.toLocaleLowerCase()}
        id={name?.toLocaleLowerCase()}
        onChange={handleFileChange}
        type="file"
      />
      <label
        className="flex items-center rounded-sm px-4 py-3 border hover:border-blue-300 hover:text-blue-400 cursor-pointer transition-all duration-300"
        htmlFor={name?.toLocaleLowerCase()}
      >
        <MdOutlineCloudUpload className="mr-2 text-lg" />
        {fileName ? formatFileName(fileName) : name}
      </label>
    </div>
  );
};

TypeFile.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TypeFile;
