import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import ScrollToTop from "../components/ScrollToTop";
import { AllRouteConstants } from "./RouteConstants";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import AuthRoutes from "../features/Auth/routes/Routes";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import HomeRoutes from "../features/Home/routes/Routes";
import ProductsRoutes from "../features/Products/routes/Routes";
import PaymentRoutes from "../features/Payments/routes/Routes";
import TransactionRoutes from "../features/Transactions/routes/Routes";
import SettingsRoutes from "../features/Settings/routes/Routes";


/**
 * These are the routes Container for all the routes in the application
 * It workes by having a Route component that 
 * @returns 
 */
function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        {/* The element prop specifies the component that should be rendered when the route is matched. 
        In this case, the <LandingPageLayout /> component will be displayed when the URL matches the specified path. 
        It represents the layout or structure of the landing page. */}


        {/* Routes for the Authentication */}
        <Route
          path={AllRouteConstants.auth.index}
          element={<AuthLayout />}
        >
          {AuthRoutes()}
        </Route>


        {/* Routes for the Main Page */}
        <Route
          path={AllRouteConstants.main.index}
          element={<DashboardLayout />}
        >
          {HomeRoutes()}

          {ProductsRoutes()}

          {PaymentRoutes()}

          {TransactionRoutes()}

          {SettingsRoutes()}

        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
