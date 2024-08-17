import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Modal from "../../../../../../componets/modals/modal/modal";
import axiosCommon from "../../../../../../hooks/instance/axiosCommon";
import useImageUpload from "../../../../../../hooks/server/useImageUpload";
import TypeText from "../../../../../../componets/fields/typeText/typeText";
import TypeFile from "../../../../../../componets/fields/typeFile/typeFile";
import TypeSelect from "../../../../../../componets/fields/typeSelect/typeSelect";
import TypeTextArea from "../../../../../../componets/fields/typeTextArea/typeTextArea";
import PrimaryBtn from "../../../../../../componets/common/buttons/primaryBtn/primaryBtn";
import TypeMultiInput from "../../../../../../componets/fields/typeMultiInput/typeMultiInput";

const EditProduct = ({ isOpen, onClose, product, refetch }) => {
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    image: "",
    price: "",
    stock: "",
    category: "",
    brand: "",
    features: [],
    description: "",
  });

  const { uploadImage, loading: uploading } = useImageUpload();

  useEffect(() => {
    if (product) {
      setFormData({
        _id: product?._id || "",
        name: product?.name || "",
        image: product?.image || "",
        price: product?.price || "",
        stock: product?.stock || "",
        category: product?.category || "",
        brand: product?.brand || "",
        features: product?.features || [],
        description: product?.description || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = async (file) => {
    if (file) {
      try {
        const uploadedImageUrl = await uploadImage(file);
        setFormData((prevFormData) => ({
          ...prevFormData,
          image: uploadedImageUrl,
        }));
        toast.success("Image uploaded successfully");
      } catch (error) {
        console.error("Image upload failed:", error);
        toast.error("Image upload failed");
      }
    }
  };

  const handleFeaturesChange = (features) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      features,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosCommon.put(`/products/update`, formData);
      console.log("Product updated:", response.data);
      toast.success("Product updated successfully");
      refetch();
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product");
    }
  };

  return (
    <Modal className="max-w-3xl" isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="p-2 grid grid-cols-2 gap-3"
        noValidate
      >
        <h2 className="text-xl font-montserrat font-semibold col-span-2">
          Edit Product
        </h2>
        <TypeText
          name="name"
          placeholder="Set a name"
          value={formData.name}
          onChange={handleChange}
        />
        <TypeFile name="image" onChange={handleFileChange} />
        <TypeText
          name="price"
          placeholder="Set a price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />
        <TypeText
          name="stock"
          placeholder="Set stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
        />
        <TypeSelect
          options={[
            "Smartphones",
            "Laptops",
            "Cameras",
            "Audio",
            "Gaming",
            "Smart Home",
            "Office",
          ]}
          value={formData.category}
          onSelect={(value) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              category: value,
            }))
          }
          placeholder="Set category"
        />
        <TypeSelect
          options={[
            "Apple",
            "Dell",
            "LG",
            "Sony",
            "Bose",
            "Samsung",
            "Huawei",
            "Panasonic",
            "JBL",
            "Lenovo",
            "Microsoft",
            "Nikon",
            "Asus",
          ]}
          value={formData.brand}
          onSelect={(value) =>
            setFormData((prevFormData) => ({ ...prevFormData, brand: value }))
          }
          placeholder="Set brand"
        />
        <div className="col-span-2">
          <TypeMultiInput
            name="features"
            placeholder="Add some feature"
            values={formData.features}
            onChange={handleFeaturesChange}
          />
        </div>
        <div className="col-span-2">
          <TypeTextArea
            name="description"
            placeholder="Set description for the product"
            value={formData.description}
            onChange={handleChange}
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
            {uploading ? "Uploading..." : "Update"}
          </PrimaryBtn>
        </div>
      </form>
    </Modal>
  );
};

EditProduct.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  product: PropTypes.object,
  refetch: PropTypes.func,
};

export default EditProduct;
