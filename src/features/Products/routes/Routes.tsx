// Impoer Libraries
import { Route } from "react-router-dom";

// Import Pages
import { Home, Product } from "../pages";

// Import Constants
import { AllRouteConstants } from "../../../router/RouteConstants";

const ProductsRoutes = () => {
  return (
    <>
      <Route path={AllRouteConstants.products.index} index element={<Home />} />
      <Route
        path={AllRouteConstants.products.createProduct}
        element={<Product product_state="add" />}
      />
      <Route
        path={AllRouteConstants.products.editProduct}
        element={<Product product_state="edit" />}
      />
      <Route
        path={AllRouteConstants.products.viewproduct}
        element={<Product product_state="view" />}
      />
    </>
  );
};

export default ProductsRoutes;
