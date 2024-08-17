import { useState, useEffect } from "react";
import Loader from "../../../componets/loader/loader";
import useRefetch from "../../../hooks/server/useRefetch";
import ProductCard from "../../../componets/cards/productCard/productCard";

const TrendingContainer = () => {
  const [category, setCategory] = useState("Electronics");
  const { data, loading, error, refetch } = useRefetch(
    `/products?category=${category}`
  );

  // Dummy categories
  const categories = ["Electronics", "Fashion", "Home", "Toys", "Books"];

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
    <div className="container mx-auto my-3">
      <h1 className="text-2xl font-montserrat font-semibold">
        Trending Products
      </h1>
      <div className="flex flex-wrap items-center font-montserrat font-medium gap-5 mt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 border-b-2 rounded-sm transition-all duration-300 ${
              category === cat
                ? "font-semibold text-blue-600 border-blue-600"
                : "border-b-transparent hover:font-semibold hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {data?.products?.length > 0 ? (
          data.products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default TrendingContainer;
