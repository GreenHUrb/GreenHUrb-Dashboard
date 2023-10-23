import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Components and Styles

import "../styles/create_product_styles.scss";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { BackButton } from "../../../components/BackButton";
import AddProductImageIcon from "../../../assets/icons/AddProducticon.svg";
import { Spinner } from "../../../components/Spinner";
import { MdDelete } from "react-icons/md";
import { Input, TextArea } from "../../../components/form/Input";
import { handleFormatLabelForId } from "../../../utils/formUtils";
import { useLocation } from "react-router-dom";
import { FormSelect } from "../../../components/form/formSelect";
import {
  convertDataToDropdownData,
  getDropdownValue
} from "../../../utils/convertDataToDropdownData";
import { weightUnits } from "../data/ProductWeightUnits";
import { Button } from "../../../components/Button";
import { Checkbox } from "../../../components/form/Checkbox";
import useProduct from "../hooks/useProduct";
import { useProductInfoApi } from "../services/useProductInfoApi.service";
import { ExitProductForm, PriceBidModal } from "../components/Modals";

export const CreateProduct = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/");
  const productModes = pathSegments.includes("edit")
    ? "edit"
    : pathSegments.includes("add")
    ? "add"
    : "view";

  const [productMode, setProductMode] = useState<"edit" | "view" | "add">(productModes);

  const { images, product, page } = useProduct({ action: productMode });

  const { category, sub_category, availability } = useProductInfoApi();

  const handleImageUpload: React.ChangeEventHandler<HTMLInputElement> = async e => {
    const files = e.target.files;

    if (!files || files.length <= 0) return;

    const all_images: File[] = Array.from(files);

    return await images.bulkAdd(all_images);
  };

  useEffect(() => {
    category.handler();
    availability.handler();
  }, []);

  useEffect(() => {
    const category_id = product.form.category_id;
    if (category_id) {
      sub_category.handler(category_id);
    }
  }, [product.form.category_id]);

  return (
    <main className="create_product animate__animated animate__fadeIn">
      {/* Back button */}
      <BackButton
        locationName="Back to Products"
        locationRoute={AllRouteConstants.products.index}
        customFunc={page.handleGoBack}
      />

      {page.modalStates.exit_form && (
        <ExitProductForm onClose={() => page.toggleModalState("exit_form", false)} />
      )}

      {page.modalStates.price_bid && (
        <PriceBidModal onClose={() => page.toggleModalState("price_bid", false)} />
      )}

      <form className="create_product_container" onSubmit={product.create}>
        <div className="create_product_left_form create_product_form">
          <div>
            <div className="product_image">
              <label className="product_image_label">Product Image</label>
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
                {images.imageUrls.map((image, index) => (
                  <div className="product_image_box" key={index}>
                    <div className="product_image_box_img_container">
                      <div className="image_overlay" />
                      <MdDelete
                        className="delete_uploaded_image"
                        onClick={() => images.delete(index)}
                      />

                      {images.loading ? (
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
                error={product.formErrors.product_name}
                label="Product Name"
                inputProps={{
                  placeholder: "Enter your Product Name",
                  required: true,
                  onChange: e => product.form_change("product_name", e.target.value),
                  readOnly: productMode === "view" ? true : false
                }}
              />
            </div>

            <div className="input">
              <FormSelect
                id={handleFormatLabelForId("Product Category")}
                loading={category.loading}
                error={product.formErrors.category_id}
                options={convertDataToDropdownData(category.data?.data!, "name", "id")}
                label="Product Category"
                dropdownProps={{
                  placeholder: "Select your Product Category",
                  required: true,
                  onChange: (val: { value: string; label: string }) => {
                    return product.form_change("category_id", val.value);
                  },
                  value: getDropdownValue(
                    category.data?.data!,
                    "name",
                    "id",
                    product.form.category_id
                  ),
                  readOnly: productMode === "view"
                }}
              />
            </div>

            <div className="input">
              <FormSelect
                id={handleFormatLabelForId("Product Sub Category")}
                loading={sub_category.loading}
                error={product.formErrors.sub_category_id}
                options={convertDataToDropdownData(sub_category.data?.data!, "name", "id")}
                label="Product Sub Category"
                dropdownProps={{
                  placeholder: "Select your Product Sub Category",
                  required: true,
                  readOnly: productMode === "view",
                  onChange: (val: { value: string; label: string }) => {
                    return product.form_change("sub_category_id", val.value);
                  },
                  value: getDropdownValue(
                    sub_category.data?.data!,
                    "name",
                    "id",
                    product.form.sub_category_id
                  )
                }}
              />
            </div>

            <div className="input">
              <FormSelect
                id={handleFormatLabelForId("Product Availability")}
                error={product.formErrors.availability_id}
                options={convertDataToDropdownData(availability.data?.data!, "name", "id")}
                label="Product Availability"
                dropdownProps={{
                  placeholder: "Choose when product will be available",
                  required: true,
                  readOnly: productMode === "view",
                  onChange: (val: { value: string; label: string }) => {
                    return product.form_change("availability_id", val.value);
                  },
                  value: getDropdownValue(
                    availability.data?.data!,
                    "name",
                    "id",
                    product.form.availability_id
                  )
                }}
              />
            </div>

            <div className="side_inputs">
              <div className="side_inputs-item">
                <Input
                  id={handleFormatLabelForId("Product Quantity")}
                  error={product.formErrors.product_quantity}
                  label="Product Quantity"
                  inputProps={{
                    placeholder: "3",
                    required: true,
                    type: "number",
                    onChange: e => product.form_change("product_quantity", e.target.value),
                    readOnly: productMode === "view" ? true : false
                  }}
                />
              </div>
              <div className="side_inputs-item weight">
                <Input
                  id={handleFormatLabelForId("Product Weight")}
                  error={product.formErrors.product_weight}
                  label=" Weight"
                  inputProps={{
                    placeholder: "5",
                    required: true,
                    type: "number",
                    onChange: e => product.form_change("product_weight", e.target.value),
                    readOnly: productMode === "view" ? true : false
                  }}
                />
                <FormSelect
                  id={handleFormatLabelForId("weight unit")}
                  error={product.formErrors.product_weight_unit}
                  options={convertDataToDropdownData(weightUnits, "name", "id")}
                  label=""
                  dropdownProps={{
                    placeholder: "kg",
                    required: true,
                    onChange: (val: { value: string; label: string }) => {
                      return product.form_change("product_weight_unit", val.value);
                    },
                    readOnly: productMode === "view"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="create_product_right_form create_product_form">
          <div className="input product_price_input">
            <Input
              id={handleFormatLabelForId("Product Price")}
              error={product.formErrors.product_price}
              label="Product Price"
              leftIcon={<h1>N</h1>}
              inputProps={{
                placeholder: "1500",
                type: "number",
                required: true,
                onChange: e => product.form_change("product_price", e.target.value),
                readOnly: productMode === "view" ? true : false
              }}
            />
          </div>
          <div className="input product_price_input">
            <Input
              id={handleFormatLabelForId("Price Bid")}
              error={product.formErrors.product_price_bid}
              label={
                <div>
                  Price Bid{" "}
                  <Button
                    type="button"
                    onClick={() => page.toggleModalState("price_bid", true)}
                    variant="text"
                    label="(What is a Price Bid?)"
                  />
                </div>
              }
              leftIcon={<h1>N</h1>}
              inputProps={{
                placeholder: "1500",
                type: "number",
                required: true,
                onChange: e => product.form_change("product_price_bid", e.target.value),
                readOnly: productMode === "view" ? true : false
              }}
            />
          </div>

          <div className="input ">
            <TextArea
              id={handleFormatLabelForId("Description")}
              error={product.formErrors.product_description}
              label="Description"
              rows={4}
              textareaProps={{
                placeholder: "E.g: New Benue yam to be ready in 10 days",
                required: true,
                onChange: e => product.form_change("product_description", e.target.value),
                readOnly: productMode === "view" ? true : false
              }}
            />
          </div>

          <div className="input ">
            <TextArea
              id={handleFormatLabelForId("Tags")}
              error={product.formErrors.product_tags}
              label="Tags"
              rows={3}
              textareaProps={{
                placeholder:
                  "Put keywords that are associated with products to aid consumer search. E.g fresh vegetables.",
                required: true,
                onChange: e => product.form_change("product_tags", e.target.value.split(", ")),
                readOnly: productMode === "view" ? true : false
              }}
            />
          </div>

          <div className="input shared_purchase_checkbox ">
            <Checkbox label={"Shared Purchase"} />
          </div>

          {productMode === "add" && (
            <>
              <Button
                variant="contained"
                label="Add Product"
                customClassName="create_product_submit_button"
                loading={product.product_creating}
              />
              <Button
                variant="text"
                label="Save as Draft"
                customClassName="create_product_submit_button"
                loading={product.product_creating}
                type="button"
              />
            </>
          )}

          {productMode === "view" && (
            <Button
              variant="contained"
              label="Edit Product"
              customClassName="create_product_submit_button"
            />
          )}
        </div>
      </form>
    </main>
  );
};
