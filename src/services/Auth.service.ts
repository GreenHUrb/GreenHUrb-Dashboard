import { axiosInstance } from "@libs";
import {
  AuthPlatform,
  IEmailRequest,
  ILoginRequest,
  ISignupRequest,
  IValidateForgotPasswordRequest,
  IVerifyAccountRequest
} from "./interfaces/AuthServiceInterface";

export class AuthService {
  private authUrl!: string;

  constructor(baseURL: string) {
    this.authUrl = `${baseURL}/auth`;
  }

  public async login(data: ILoginRequest) {
    return await axiosInstance.post(`/auth/login`, data);
  }

  public async signup(data: ISignupRequest) {
    return await axiosInstance.post(`/auth/register/farmer`, data);
  }

  public async googleAuth() {
    return await axiosInstance.get(`${this.authUrl}/google-auth`);
  }

  public async resendVerificationOtp(data: AuthPlatform) {
    return await axiosInstance.post(`/auth/verify-account/resend-otp`, data, {
      skipInterceptor: true
    });
  }

  public async verifyAccount(data: IVerifyAccountRequest) {
    return await axiosInstance.post(`/auth/verify-account`, data);
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
