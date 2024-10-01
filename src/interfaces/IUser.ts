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

export interface User {
  id: string;
  fullName: string;
  phoneNumberVerified: boolean;
  emailVerified: boolean;
  referralCode: string | null;
  isVerified: boolean;
  isActive: boolean;
  roleId: string;
  acceptedTermsAndConditions: boolean;
  profileVisits: number;
}

export interface AuthUser {
  id: string;
  userId: string;
  emailAddress: string;
  phoneNumber: string | null;
  providerId: string | null;
  provider: string;
  user: User;
}
