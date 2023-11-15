import "../styles/product_home_styles.scss";
import { PageLoader, Search } from "@/components";
import { useAppActions, useAppSelector } from "@/hooks";
import { useProductApi } from "../services";
import { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { productTableHead } from "../data/dummyProducts";
import { IProduct, IProductFullResponse } from "../interfaces/ProductApi";
import { ProductTable } from "../components/Tables/ProductTable";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { ProductTableEmptyState } from "../components/EmptyStates/EmptyProductsTable";

export const Home = () => {
  const navigate = useNavigate();

  const { getFarmerProducts } = useProductApi();

  const { products: allProducts } = useAppSelector(state => state.productSlice);

  const [filteredProducts, setFilteredProducts] = useState<IProductFullResponse[]>([]);
  const [tempProducts, setTempProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  const getProducts = <T, K extends keyof T>(products: T[], key: K): T[K][] => {
    const response: T[K][] = [];

    products.map(product => {
      response.push(product[key]);
    });

    return response;
  };

  useEffect(() => {
    if (allProducts.length === 0) {
      getFarmerProducts.handler();
    }
  }, []);

  if (getFarmerProducts.loading) {
    return <PageLoader />;
  }

  return (
    <div className="product_home animate__animated animate__fadeIn">
      {allProducts.length > 0 && (
        <div className="product_home_table_filter">
          <div className="product_home_table_filter_container">
            <div className="product_home_table_filter_item">
              <Search
                initialState={getProducts(filteredProducts, "product")}
                setState={setTempProducts}
                conditionKeyword={"name"}
                resetState={getProducts(allProducts, "product")}
              />
            </div>
            <div className="product_home_table_filter_item">
              <Button
                variant="text"
                onClick={() => navigate(AllRouteConstants.products.drafts)}
                label="Drafts"
              />

              <Button
                variant="contained"
                onClick={() => navigate(AllRouteConstants.products.createProduct)}
                label={
                  <div className="product_home_table_empty_state_button">
                    <IoAddOutline className="icon" />
                    Add New Product
                  </div>
                }
              />
            </div>
          </div>
        </div>
      )}

      <div className="product_home_table_container">
        <ProductTable tableData={filteredProducts} tableHead={productTableHead}>
          <ProductTableEmptyState />
        </ProductTable>
      </div>
    </div>
  );
};
