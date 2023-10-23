import { useState } from "react";

interface IProductActionHandler {
  id: string;
  type: "view" | "edit" | "delete";
}

interface IDeleteProductState {
  status: boolean;
  id: null | string;
}
const useProductTableActions = () => {
  const [deleteProduct, setDeleteProduct] = useState<IDeleteProductState>({
    status: false,
    id: null
  });

  const handleProductAction = (options: IProductActionHandler) => {
    const { id, type } = options;

    if (type === "delete") {
      console.log("hey");
      return setDeleteProduct({ status: true, id });
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
