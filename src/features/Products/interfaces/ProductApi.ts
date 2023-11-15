interface IProductServiceApiResponse<T> {
  message: string;
  data: T;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
}

export interface ISubCategory {
  id: string;
  name: string;
  category_id: string;
}

interface IProductBase {
  id: string;
  sku: string;
  name: string;
  description: string;
  availability_id: string;
  price: number;
  price_bid: number;
  weight: number;
  weight_unit: string;
  quantity: number;
  tags: string;
  status: "AVAILABLE";
  is_active: boolean;
}

export interface IProductVariant extends IProductBase {
  product_id: string;
  image: string;
  image_id: string;
}

export interface IProduct extends IProductBase {
  brand_id: string;
  category_id: string;
  sub_category_id: string;
  availability_id: string;
  shared_purchase: boolean;
  is_active: boolean;
  category: ICategory;
  createdAt: string;
}

export interface IProductImage {
  image_id: string;
  image_url: string;
}

export interface IProductFullResponse {
  product: IProduct;
  variant: IProductVariant[];
  images: IProductImage[];
}

export interface IGetProductApiResponse
  extends IProductServiceApiResponse<IProductFullResponse[]> {}

export interface ICreateProductApiResponse
  extends IProductServiceApiResponse<IProductFullResponse> {}

export interface IGetCategoriesApiResponse extends IProductServiceApiResponse<ICategory[]> {}
export interface IGetSubCategoriesApiResponse extends IProductServiceApiResponse<ISubCategory[]> {}
export interface IGetAvailabilityApiResponse
  extends IProductServiceApiResponse<Omit<ICategory, "description">[]> {}

type ProductStatus = "AVAILABLE" | "UNAVAILABLE";

export interface ICreateProductRequest {
  product_name: string;
  product_description: string;
  product_weight_unit: string;
  category_id: string;
  sub_category_id: string;
  availability_id: string;
  product_price: number;
  product_price_bid: number;
  product_weight: number;
  product_status: ProductStatus;
  shared_purchase: boolean;
  product_tags: string[];
  product_quantity: number;
}
