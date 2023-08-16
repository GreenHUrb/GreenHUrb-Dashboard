// Impoer Libraries
import { Route } from "react-router-dom";

// Import Pages
import { Home, } from "../pages";

// Import Constants
import { AllRouteConstants } from "../../../router/RouteConstants";

const TransactionRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.transactions.index} index element={<Home />} />
    </>
  );
};

export default TransactionRoutes;
