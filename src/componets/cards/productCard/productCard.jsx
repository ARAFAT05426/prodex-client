import "./productCard.css";
import PropTypes from "prop-types";
import { SiDatabricks } from "react-icons/si";
import { TiInputChecked } from "react-icons/ti";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoBookmarksOutline } from "react-icons/io5";
import { TbCalendarClock, TbCategory } from "react-icons/tb";
import PrimaryBtn from "../../common/buttons/primaryBtn/primaryBtn";

const ProductCard = ({ product }) => {
  const {
    name,
    image,
    price,
    brand,
    stock,
    ratings,
    category,
    features,
    createdAt,
    description,
  } = product;

  return (
    <div className="flex flex-col group relative font-montserrat border border-gray-100 rounded p-2 overflow-hidden shadow h-full">
      <div className="image-container group-hover:before:left-3/4">
        <img
          src={image}
          alt={name}
          className="w-full h-52 rounded object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="glassy-overlay"></div>
      </div>
      <div className="absolute top-3 -left-6 -rotate-45 px-7 py-1 text-center min-w-28 flex items-center gap-1 text-white bg-blue-500 text-xs font-semibold">
        <FaStarHalfStroke /> {ratings}
      </div>
      <div className="flex flex-col flex-1 pl-1 space-y-2">
        <h1 className="group-hover:text-blue-500 font-oswald font-medium text-xl mt-2 ml-1 transition-all duration-300">
          {name}
        </h1>
        <p className="description font-medium text-xs ml-1 text-gray-700">
          {description?.slice(0, 100)}..
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs flex items-center gap-1 font-semibold text-gray-800">
            <TbCategory className="" />
            {category}
          </span>
          <span className="text-xs flex items-center gap-1 font-semibold text-gray-800">
            <IoBookmarksOutline className="" />
            {brand}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-gray-800">
            <TbCalendarClock className="" />
            {new Date(createdAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="text-sm flex items-center gap-1 font-semibold text-gray-800">
            <SiDatabricks className="" />
            {stock}
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-px px-1">
          {features?.map((feature, i) => (
            <span
              key={i}
              className="feature-item text-xs flex items-center gap-1 text-gray-700"
            >
              <TiInputChecked className="text-xl text-blue-500" /> {feature}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-2 w-full">
        <PrimaryBtn className="w-full">$ {price}</PrimaryBtn>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
