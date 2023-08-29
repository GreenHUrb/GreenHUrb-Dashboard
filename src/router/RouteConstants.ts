/**
 * This module contains route constants that define the paths for different pages in the application.
 * These constants are designed to provide flexibility, allowing their values to be modified dynamically.
 */
export const AllRouteConstants = {
  auth: {
    index: "/auth",
    login: "/auth/signin",
    signup: "/auth/signup",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    otp: "/auth/otp",
    tAndC: "/auth/tandc",
  },
  main: {
    index: "/"
  },
  products: {
    index: "/products"
  },
  payments: {
    index: "/payments"
  },
  transactions: {
    index: "/transactions"
  },
  settings: {
    index: "/settings"
  },
};
