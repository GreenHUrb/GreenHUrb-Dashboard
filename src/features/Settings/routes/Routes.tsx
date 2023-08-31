// Impoer Libraries
import { Route } from "react-router-dom";

// Import Pages
import { AccountSettings, Home, } from "../pages";

// Import Constants
import { AllRouteConstants } from "../../../router/RouteConstants";

const SettingsRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.settings.index} index element={<Home />} />
      <Route path={AllRouteConstants.settings.accountSettings} element={<AccountSettings />} />
    </>
  );
};

export default SettingsRoutes;
