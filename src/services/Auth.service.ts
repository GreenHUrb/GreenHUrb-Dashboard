import { baseURL, axiosInstance } from "@libs";
import {
  ILoginRequest,
  ISignupRequest,
  IEmailRequest,
  IValidateForgotPasswordRequest,
  IValidateVerifyAccountRequest,
  IGoogleAuth
} from "./interfaces/AuthServiceInterface";

export class AuthService {
  private authUrl!: string;

  constructor(baseURL: string) {
    this.authUrl = "http://localhost:8001";
  }

  public async login(data: ILoginRequest) {
    return await axiosInstance.post(`${this.authUrl}/login`, data);
  }

  public async signup(data: ISignupRequest) {
    return await axiosInstance.post(`${this.authUrl}/signup`, data);
  }

  public async googleAuth(data: IGoogleAuth) {
    return await axiosInstance.post(`${this.authUrl}/google-auth`, data);
  }

  public async verifyAccount(data: IEmailRequest) {
    return await axiosInstance.post(`${this.authUrl}/verify-account`, data);
  }

  public async validateVerifyAccount(data: IValidateVerifyAccountRequest) {
    return await axiosInstance.post(`${this.authUrl}/verify-account/validate`, data);
  }

  public async forgotPassword(data: IEmailRequest) {
    return await axiosInstance.post(`${this.authUrl}/forgot-password`, data);
  }

  public async validateForgotPassword(data: IValidateForgotPasswordRequest) {
    return await axiosInstance.post(`${this.authUrl}/forgot-password/validate`, data);
  }

  public async logout() {
    return await axiosInstance.post(`${this.authUrl}/logout`);
  }

  public async refreshAccessToken() {
    return await axiosInstance.get(`${this.authUrl}/refresh-token`);
  }
}
