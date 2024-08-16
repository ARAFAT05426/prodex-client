import { MdAdd, MdOutlineDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import useRefetch from "../../../hooks/server/useRefetch";
import ProductsTable from "./components/productsTable";
import TypeSearch from "../../../componets/fields/typeSearch/typeSearch";
import TypeSelect from "../../../componets/fields/typeSelect/typeSelect";
import AddProductModal from "./components/addProduct/addProductModal";
import { TbBookmarkEdit } from "react-icons/tb";
import EditProduct from "./components/editProdeuct/editProdeuct";
import DeleteProduct from "./components/deleteProduct/deleteProduct";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};

const ManageProducts = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [isAddOpen, setAddOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [priceRange, setPriceRange] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByDate, setSortByDate] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { data, loading, refetch } = useRefetch(
    `/products?search=${searchTerm}&category=${category}&priceRange=${priceRange}&sortByDate=${sortByDate}&sortByPrice=${sortByPrice}&page=${page}&limit=${10}`
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

  const handleRefetch = async () => {
    setCategory("");
    setSearchTerm("");
    setPriceRange("");
    setSortByDate("");
    setSortByPrice("");
    setPage(1);
    refetch();
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditOpen(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };

  const headers = [
    { header: "#", accessor: "index" },
    { header: "Product Name", accessor: "name" },
    { header: "Category", accessor: "category" },
    { header: "Price", accessor: "price" },
    { header: "Created At", accessor: "createdAt" },
    { header: "Actions", accessor: "actions" },
  ];

  const modifiedProducts =
    data?.products?.map((product) => ({
      ...product,
      index: (
        <img
          className="h-7 w-7 rounded-md"
          src={product?.image}
          alt={product?.name}
        />
      ),
      category: (
        <span className="px-3 py-1 font-medium text-sm">
          {product?.category}
        </span>
      ),
      actions: (
        <>
          <button
            onClick={() => handleEditClick(product)}
            className="font-montserrat font-semibold text-lg px-2 py-1 rounded bg-blue-300 hover:bg-blue-400 transition-all duration-300"
          >
            <TbBookmarkEdit />
          </button>
          <button
            onClick={() => handleDeleteClick(product)}
            className="ml-2 font-montserrat font-semibold text-lg px-2 py-1 rounded bg-red-300 hover:bg-red-400 transition-all duration-300"
          >
            <MdOutlineDeleteForever />
          </button>
        </>
      ),
      createdAt: <span>{formatDate(product?.createdAt)}</span>,
    })) || [];

  return (
    <>
      <div className="relative py-5 shadow-md bg-white rounded-sm border border-opacity-25">
        <div className="absolute top-3 h-10 w-[2px] bg-blue-600" />
        <h1 className="px-3 md:px-5 text-xl font-montserrat font-semibold">
          Product Management Table
        </h1>
        <hr className="my-3 w-full" />
        <div className="flex flex-wrap items-start md:items-center justify-normal md:justify-between px-3 md:px-5 gap-2">
          <div className="flex flex-wrap items-center gap-2">
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
          <button
            onClick={() => setAddOpen(true)}
            className="flex items-center gap-2 px-4 py-3 rounded bg-blue-200 hover:bg-blue-400 font-montserrat font-semibold text-blue-700 hover:text-white text-xs sm:text-sm transition-all duration-300"
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
      <EditProduct
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
        product={selectedProduct}
        refetch={refetch}
      />
      <DeleteProduct
        isOpen={isDeleteOpen}
        onClose={() => setDeleteOpen(false)}
        id={selectedProduct?._id}
        refetch={refetch}
      />
    </>
  );
};

export default ManageProducts;
