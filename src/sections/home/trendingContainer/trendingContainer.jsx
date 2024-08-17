import { useState, useEffect } from "react";
import Loader from "../../../componets/loader/loader";
import useRefetch from "../../../hooks/server/useRefetch";
import ProductCard from "../../../componets/cards/productCard/productCard";

const TrendingContainer = () => {
  const [category, setCategory] = useState("Smartphones");
  const { data, loading, error, refetch } = useRefetch(
    `/products?category=${category}`
  );

  const categories = [
    "Smartphones",
    "Laptops",
    "Audio",
    "Networking"
  ];

  useEffect(() => {
    refetch();
  }, [category, refetch]);

  if (loading)
    return (
      <div className="h-96 flex items-center justify-center">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center py-10">
        An error occurred while fetching products. Please try again later.
      </div>
    );

  return (
    <div className="container mx-auto py-5 px-5 md:px-0">
      <h1 className="text-3xl font-montserrat font-semibold text-center mb-4">
        Trending Products
      </h1>
      <div className="flex flex-wrap justify-start gap-4 mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`font-montserrat px-1 py-px border-b-2 rounded-sm transition-all duration-300 ${
              category === cat
                ? "font-semibold text-blue-600 border-blue-600"
                : "font-medium border-b-transparent hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.products?.length > 0 ? (
          data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default TrendingContainer;
