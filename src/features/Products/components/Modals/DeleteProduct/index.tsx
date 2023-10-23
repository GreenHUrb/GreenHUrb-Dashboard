import "./styles.scss";
import { PopModal } from "@layouts";
import { useProductApi } from "@/features/Products/services";
import DeleteIcon from "@icons/delete.svg";
import { IDeleteProductModalProps } from "./types";
import { useProductActions } from "@/hooks";
import { Button, ModalHeader, ModalParagraph } from "@/components";

export const DeleteProduct = (props: IDeleteProductModalProps) => {
  const { deleteProduct } = useProductApi();
  const { deleteProduct: deleteReduxProduct } = useProductActions();
  const { id, onClose } = props;

  const handleDeleteProduct = async () => {
    await deleteProduct.handler(id);
    deleteReduxProduct({ product_id: id });
    onClose();
  };

  return (
    <PopModal fullOverlay onClose={onClose}>
      <div className="delete_product_modal">
        <div className="delete_product_modal_container">
          <div className="delete_product_modal_heading_image">
            <img src={DeleteIcon} alt="delete_icon" />
          </div>

          <div className="delete_product_modal_content">
            <ModalHeader heading="Are you sure you want to delete this Product?" />

            <ModalParagraph message="You may not be ale to restore this data, are you sure you want to delete?" />
          </div>

          <div className="delete_product_modal_btn_group">
            <Button label="Cancel" fullWidth variant="outlined" onClick={onClose} />
            <Button
              label="Delete"
              variant="contained"
              loading={deleteProduct.loading}
              onClick={handleDeleteProduct}
              fullWidth
              customClassName="delete_product_modal_btn"
            />
          </div>
        </div>
      </div>
    </PopModal>
  );
};
