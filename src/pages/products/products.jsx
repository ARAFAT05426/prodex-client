import { useEffect, useState } from "react";
import useRefetch from "../../hooks/server/useRefetch";
import TypeSearch from "../../componets/fields/typeSearch/typeSearch";
import TypeSelect from "../../componets/fields/typeSelect/typeSelect";
import ParalaxHeader from "../../sections/common/paralaxHeader/paralaxHeader";
import ProductCard from "../../componets/cards/productCard/productCard";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Loader from "../../componets/loader/loader";

const Products = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByDate, setSortByDate] = useState("Newest");
  const [sortByPrice, setSortByPrice] = useState("");

  const { data, loading, error, refetch } = useRefetch(
    `/products?search=${searchTerm}&category=${category}&priceRange=${priceRange}&sortByDate=${sortByDate}&sortByPrice=${sortByPrice}&page=${page}&limit=${8}`
  );

  useEffect(() => {
    refetch();
  }, [
    searchTerm,
    category,
    priceRange,
    sortByDate,
    sortByPrice,
    page,
    refetch,
  ]);

  const resetFilters = async () => {
    setCategory("");
    setSearchTerm("");
    setPriceRange("");
    setSortByDate("Newest");
    setSortByPrice("");
    setPage(1);
    refetch();
  };

  const onPageChange = (newPage) => {
    setPage(newPage);
  };

  const getPaginationButtons = () => {
    if (!data || !data.totalPages) {
      return null;
    }

    const pages = [];
    const start = Math.max(1, page - 2);
    const end = Math.min(data?.totalPages || 1, page + 2);

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm font-semibold ${
            page === i
              ? "bg-blue-500 text-white"
              : "text-gray-600 bg-blue-50/50 hover:bg-blue-100 hover:text-blue-600"
          }`}
        >
          {i}
        </button>
      );
    }

    if (start > 1) {
      pages.unshift(
        <span
          key="start-ellipsis"
          className="px-2 py-1 md:px-3 md:py-2 text-gray-500 text-xs md:text-sm"
        >
          ...
        </span>
      );
    }

    if (end < data.totalPages) {
      pages.push(
        <span
          key="end-ellipsis"
          className="px-2 py-1 md:px-3 md:py-2 text-gray-500 text-xs md:text-sm"
        >
          ...
        </span>
      );
    }

    return pages;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-10">
        An error occurred while fetching products. Please try again later.
      </div>
    );
  }

  return (
    <>
      <ParalaxHeader title="Products" />
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-2 my-5">
        <TypeSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleRefetch={resetFilters}
        />
        <TypeSelect
          options={["Electronics", "Accessories", "Apparel", "Home Goods"]}
          onSelect={setCategory}
          value={category}
          placeholder="Filter by category"
        />
        <TypeSelect
          options={["0-100", "101-500", "501-1000", "1001+"]}
          onSelect={setPriceRange}
          value={priceRange}
          placeholder="Filter by price range"
        />
        <TypeSelect
          options={["Low-High", "High-Low"]}
          onSelect={setSortByPrice}
          value={sortByPrice}
          placeholder="Sort by Price"
        />
        <TypeSelect
          options={["Newest", "Oldest"]}
          onSelect={setSortByDate}
          value={sortByDate}
          placeholder="Sort by Date"
        />
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
        {data?.products?.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>

      <div className="w-fit mx-auto divide-x flex items-center justify-center border my-5 text-xs md:text-sm">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={`px-4 py-1 md:px-5 md:py-2 text-gray-600 bg-blue-50/75 hover:bg-blue-100 hover:text-blue-600 ${
            page === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <MdOutlineKeyboardArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
        </button>
        <div className="flex items-center space-x-1">
          {getPaginationButtons()}
        </div>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === data?.totalPages}
          className={`px-2 py-1 md:px-5 md:py-2 text-gray-600 bg-blue-50/75 hover:bg-blue-100 hover:text-blue-600 ${
            page === data?.totalPages ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <MdOutlineKeyboardArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>
    </>
  );
};

export default Products;
