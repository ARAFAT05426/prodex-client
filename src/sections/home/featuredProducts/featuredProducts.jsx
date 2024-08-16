const FeaturedProducts = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-3 py-2">
      <div
        className="w-full md:w-3/5 h-72 pl-10 text-white bg-cover bg-no-repeat rounded flex flex-col justify-center"
        style={{ backgroundImage: `url('featured_1.png')` }}
      >
        <h1 className="text-3xl font-montserrat font-semibold ">
          GoPro Omni Camera
        </h1>
        <p className="text-sm ml-1 mt-2">
          Which can vary depending on the brand and model electronic device.
        </p>

        <button className="text-left mt-10 px-2 underline w-fit transition-opacity hover:opacity-75">
          Shop now
        </button>
      </div>
      <div
        className="w-full md:w-2/5 h-72 pl-10 text-white bg-cover bg-no-repeat rounded flex flex-col justify-center"
        style={{ backgroundImage: `url('featured_2.png')` }}
      >
        <h1 className="text-3xl font-montserrat font-semibold ">
          iPhone 14 Pro Max
        </h1>
        <p className="text-sm ml-1 mt-2">
          The iPhone 12 Pro Max had a premium design with a Ceramic Shield front
          cover.
        </p>

        <button className="text-left mt-10 px-2 underline w-fit transition-opacity hover:opacity-75">
          Shop now
        </button>
      </div>
    </div>
  );
};
export default FeaturedProducts;
