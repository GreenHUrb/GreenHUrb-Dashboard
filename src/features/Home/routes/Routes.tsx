// Impoer Libraries
import { Route } from "react-router-dom";

// Import Pages
import { Home, } from "../pages";

// Import Constants
import { AllRouteConstants } from "../../../router/RouteConstants";

const HomeRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.main.index} index element={<Home />} />
    </>
  );
};

export default HomeRoutes;
