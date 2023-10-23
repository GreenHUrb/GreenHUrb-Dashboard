export interface IUser {
  emailAddress: string;
  emailVerified: boolean;
  fullName: string;
  id: string;
  isActive: boolean;
  isVerified: boolean;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  referralCode: string | null;
  roleId: string;
}
