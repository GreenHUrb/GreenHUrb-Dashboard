import { AllRouteConstants } from "@/router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProductActionHandler {
  id: string;
  type: "view" | "edit" | "delete";
}

interface IDeleteProductState {
  status: boolean;
  id: null | string;
}
const useProductTableActions = () => {
  const navigate = useNavigate();

  const [deleteProduct, setDeleteProduct] = useState<IDeleteProductState>({
    status: false,
    id: null
  });

  const handleProductAction = (options: IProductActionHandler) => {
    const { id, type } = options;

    if (type === "delete") {
      return setDeleteProduct({ status: true, id });
    }

    if (type === "edit") {
      return navigate(`/products/edit/${id}`);
    }

    if (type === "view") {
      return navigate(`/products/view/${id}`);
    }
  };

  const handleCloseDeleteModal = () => {
    return setDeleteProduct({ status: false, id: null });
  };

  return {
    handleProductAction,
    deleteProduct,
    handleCloseDeleteModal
  };
};

export default useProductTableActions;
