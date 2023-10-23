import { baseURL, axiosInstance } from "@libs";
import {
  ILoginRequest,
  ISignupRequest,
  IEmailRequest,
  IValidateForgotPasswordRequest,
  IValidateVerifyAccountRequest
} from "./interfaces/AuthServiceInterface";

export class ProductService {
  private productUrl!: string;

  constructor(baseURL: string) {
    this.productUrl = `${baseURL}/product`;
  }

  public async getProductCategories() {
    return await axiosInstance.get(`${this.productUrl}/category`);
  }
  public async getProductSubCategories(id: string) {
    return await axiosInstance.get(`${this.productUrl}/subcategory`, {
      params: { category_id: id }
    });
  }

  public async getProductAvailability() {
    return await axiosInstance.get(`${this.productUrl}/availability`);
  }

  // Product
  public async createProduct(data: FormData) {
    return await axiosInstance.post(`${this.productUrl}`, data, {});
  }

  public async updateProduct(data: FormData, id: string) {
    return await axiosInstance.patch(`${this.productUrl}/product/${id}`, data);
  }

  public async deleteProduct(id: string) {
    return await axiosInstance.delete(`${this.productUrl}/`, { params: { id } });
  }

  public async getFarmerProducts() {
    return await axiosInstance.get(`${this.productUrl}/farmer`,);
  }

  // Variant
  public async createVariant(data: ILoginRequest) {
    return await axiosInstance.post(`${this.productUrl}/availability`, data);
  }

  public async updateVariant(data: ILoginRequest) {
    return await axiosInstance.post(`${this.productUrl}/availability`, data);
  }

  public async deleteVariant(data: ILoginRequest) {
    return await axiosInstance.post(`${this.productUrl}/availability`, data);
  }

  public async getProductVariants(data: ILoginRequest) {
    return await axiosInstance.post(`${this.productUrl}/availability`, data);
  }
}
