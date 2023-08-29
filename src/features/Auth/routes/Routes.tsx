import { Route } from "react-router-dom";
import { Login, SignUp, OtpPage,ConditionPage } from "../pages";
import { AllRouteConstants, } from "../../../router/RouteConstants";

const AuthRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.auth.index} index element={<Login />} />
      <Route path={AllRouteConstants.auth.login} element={<Login />} />
      <Route path={AllRouteConstants.auth.signup} element={<SignUp />} />
      <Route path={AllRouteConstants.auth.notUseLayout.otp} element={<OtpPage />} />
      <Route path={AllRouteConstants.auth.notUseLayout.tAndC} element={<ConditionPage />} />
    </>
  );
};

export default AuthRoutes;
