// Impoer Libraries
import { Route } from "react-router-dom";

// Import Pages
import { Home, } from "../pages";

// Import Constants
import { AllRouteConstants } from "../../../router/RouteConstants";

const PaymentRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.payments.index} index element={<Home />} />
    </>
  );
};

export default PaymentRoutes;
