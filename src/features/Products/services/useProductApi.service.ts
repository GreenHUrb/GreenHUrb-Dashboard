import { useApi, useAppActions, useProductActions } from "@/hooks";
import { ICreateProductApiResponse, IGetProductApiResponse, IProduct, IProductFullResponse } from "../interfaces/ProductApi";
import { Services } from "@/services";
import { makeToast } from "@/libs";

interface ApiHandlerOptions {
  useAppLoader?: boolean;
}
export const useProductApi = () => {
  const { initializeProducts, addProduct, updateProduct, deleteProduct } = useProductActions();
  const { toggleAppLoader } = useAppActions();

  const createProductRequest = useApi<ICreateProductApiResponse, FormData>((data: FormData) => {
    return Services.Product.createProduct(data);
  });

  const handleCreateProduct = async (product_data: FormData) => {
    createProductRequest.reset();

    const product = await createProductRequest.request(product_data);

    if (!product) return;

    addProduct(product.data);

    makeToast({ message: "Product Created Successfully", type: "success", id: "create-product" });

    return product;
  };

  //   UPDATE PRODUCT
  const updateProductRequest = useApi<IProduct, { product: FormData; id: string }>(
    (data: { product: FormData; id: string }) => {
      return Services.Product.updateProduct(data.product, data.id);
    }
  );

  const handleUpdateProduct = async (product_data: FormData, product_id: string) => {
    const product = await updateProductRequest.request({ product: product_data, id: product_id });

    if (!product) return;

    updateProduct({ product, product_id });

    makeToast({ message: "Product Updated Successfully", type: "success", id: "update-product" });
  };

  //   DELETE PRODUCT
  const deleteProductRequest = useApi<null, string>((product_id: string) => {
    return Services.Product.deleteProduct(product_id);
  });

  const handleDeleteProduct = async (product_id: string) => {
    await deleteProductRequest.request(product_id);

    deleteProduct({
      product_id
    });

    makeToast({ message: "Product Deleted Successfully", type: "success", id: "delete-product" });
  };

  //   GET PRODUCT
  const getFarmerProductRequest = useApi<IGetProductApiResponse, null>(() => {
    return Services.Product.getFarmerProducts();
  });

  const handleGetFarmerProduct = async ({ useAppLoader }: ApiHandlerOptions) => {
    if (useAppLoader) {
      toggleAppLoader(true);
    }

    const products = await getFarmerProductRequest.request();

    if (!products) return;

    initializeProducts(products.data);

    makeToast({ message: "Products Fetched Successfully", type: "success", id: "fetch-product" });

    toggleAppLoader(false);
  };

  return {
    createProduct: {
      loading: createProductRequest.loading,
      data: createProductRequest.data,
      handler: handleCreateProduct
    },

    updateProduct: {
      loading: updateProductRequest.loading,
      data: updateProductRequest.data,
      handler: handleUpdateProduct
    },

    deleteProduct: {
      loading: deleteProductRequest.loading,
      data: deleteProductRequest.data,
      handler: handleDeleteProduct
    },

    getFarmerProducts: {
      loading: getFarmerProductRequest.loading,
      data: getFarmerProductRequest.data,
      handler: handleGetFarmerProduct
    }
  };
};
