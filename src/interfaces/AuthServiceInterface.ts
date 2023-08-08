import { ILogin } from "./IApiRequests";
import { IAuthResponse } from "./IApiResponses";

// Define interfaces for API services
export interface AuthApiService {
  login(data: ILogin): Promise<IAuthResponse>;
  logout(): Promise<boolean>;
  // Add other methods as needed
}
