import { Route } from "react-router-dom";
import { Analytics, } from "../pages";
import { AllRouteConstants } from "../../../router/RouteConstants";

const HomeRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.main.index} index element={<Analytics />} />
    </>
  );
};

export default HomeRoutes;
