import { MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import useRefetch from "../../../hooks/server/useRefetch";
import ProductsTable from "./components/productsTable";
import TypeSearch from "../../../componets/fields/typeSearch/typeSearch";
import TypeSelect from "../../../componets/fields/typeSelect/typeSelect";
import AddProductModal from "./components/addProduct/addProductModal";

// Utility function to format the date as "15 Aug, 2024"
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options); // 'en-GB' formats as "15 Aug 2024"
};

const Products = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [isAddOpen, setAddOpen] = useState(false);
  const [priceRange, setPriceRange] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, refetch } = useRefetch(
    `/products?name=${searchTerm}&category=${category}&priceRange=${priceRange}&page=${page}&limit=${10}`
  );

  useEffect(() => {
    refetch();
  }, [searchTerm, category, priceRange, page, refetch]);

  const handleRefetch = async () => {
    await setCategory("");
    await setSearchTerm("");
    await setPriceRange("");
    await setPage(1);
    await refetch();
  };

  const headers = [
    { header: "Product Name", accessor: "name" },
    { header: "Category", accessor: "category" },
    { header: "Price", accessor: "price" },
    { header: "Created At", accessor: "createdAt" },
    { header: "Actions", accessor: "actions" },
  ];

  const modifiedProducts = data
    ? data?.products?.map((product) => ({
        ...product,
        category: (
          <span className="px-3 py-1 bg-green-50 font-semibold text-sm">
            {product?.category}
          </span>
        ),
        actions: (
          <button
            // onClick={() => handleEditClick(product)}
            className="font-montserrat font-semibold text-xs px-3 py-1 rounded bg-yellow-300 hover:bg-yellow-400 transition-all duration-300"
          >
            Edit
          </button>
        ),
        createdAt: <span>{formatDate(product?.createdAt)}</span>,
      }))
    : [];

  return (
    <>
      <div className="relative py-5 shadow-md bg-white rounded-sm border border-opacity-25">
        <div className="absolute top-3 h-10 w-[2px] bg-blue-600" />
        <h1 className="px-3 md:px-5 text-xl font-montserrat font-semibold">
          Product Management Table
        </h1>
        <hr className="my-3 w-full" />
        <div className="flex flex-wrap items-start md:items-center justify-normal md:justify-between px-3 md:px-5 gap-2">
          <div className="flex flex-col sm:flex-row items-start gap-2">
            <TypeSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleRefetch={handleRefetch}
            />
            <TypeSelect
              options={["Electronics", "Accessories", "Apparel", "Home Goods"]}
              onSelect={setCategory}
              value={category}
              placeholder="Filter by category"
              className="w-full sm:w-auto"
            />
            <TypeSelect
              options={["0-100", "101-500", "501-1000", "1001+"]}
              onSelect={setPriceRange}
              value={priceRange}
              placeholder="Filter by price range"
              className="w-full sm:w-auto"
            />
          </div>
          <button
            onClick={() => setAddOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded bg-blue-200 hover:bg-blue-400 font-montserrat font-semibold text-blue-700 hover:text-white text-xs sm:text-sm transition-all duration-300"
          >
            <MdAdd className="text-lg sm:text-xl" />
            Add Product
          </button>
        </div>
        <ProductsTable
          headers={headers}
          modifiedProducts={modifiedProducts}
          loading={loading}
          totalPages={data?.totalPages || 1}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
      <AddProductModal
        isOpen={isAddOpen}
        onClose={() => setAddOpen(false)}
        refetch={refetch}
      />
    </>
  );
};

export default Products;
