// Impoer Libraries
import { Route } from "react-router-dom";

// Import Pages
import { Home, } from "../pages";

// Import Constants
import { AllRouteConstants } from "../../../router/RouteConstants";

const ProductsRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.products.index} index element={<Home />} />
    </>
  );
};

export default ProductsRoutes;
