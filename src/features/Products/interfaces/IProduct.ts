export interface IProduct {
  "S/N": string;
  Date: string;
  productName: string;
  productImage: string[];
  productCategory: string;
  weight: string;
  amount: string;
}

export interface IProductForm {
  productImages: File[];
  productName: string;
  productCategory: string;
  productSubCategory: string;
  productAvailability: string;
  quantity: string;
  weight: string;
  weightUnit: string;
  price: string;
  priceBid: string;
  description: string;
  tags: string[];
  sharedPurchase: boolean;
}
