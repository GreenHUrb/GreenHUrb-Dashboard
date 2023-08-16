// Impoer Libraries
import { Route } from "react-router-dom";

// Import Pages
import { Home, } from "../pages";

// Import Constants
import { AllRouteConstants } from "../../../router/RouteConstants";

const SettingsRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.settings.index} index element={<Home />} />
    </>
  );
};

export default SettingsRoutes;
