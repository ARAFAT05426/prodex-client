import PropTypes from "prop-types";

const StatCard = ({ icon: Icon, title = "", value = 0, description = "" }) => {
  return (
    <div className="w-full max-w-xs lg:max-w-sm shadow-sm rounded px-5 py-6 transition-all duration-300 hover:shadow border border-blue-300/25">
      <div className="flex items-start justify-between">
        <div className="font-montserrat">
          <h4 className="text-lg tracking-wider font-semibold">{title}</h4>
          <h1 className="text-3xl tracking-wide font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-500">
            {value}
          </h1>
          <p className="text-xs font-semibold mt-1">{description}</p>
        </div>
        <div className="p-3 rounded-full bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-500">
          <Icon className="w-9 h-9" />
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  icon: PropTypes?.elementType?.isRequired,
  title: PropTypes?.string?.isRequired,
  value: PropTypes?.oneOfType([PropTypes?.string, PropTypes?.number])
    ?.isRequired,
  description: PropTypes?.string,
};

export default StatCard;
