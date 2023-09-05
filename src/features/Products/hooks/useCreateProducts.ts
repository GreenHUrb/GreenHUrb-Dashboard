import { useForm } from "../../../hooks/useForm";
import { IProductForm } from "../interfaces/IProduct";
import { emptyValidator } from "../../../utils/validators/emptyValidator";
import { useEffect, useState } from "react";

interface IUseProductAction {
  action: IProductAction;
  product?: IProductForm;
}
type IProductAction = "add" | "view" | "edit";

const useProductAction = (data: IUseProductAction) => {
  const { action, product } = data;

  // Initialize form for account profile
  const productForm = useForm<IProductForm>(
    {
      productImages: product?.productImages ?? [],
      productName: product?.productName ?? "",
      productCategory: product?.productCategory ?? "",
      productSubCategory: product?.productSubCategory ?? "",
      productAvailability: product?.productAvailability ?? "",
      quantity: product?.quantity ?? "",
      weight: product?.weight ?? "",
      weightUnit: product?.weightUnit ?? "kg",
      price: product?.price ?? "",
      priceBid: product?.priceBid ?? "",
      description: product?.description ?? "",
      tags: product?.tags ?? [],
      sharedPurchase: product?.sharedPurchase ?? false
    },
    {
      description: emptyValidator,
      price: emptyValidator,
      priceBid: emptyValidator,
      productAvailability: emptyValidator,
      productCategory: emptyValidator,
      productImages: emptyValidator,
      productName: emptyValidator,
      productSubCategory: emptyValidator,
      quantity: emptyValidator,
      tags: emptyValidator,
      weight: emptyValidator,
      weightUnit: emptyValidator
    }
  );

  const handleProductFormChange = (key: keyof IProductForm, value: string | string[] | File[]) => {
    return productForm.onChange(key, value);
  };
  const handleProductImageAdd = (value: File) => {
    const currentImages = productForm.form.productImages;
    return productForm.onChange("productImages", [...currentImages, value]);
  };

  const handleProductImageDelete = (value: File) => {
    const currentImages = productForm.form.productImages;
    return productForm.onChange("productImages", [...currentImages, value]);
  };

  const [allProductImagesString, setAllProductImagesString] = useState<{
    data: string[];
    loading: boolean;
  }>({
    data: [],
    loading: false
  });

  const convertFileToReadableStream = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        const dataURL = reader.result as any;
        const byteString = atob(dataURL?.split(",")[1]);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        const imageBlob = new Blob([arrayBuffer], { type: "image/jpeg" });

        // Create an image URL
        const imageUrl = URL.createObjectURL(imageBlob);

        // Resolve the promise with the image URL
        resolve(imageUrl);
      };

      reader.onerror = function (error) {
        // Reject the promise in case of an error
        reject(error);
      };
    });
  };

  const handle = async () => {
    try {
      setAllProductImagesString({ ...allProductImagesString, loading: true }); // Set loading to true

      const imagePromises = productForm.form.productImages.map(image =>
        convertFileToReadableStream(image)
      );

      const allImages = await Promise.all(imagePromises);

      setAllProductImagesString({ data: allImages, loading: false }); // Set loading to false when done
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    handle();
  }, [productForm.form.productImages]);

  return {
    form: productForm.form,
    formErrors: productForm.formErrors,
    handleProductFormChange,
    handleProductImageAdd,
    allProductImagesString
  };
};

export default useProductAction;
