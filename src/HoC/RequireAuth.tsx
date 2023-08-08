import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllRouteConstants } from "../router/RouteConstants";
import PageLoader from "../components/Loaders/PageLoader/PageLoader";
import { isTokenExpired } from "../utils/validateJWT";

export interface RequireAuthProps {
  children: ReactElement;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true)

  useEffect(() => {
    setPageLoading(true)
    const token = localStorage.getItem('userToken') ?? ''
    if (!token || isTokenExpired(token)) {
      navigate(AllRouteConstants.auth.index)
    }
    setPageLoading(false)
  }, []);

  if (pageLoading) {
    return <PageLoader />
  }

  return children
}
