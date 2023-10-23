import { IUser } from "@/interfaces/IUser";
import { BaseApiResponse } from "./common/BaseApiResponse";

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
  data: IUser;
  message: string;
}

/***********  LOGIN  ***********/

export interface ILoginRequest {
  emailAddress: string;
  password: string;
}

/***********  ACCOUNT VALIDATION  ***********/
export interface IEmailRequest {
  emailAddress: string;
}

export interface IValidateVerifyAccountRequest {
  emailAddress: string;
  otp: string;
}

export interface IValidateForgotPasswordRequest extends IEmailRequest {
  otp: number;
  password: string;
}
