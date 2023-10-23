import { usePopOver } from "../../../../hooks/usePopOver";
import { SlOptionsVertical } from "react-icons/sl";
import {
  TableLayout,
  TableHeadContainer,
  TableBodyContainer,
  TableBodyRow,
  TableBodyRowChild,
  TableHead
} from "../../../../layouts/TableLayout";
import { Popover } from "@mui/material";
import "./Tables.scss";
import { usePagination } from "../../../../hooks/useTablePagination";
import { TablePagination } from "../../../../components/TablePagination";
import { IProductFullResponse } from "../../interfaces/ProductApi";
import ImageStack from "../Imagestack/ImageStack";
import useProductTableActions from "../../hooks/useProductTableActions";
import { DeleteProduct } from "../Modals";

interface IProductsTable {
  tableHead: string[];
  tableData: IProductFullResponse[];
  children: JSX.Element;
}

export const ProductTable = (props: IProductsTable) => {
  const { tableData, tableHead, children } = props;
  const { anchorEl, handleClick, handleClose, id, open } = usePopOver();

  const { currentItems, currentPage, nextPage, prevPage, totalPages, goToPage, totalDataLength } =
    usePagination(tableData ?? [], 10);

  const { deleteProduct, handleProductAction, handleCloseDeleteModal } = useProductTableActions();

  return (
    <>
      {deleteProduct.status && (
        <DeleteProduct id={deleteProduct.id!} onClose={handleCloseDeleteModal} />
      )}
      <TableLayout>
        <TableHeadContainer checkbox>
          <>
            {tableHead.map(head => (
              <TableHead label={head} key={head} />
            ))}
          </>
        </TableHeadContainer>

        <TableBodyContainer>
          <>
            {tableData?.length === 0 ? (
              <tr style={{ background: "transparent" }}>
                <td colSpan={tableHead.length + 1}>{children}</td>
              </tr>
            ) : (
              <>
                {currentItems.map((item, index) => {
                  const { images, product } = item;

                  const product_images: string[] = [];

                  images?.map(image => {
                    product_images.push(image.image_url);
                  });

                  return (
                    <TableBodyRow key={index} checkbox>
                      <TableBodyRowChild>{index + 1}</TableBodyRowChild>
                      <TableBodyRowChild nonCapitalize>{product.name}</TableBodyRowChild>
                      <TableBodyRowChild nonCapitalize>
                        <ImageStack images={product_images} limit={4} />
                      </TableBodyRowChild>

                      <TableBodyRowChild nonCapitalize>{product.category.name}</TableBodyRowChild>
                      <TableBodyRowChild nonCapitalize>
                        {product.weight} {product.weight_unit}
                      </TableBodyRowChild>
                      <TableBodyRowChild nonCapitalize>{product.quantity}</TableBodyRowChild>
                      <TableBodyRowChild nonCapitalize>
                        {product.createdAt.slice(0, 10)}
                      </TableBodyRowChild>

                      <TableBodyRowChild>
                        <SlOptionsVertical
                          aria-describedby={id}
                          className="product_table_actions"
                          onClick={handleClick}
                        />
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                          }}
                        >
                          <div className="product_options_container">
                            <button
                              onClick={() => handleProductAction({ type: "view", id: product.id })}
                              className="product_options_container_button"
                            >
                              View Product
                            </button>
                            <button
                              onClick={() => handleProductAction({ type: "edit", id: product.id })}
                              className="product_options_container_button"
                            >
                              Edit Product
                            </button>
                            <button
                              onClick={() => {
                                handleClose();
                                handleProductAction({ type: "delete", id: product.id });
                              }}
                              className="product_options_container_button"
                            >
                              Delete Product
                            </button>
                          </div>
                        </Popover>
                      </TableBodyRowChild>
                    </TableBodyRow>
                  );
                })}
              </>
            )}
          </>
        </TableBodyContainer>
      </TableLayout>
      {/* Pagination controls */}
      <div className="table_pagination">
        <TablePagination
          currentPage={currentPage}
          goToPage={goToPage}
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
          itemsAmount={currentItems.length}
          totalDataLength={totalDataLength}
        />
      </div>
    </>
  );
};

