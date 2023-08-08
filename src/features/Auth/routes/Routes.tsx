import { Route } from "react-router-dom";
import { Login, } from "../pages";
import { AllRouteConstants } from "../../../router/RouteConstants";

const AuthRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.auth.index} index element={<Login />} />
      <Route path={AllRouteConstants.auth.login} element={<Login />} />
    </>
  );
};

export default AuthRoutes;
