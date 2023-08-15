import { ILogin } from "../../interfaces/IApiRequests";
import { IAuthResponse } from "../../interfaces/IApiResponses";

// Define interfaces for API services
export interface AuthApiService {
  login(data: ILogin): Promise<IAuthResponse>;
  logout(): Promise<boolean>;
  // Add other methods as needed
}
