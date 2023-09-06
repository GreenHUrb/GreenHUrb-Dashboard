import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Components and Styles

import "../styles/create_product_styles.scss";
import { AllRouteConstants } from "../../../router/RouteConstants";
import BackButton from "../../../components/BackButton/SettingsBackButton";
import useProductAction from "../hooks/useCreateProducts";

import AddProductImageIcon from '../../../assets/icons/AddProducticon.svg'
import Spinner from "../../../components/Spinner/Spinner";
import { MdDelete } from "react-icons/md";
import { IProductForm } from "../interfaces/IProduct";
import Input from "../../../components/form/Input/Input";
import { handleFormatLabelForId } from "../../../utils/formUtils";
import { useLocation } from "react-router-dom";
import FormSelect from "../../../components/form/formSelect/FormSelect";
import { convertDataToDropdownData } from "../../../utils/convertDataToDropdownData";
import { productCategories } from "../data/ProductCategories";
import { availabilityOptions } from "../data/ProductAvailability";
import { weightUnits } from "../data/ProductWeightUnits";

export const CreateProduct = () => {

  const { pathname } = useLocation();
  const pathSegments = pathname.split("/");
  const productModes = pathSegments.includes("edit")
    ? "edit"
    : pathSegments.includes("add")
      ? "add"
      : "view";

  const [productMode, setProductMode] = useState<"edit" | "view" | 'add'>(productModes);


  const dummyProductData: IProductForm = {
    productImages: [
      // dataURLtoFile("https://randomuser.me/api/portraits/women/65.jpg", 'Product 1'
      // )
    ],
    productName: "Sample Product",
    productCategory: "Electronics",
    productSubCategory: "Smartphones",
    productAvailability: "In Stock",
    quantity: "100",
    weight: "150",
    weightUnit: "grams",
    price: "599.99",
    priceBid: "499.99",
    description: "This is a sample product description.",
    tags: ["sample", "electronics", "smartphone"],
    sharedPurchase: true,
  };

  // Initialize custom hooks and state variables
  const { form, allProductImagesString, handleProductImageAdd, formErrors, handleProductFormChange } = useProductAction({ action: 'edit', product: dummyProductData })





  const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e?.target?.files;
    for (let file of files!) {
      handleProductImageAdd(file)
    }

  }

  return (
    <main className="create_product animate__animated animate__fadeIn">
      {/* Back button */}
      <BackButton locationName="Back to Products" locationRoute={AllRouteConstants.products.index} />

      <div className="create_product_container">
        <div className="create_product_left_form create_product_form">
          <form>
            <div className="product_image">
              <label className="product_image_label">
                Product Image
              </label>
              <div className="product_image_container">

                {/* Add Product Image Button */}
                <label className="product_image_add product_image_box">
                  <div className="product_image_add_container">
                    <img alt="camera" src={AddProductImageIcon} />
                    <input
                      id="uploadFile"
                      type="file"
                      accept="image/png, image/jpg, image/gif, image/jpeg"
                      onChange={handleImageUpload}
                      multiple
                    />
                  </div>
                </label>

                {/* Render Uploaded Images */}
                {allProductImagesString.data.map((image, index) => (
                  <div className="product_image_box" key={index}>
                    <div className="product_image_box_img_container">
                      <div className="image_overlay" />
                      <MdDelete className="delete_uploaded_image" />

                      {allProductImagesString.loading ? (
                        <div className="product_image_loader">
                          <Spinner />
                        </div>
                      ) : (
                        <LazyLoadImage src={image} alt={`Image ${index}`} />
                      )}
                    </div>
                  </div>
                ))}
              </div>


            </div>

            <div className="input">
              <Input
                id={handleFormatLabelForId("Product Name")}
                error={formErrors.productName}
                label="Product Name"
                inputProps={{
                  placeholder: "Enter your Product Name",
                  required: true,
                  onChange: e => handleProductFormChange("productName", e.target.value),
                  readOnly: productMode === "view" ? true : false
                }}
              />
            </div>

            <div className="input">
              <FormSelect
                id={handleFormatLabelForId("Product Category")}
                error={formErrors.productCategory}
                options={convertDataToDropdownData(productCategories, 'name', 'id')}
                label="Product Category"
                dropdownProps={{
                  placeholder: "Select your Product Category",
                  required: true,
                  onChange: (val: { value: string; label: string }) => {
                    return handleProductFormChange("productCategory", val.value)
                  },
                  readOnly: productMode === "view"
                }}
              />

            </div>

            <div className="input">
              <FormSelect
                id={handleFormatLabelForId("Product Sub Category")}
                error={formErrors.productSubCategory}
                options={convertDataToDropdownData(productCategories.find((category) => category.id === form.productCategory!)?.subcategories ?? [], 'name', 'id')}
                label="Product Sub Category"
                dropdownProps={{
                  placeholder: "Select your Product Sub Category",
                  required: true,
                  readOnly: productMode === "view",
                  onChange: (val: { value: string; label: string }) => {
                    return handleProductFormChange("productSubCategory", val.value)
                  },
                }}
              />

            </div>

            <div className="input">
              <FormSelect
                id={handleFormatLabelForId("Product Availability")}
                error={formErrors.productAvailability}
                options={convertDataToDropdownData(availabilityOptions, 'name', 'id')}
                label="Product Availability"
                dropdownProps={{
                  placeholder: "Choose when product will be available",
                  required: true,
                  onChange: (val: { value: string; label: string }) => {
                    return handleProductFormChange("productAvailability", val.value)
                  },
                  readOnly: productMode === "view"
                }}
              />

            </div>


            <div className="side_inputs">
              <div className="side_inputs-item">
                <Input
                  id={handleFormatLabelForId("Product Quantity")}
                  error={formErrors.quantity}
                  label="Product Quantity"
                  inputProps={{
                    placeholder: "3",
                    required: true,
                    type: 'number',
                    onChange: e => handleProductFormChange("quantity", e.target.value),
                    readOnly: productMode === "view" ? true : false
                  }}
                />

              </div>
              <div className="side_inputs-item weight">
                <Input
                  id={handleFormatLabelForId("Product Weight")}
                  error={formErrors.weight}
                  label=" Weight"
                  inputProps={{
                    placeholder: "5",
                    required: true,
                    type: 'number',
                    onChange: e => handleProductFormChange("weight", e.target.value),
                    readOnly: productMode === "view" ? true : false
                  }}
                />
                <FormSelect
                  id={handleFormatLabelForId("weight unit")}
                  error={formErrors.weightUnit}
                  options={convertDataToDropdownData(weightUnits, 'name', 'id')}
                  label=""
                  dropdownProps={{
                    placeholder: "kg",
                    required: true,
                    onChange: (val: { value: string; label: string }) => {
                      return handleProductFormChange("weightUnit", val.value)
                    },
                    readOnly: productMode === "view"
                  }}
                />
              </div>


            </div>
          </form>
        </div>

        <div className="create_product_right_form create_product_form">

        </div>
      </div>
    </main>
  );
};
