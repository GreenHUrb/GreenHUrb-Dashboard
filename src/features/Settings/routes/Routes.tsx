// Impoer Libraries
import { Route } from "react-router-dom";

// Import Pages
import { AccountSettings, Home, NotificationSettings, PasswordSettings, Faq, HelpCenter} from "../pages";

// Import Constants
import { AllRouteConstants } from "../../../router/RouteConstants";

const SettingsRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.settings.index} index element={<Home />} />
      <Route path={AllRouteConstants.settings.accountSettings} element={<AccountSettings />} />
      <Route path={AllRouteConstants.settings.notificationSettings} element={<NotificationSettings />} />
      <Route path={AllRouteConstants.settings.passwordSettings} element={<PasswordSettings />} />
      <Route path={AllRouteConstants.settings.faq} element={<Faq />} />
      <Route path={AllRouteConstants.settings.helpCenter} element={<HelpCenter />} />
    </>
  );
};

export default SettingsRoutes;
