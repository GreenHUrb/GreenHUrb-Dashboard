import { AuthUser } from "@/interfaces/IUser";

/***********  SIGNUP  ***********/

export interface ISignupRequest {
  fullName: string;
  emailAddress: string;
  password: string;
  roleId: string;
  phoneNumber: string;
  referralCode?: string;
}

export interface IUserRespone {
  data: AuthUser;
  message: string;
}

/***********  LOGIN  ***********/

export interface ILoginRequest {
  emailAddress: string;
  password: string;
}

/***********  ACCOUNT VALIDATION  ***********/
export interface IEmailRequest {
  platform: "email" | "phone";
  emailAddress: string;
}

export type AuthPlatform =
  | { platform: "email"; emailAddress: string }
  | { platform: "phone"; phoneNumber: string };

export type IVerifyAccountRequest = AuthPlatform & {
  otp: string;
};

export interface IValidateForgotPasswordRequest extends IEmailRequest {
  otp: number;
  password: string;
}
