import PropTypes from 'prop-types';

const TabButtons = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full lg:w-1/4 h-fit font-montserrat font-medium">
      <button
        onClick={() => setActiveTab(0)}
        className={`w-full p-4 text-left transition-colors border-l-4 ${
          activeTab === 0
            ? "border-blue-400 bg-blue-100 text-blue-600"
            : "border-transparent text-blue-500 hover:bg-blue-200"
        }`}
      >
        Overview
      </button>
      <button
        onClick={() => setActiveTab(1)}
        className={`w-full p-4 text-left transition-colors border-l-4 ${
          activeTab === 1
            ? "border-blue-400 bg-blue-100 text-blue-600"
            : "border-transparent text-blue-500 hover:bg-blue-200"
        }`}
      >
        Settings
      </button>
    </div>
  );
};

TabButtons.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default TabButtons;
