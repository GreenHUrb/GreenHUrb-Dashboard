import "./styles.scss";
import { Button } from "@/components";
import ShoppingCart from "@icons/shopping cart.svg";
import { AllRouteConstants } from "@/router";
import { useNavigate } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";

export const ProductTableEmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="product_home_table_empty_state">
      <div className="product_home_table_empty_state_container">
        <div className="product_home_table_empty_state_img_container">
          <img src={ShoppingCart} alt="cart" />
        </div>
        <p className="product_home_table_empty_state_content">
          You have no products for sale click on the button to add products
        </p>

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
  );
};
