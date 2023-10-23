import { useApi, useAppActions, useProductActions } from "@/hooks";
import {
  IGetAvailabilityApiResponse,
  IGetCategoriesApiResponse,
  IGetProductApiResponse,
  IGetSubCategoriesApiResponse
} from "../interfaces/ProductApi";
import { Services } from "@/services";

export const useProductInfoApi = () => {
  const { initializeProducts, addProduct, updateProduct, deleteProduct } = useProductActions();
  const { toggleAppLoader } = useAppActions();

  // GET CATEGORIES
  const getCategoriesRequest = useApi<IGetCategoriesApiResponse, null>(() => {
    return Services.Product.getProductCategories();
  });

  const handleGetCategories = async () => {
    const categories = await getCategoriesRequest.request();

    if (!categories) return;

    return categories;
  };

  // GET SUB CATEGORIES
  const getSubCategoriesRequest = useApi<IGetSubCategoriesApiResponse, string>(
    (category_id: string) => {
      return Services.Product.getProductSubCategories(category_id);
    }
  );

  const handleGetSubCategories = async (category_id: string) => {
    const subCategories = await getSubCategoriesRequest.request(category_id);

    if (!subCategories) return;

    return subCategories;
  };

  // GET AVAILABILITIES
  const getAvailabilityRequest = useApi<IGetAvailabilityApiResponse, null>(() => {
    return Services.Product.getProductAvailability();
  });

  const handleGetAvailability = async () => {
    const availabilities = await getAvailabilityRequest.request();

    if (!availabilities) return;

    return availabilities;
  };

  return {
    category: {
      loading: getCategoriesRequest.loading,
      data: getCategoriesRequest.data,
      handler: handleGetCategories
    },

    sub_category: {
      loading: getSubCategoriesRequest.loading,
      data: getSubCategoriesRequest.data,
      handler: handleGetSubCategories
    },

    availability: {
      loading: getAvailabilityRequest.loading,
      data: getAvailabilityRequest.data,
      handler: handleGetAvailability
    }
  };
};
