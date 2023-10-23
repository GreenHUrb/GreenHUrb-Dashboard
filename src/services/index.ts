// import { baseURL } from "@/libs";
import { AuthService } from "./Auth.service";
import { ProductService } from "./Product.service";

export * from "./interfaces";

const baseURL = "http://localhost:8000";

export const Services = {
  Auth: new AuthService(baseURL),
  Product: new ProductService(baseURL)
};
