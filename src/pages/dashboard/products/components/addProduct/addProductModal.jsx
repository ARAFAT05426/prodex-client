import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../../../../../componets/modals/modal/modal";
import axiosCommon from "../../../../../hooks/instance/axiosCommon";
import useImageUpload from "../../../../../hooks/server/useImageUpload";
import TypeText from "../../../../../componets/fields/typeText/typeText";
import TypeFile from "../../../../../componets/fields/typeFile/typeFile";
import TypeSelect from "../../../../../componets/fields/typeSelect/typeSelect";
import TypeMultiInput from "../../../../../componets/fields/typeMultiInput/typeMultiInput";
import TypeTextArea from "../../../../../componets/fields/typeTextArea/typeTextArea";
import PrimaryBtn from "../../../../../componets/common/buttons/primaryBtn/primaryBtn";

const AddProductModal = ({ isOpen, onClose, refetch }) => {
  const [error, setError] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState([]);
  const [uploadError, setUploadError] = useState("");

  const { uploadImage, loading: uploading } = useImageUpload();

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const stock = e.target.stock.value;
    const description = e.target.description.value;

    if (
      !name ||
      !image ||
      !price ||
      !stock ||
      !category ||
      !brand ||
      !features.length ||
      !description
    ) {
      return setError("Please fill out all fields before adding.");
    }
    setError("");

    try {
      const uploadedImageUrl = await uploadImage(image);
      const newProduct = {
        name,
        image: uploadedImageUrl,
        price,
        stock,
        category,
        brand,
        features,
        description,
      };
      const responce = await axiosCommon.post("/products/add", newProduct);
      console.log(responce);
      if (!responce) {
        return setError("Error adding product");
      }
      onClose();
      await refetch();
    } catch (err) {
      setUploadError(err.message || "Failed to upload image.");
    }
  };

  return (
    <Modal className="max-w-3xl" isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleAddProduct}
        className="p-2 grid grid-cols-2 gap-3"
        noValidate
      >
        <h2 className="text-xl font-montserrat font-semibold col-span-2">
          Add New Product
        </h2>
        {(error || uploadError) && (
          <p className="text-red-500 text-sm col-span-2">
            {error || uploadError}
          </p>
        )}

        <TypeText name="name" placeholder="Set a name" />
        <TypeFile name="image" onChange={setImage} required />
        <TypeText name="price" placeholder="Set a price" type="number" />
        <TypeText name="stock" placeholder="Set stock" type="number" />

        <TypeSelect
          options={["electric", "normal"]}
          onSelect={setCategory}
          placeholder="Set category"
        />
        <TypeSelect
          options={["Nike", "Puma"]}
          onSelect={setBrand}
          placeholder="Set brand"
        />
        <div className="col-span-2">
          <TypeMultiInput
            name="Features"
            placeholder="Add some feature"
            values={features}
            onChange={setFeatures}
          />
        </div>
        <div className="col-span-2">
          <TypeTextArea
            name="description"
            placeholder="Set description for the product"
          />
        </div>

        <div className="col-span-2 mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mr-3 px-4 py-2 font-montserrat font-semibold bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-sm"
          >
            Cancel
          </button>
          <PrimaryBtn type="submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Add Product"}
          </PrimaryBtn>
        </div>
      </form>
    </Modal>
  );
};

AddProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default AddProductModal;
