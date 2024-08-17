const FeaturedProducts = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-4 py-6 px-4 md:px-8">
      <div
        className="relative w-full md:w-3/5 h-80 bg-cover bg-no-repeat rounded-md overflow-hidden flex flex-col justify-center p-6 text-white"
        style={{ backgroundImage: `url('featured_1.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-montserrat font-semibold">
            GoPro Omni Camera
          </h1>
          <p className="text-sm mt-2">
            Which can vary depending on the brand and model electronic device.
          </p>
          <button className="mt-4 px-1 text-sm md:text-base underline text-white rounded transition-opacity hover:opacity-75">
            Shop now
          </button>
        </div>
      </div>
      <div
        className="relative w-full md:w-2/5 h-80 bg-cover bg-no-repeat rounded-md overflow-hidden flex flex-col justify-center p-6 text-white"
        style={{ backgroundImage: `url('featured_2.png')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-montserrat font-semibold">
            iPhone 14 Pro Max
          </h1>
          <p className="text-sm mt-2">
            The iPhone 12 Pro Max had a premium design with a Ceramic Shield front cover.
          </p>
          <button className="mt-4 px-1 text-sm md:text-base underline text-white rounded transition-opacity hover:opacity-75">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
