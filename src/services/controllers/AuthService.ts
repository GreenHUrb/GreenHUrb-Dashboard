import { AuthApiService } from "../../interfaces/AuthServiceInterface";
import { ILogin } from "../../interfaces/IApiRequests";
import { IAuthResponse } from "../../interfaces/IApiResponses";

// General auth service class
class AuthService {
  private apiService: AuthApiService;

  constructor(apiService: AuthApiService) {
    this.apiService = apiService;
  }

  async login(data: ILogin): Promise<IAuthResponse> {
    return this.apiService.login(data);
  }

  async logout(): Promise<boolean> {
    return this.apiService.logout();
  }
}

export default AuthService;
