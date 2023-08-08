import { AuthApiService } from "../../interfaces/AuthServiceInterface";
import { ILogin } from "../../interfaces/IApiRequests";
import { IAuthResponse } from "../../interfaces/IApiResponses";

class AuthRestApiService implements AuthApiService {
  async login(data: ILogin): Promise<IAuthResponse> {
    // Implement REST API login logic here
    return true; // Placeholder
  }

  async logout(): Promise<boolean> {
    // Implement REST API logout logic here
    return true; // Placeholder
  }
  // Add other methods as needed
}
const authRestApiService = new AuthRestApiService()

export default authRestApiService;
