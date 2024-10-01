export const useGoogleLogin = () => {
  const googleLoginUrl = `http://localhost:8000/api/v1/auth/google`;

  return {
    googleLoginUrl
  };
};
