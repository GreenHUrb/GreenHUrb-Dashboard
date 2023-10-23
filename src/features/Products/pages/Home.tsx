import "../styles/product_home_styles.scss";
import { Search } from "@/components";
import { useAppSelector } from "@/hooks";
import { useProductApi } from "../services";
import { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { productTableHead } from "../data/dummyProducts";
import { IProductFullResponse } from "../interfaces/ProductApi";
import { ProductTable } from "../components/Tables/ProductTable";
import { AllRouteConstants } from "../../../router/RouteConstants";
import { ProductTableEmptyState } from "../components/EmptyStates/EmptyProductsTable";

interface IProductState {
  all: IProductFullResponse[];
  filtered: IProductFullResponse[];
}

export const Home = () => {
  const navigate = useNavigate();
  const { products: allProducts } = useAppSelector(state => state.productSlice);

  const { getFarmerProducts } = useProductApi();

  const [filteredProducts, setFilteredProducts] = useState<IProductFullResponse[]>([]);

  useEffect(() => {
    if (allProducts.length === 0) {
      getFarmerProducts.handler({ useAppLoader: true });
    }
  }, []);

  useEffect(() => {
    setFilteredProducts(allProducts)
  }, [allProducts]);

  return (
    <div className="product_home animate__animated animate__fadeIn">
      {allProducts.length > 0 && (
        <div className="product_home_table_filter">
          <div className="product_home_table_filter_container">
            <Search
              initialState={filteredProducts}
              setState={setFilteredProducts}
              conditionKeyword={"images"}
              resetState={allProducts}
            />

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
      )}

      <div className="product_home_table_container">
        <ProductTable tableData={filteredProducts} tableHead={productTableHead}>
          <ProductTableEmptyState />
        </ProductTable>
      </div>
    </div>
  );
};
