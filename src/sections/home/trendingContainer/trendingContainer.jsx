import { useState, useEffect } from "react";
import useRefetch from "../../../hooks/server/useRefetch";
import ProductCard from "../../../componets/cards/productCard/productCard";

const TrendingContainer = () => {
  const [category, setCategory] = useState("Electronics");
  const { data, loading, refetch } = useRefetch(`/products?category=${category}`);
  console.log(data);

  // Dummy categories
  const categories = ["Electronics", "Fashion", "Home", "Toys", "Books"];

  useEffect(() => {
    // Refetch data when the category changes
    refetch();
  }, [category, refetch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-3">
      <h1 className="text-2xl font-montserrat font-semibold">Trending Products</h1>
      <div className="flex flex-wrap items-center font-montserrat font-medium gap-5 mt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-px py-[2px] border-b-2 rounded-sm transition-all duration-300 ${
              category === cat ? "font-semibold text-blue-600 border-blue-600" : "border-b-transparent hover:font-semibold hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {data?.products?.length > 0 ? (
          data.products.map((product, i) => <ProductCard key={i} product={product} />)
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default TrendingContainer;
