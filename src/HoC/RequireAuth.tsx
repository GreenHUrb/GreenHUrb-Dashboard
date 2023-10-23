import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageLoader } from "@components";
import { useAppActions, useAppSelector } from "@/hooks";
import { AllRouteConstants } from "@/router";

interface RequireAuthProps {
  children: ReactElement;
  noAuth?: boolean;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children, noAuth }) => {
  const navigate = useNavigate();
  const { data } = useAppSelector(state => state.authSlice);
  const { toggleAppLoader } = useAppActions();

  useEffect(() => {
    toggleAppLoader(true);

    if (noAuth) {
      if (data) {
        navigate(AllRouteConstants.main.index);
      }
    } else {
      if (!data) {
        navigate(AllRouteConstants.auth.login);
      }
    }

    toggleAppLoader(false);
  }, []);

  return children;
};
