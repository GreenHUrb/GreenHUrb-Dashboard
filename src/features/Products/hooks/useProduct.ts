import { useForm } from "../../../hooks/useForm";
import { emptyValidator } from "../../../utils/validators/emptyValidator";
import { useState } from "react";
import { ICreateProductRequest, IProduct } from "../interfaces/ProductApi";
import { convertFileToReadableStream } from "../utils/fileToStreamConverter";
import { useProductApi } from "../services";
import { makeToast } from "@/libs";
import { useNavigate } from "react-router-dom";
import { AllRouteConstants } from "@/router";

interface IUseProductAction {
  action: IProductAction;
  product?: IProduct;
}
type IProductAction = "add" | "view" | "edit";

interface IProductImagesState {
  images: { file: File; url: string }[];
  loading: boolean;
}

/**
 * Custom hook for managing product-related data and actions.
 *
 * @param {IUseProductAction} data - Data and actions related to product management.
 * @returns {Object} An object containing product-related data and functions.
 */
const useProduct = (data: IUseProductAction) => {
  const { action, product } = data;

  const navigate = useNavigate();

  // Create Product Api Handlers
  const { createProduct } = useProductApi();

  // Product Form
  const productForm = useForm<ICreateProductRequest>(
    {
      product_name: product?.name ?? "",
      product_description: product?.description ?? "",
      product_weight_unit: product?.weight_unit ?? "",
      category_id: product?.category_id ?? "",
      sub_category_id: product?.sub_category_id ?? "",
      product_weight: product?.weight ?? 0,
      product_quantity: product?.quantity ?? 0,
      availability_id: product?.availability_id ?? "",
      product_price: product?.price ?? 0,
      product_status: product?.status ?? "AVAILABLE",
      shared_purchase: product?.shared_purchase ?? false,
      product_tags: product?.tags.split(", ") ?? [],
      product_price_bid: product?.price_bid ?? 0
    },
    {
      product_name: emptyValidator,
      product_description: emptyValidator,
      product_weight_unit: emptyValidator,
      category_id: emptyValidator,
      sub_category_id: emptyValidator,
      product_weight: emptyValidator,
      product_quantity: emptyValidator,
      availability_id: emptyValidator,
      product_price: emptyValidator,
      product_status: emptyValidator,
      shared_purchase: emptyValidator,
      product_tags: emptyValidator,
      product_price_bid: emptyValidator
    }
  );

  // This is the onchange function for the product form
  const handleProductFormChange = (key: keyof ICreateProductRequest, value: string | string[]) => {
    return productForm.onChange(key, value);
  };

  // State to store all Product Images
  const [productImages, setProductImages] = useState<IProductImagesState>({
    images: [],
    loading: false
  });

  /**
   * Handles the addition of a single product image by processing a single file and updating the product images state.
   *
   * @param {File} value - A File object representing the image to be added.
   * @returns {Promise} A Promise that resolves when the image has been added, and the product images state is updated.
   */
  const handleProductImageAdd = async (value: File) => {
    setProductImages({ ...productImages, loading: true });

    try {
      const image_url = await convertFileToReadableStream(value);

      if (!image_url) return;

      const response = [...productImages.images, { file: value, url: image_url }];

      return setProductImages({
        ...productImages,
        loading: false,
        images: response
      });
    } catch (error) {
      return makeToast({ message: "Error Adding Images", type: "error", id: "image-error" });
    }
  };

  /**
   * Handles bulk addition of product images by processing a list of files and updating the product images state.
   *
   * @param {Array} files - An array of File objects representing the images to be added.
   * @returns {Promise} A Promise that resolves when the images have been added and the product images state is updated.
   */
  const handleProductImageBulkAdd = async (files: File[]) => {
    setProductImages({ ...productImages, loading: true });

    try {
      const response = [...productImages.images];

      await Promise.all(
        files.map(async file => {
          const image_url = await convertFileToReadableStream(file);

          if (!image_url) return;

          response.push({ file, url: image_url });
        })
      );

      console.log(response);

      return setProductImages({
        ...productImages,
        loading: false,
        images: response
      });
    } catch (error) {
      return makeToast({ message: "Error Adding Images", type: "error", id: "image-error" });
    }
  };

  /**
   * Handles the deletion of a single product image by filtering all images and updating the product images state.
   *
   * @param {number} id - A Strinng representing the id of image to be deleted.
   * @returns {Promise} A Promise that resolves when the image has been added, and the product images state is updated.
   */
  const handleImageDelete = (id: number) => {
    setProductImages({ ...productImages, loading: true });

    const filteredImages = productImages.images.filter((image, index) => index !== id);

    setProductImages({
      ...productImages,
      loading: false,
      images: filteredImages
    });

    return makeToast({
      message: "Deleted Image Successfully",
      type: "success",
      id: "delete-image"
    });
  };

  /**
   * Retrieves image resources based on the specified type from a list of product images.
   *
   * @param {string} type - The type of images to retrieve. Should be "file" or "url".
   * @returns {Array} An array of image resources based on the specified type.
   */
  const getAllImages = (type: "file" | "url") => {
    const response: any[] = [];

    productImages.images.map(image => {
      if (type === "file") {
        response.push(image.file);
      }

      if (type === "url") {
        response.push(image.url);
      }
    });

    return response;
  };

  /**
   * Formats product form data and image files into a FormData object for submission.
   *
   * @returns {FormData} A FormData object containing the formatted product data and image files.
   */
  const formatProductFormData = () => {
    const formData = new FormData();

    type ITest = {};

    for (let key in productForm.form) {
      formData.append(key, productForm.form[key as keyof ITest]);
    }

    const images = getAllImages("file");

    images.map(image => {
      formData.append("product_images", image);
    });

    productForm.form.product_tags?.map(tag => {
      formData.append("product_tags", tag);
    });
    return formData;
  };

  /**
   * Handles the creation of a product by validating form data, formatting it, and invoking the 'createProduct.handler'.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form event triggered when the form is submitted.
   */
  const handleCreateProduct: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const valid = productForm.validate();

    if (!valid) return;

    const product_data = formatProductFormData();

    const product = await createProduct.handler(product_data);

    if (!product) return;

    productForm.reset();

    setProductImages({
      images: [],
      loading: false
    });

    navigate(AllRouteConstants.products.index);
  };

  // Warning that toggles modal if user tries to leave page without completing form
  const [modalStates, setModalStates] = useState({
    exit_form: false,
    price_bid: false
  });

  const handleGoBack = () => {
    let formIsEmpty = true;

    const form = Object.entries(productForm.form);

    for (let item of form) {
      if (item[0] === "product_status" && item[1] === "AVAILABLE") continue;

      if (item[1] != "" || item[1] != false || item[1] != 0) {
        formIsEmpty = false;
      }
    }

    if (productImages.images.length >= 1) {
      formIsEmpty = false;
    }

    if (formIsEmpty) {
      navigate(AllRouteConstants.products.index);
    } else {
      setModalStates({ ...modalStates, exit_form: true });
    }
  };

  const toggleModalState = (type: "exit_form" | "price_bid", status: boolean) => {
    if (type === "exit_form") {
      setModalStates({ ...modalStates, exit_form: status });
    }

    if (type === "price_bid") {
      setModalStates({ ...modalStates, price_bid: status });
    }
  };

  return {
    product: {
      form: productForm.form,
      form_change: handleProductFormChange,
      formErrors: productForm.formErrors,
      create: handleCreateProduct,
      product_creating: createProduct.loading
    },

    images: {
      loading: productImages.loading,
      imageUrls: getAllImages("url"),
      add: handleProductImageAdd,
      bulkAdd: handleProductImageBulkAdd,
      delete: handleImageDelete
    },
    page: {
      handleGoBack,
      modalStates,
      toggleModalState
    }
  };
};

export default useProduct;
