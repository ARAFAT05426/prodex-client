const WelcomeCard = () => {
  return (
    <div className="flex items-center justify-between shadow-sm hover:shadow rounded px-7 py-5 mb-3 border border-blue-300/25 transition-all duration-300">
      <div>
        <h1 className="bg-gradient-to-tl from-blue-500 via-blue-400 to-blue-600 text-2xl md:text-4xl text-transparent bg-clip-text font-montserrat font-bold mb-4">
          Welcome back, ready to customize <br /> client-template
          <span className="text-black">👋</span>
        </h1>
        <p className="text-gray-600 font-montserrat mt-1">We're glad to see you again.</p>
        <button className="mt-3 bg-blue-500 font-montserrat text-sm font-medium text-white py-2 px-5 rounded-sm hover:bg-blue-600 transition duration-300">
          View Details
        </button>
      </div>
      <img className="w-full max-w-xs max-h-60 object-cover" src="/welcome.png" alt="Welcome" />
    </div>
  );
};

export default WelcomeCard;
