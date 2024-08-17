import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container min-h-20">
      <div className="spinner">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="spinner-blade"></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
