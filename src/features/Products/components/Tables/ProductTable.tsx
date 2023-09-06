import usePopOver from "../../../../hooks/usePopOver";
import { SlOptionsVertical } from "react-icons/sl";
import {
    TableLayout,
    TableHeadContainer,
    TableBodyContainer,
    TableBodyRow,
    TableBodyRowChild,
    TableHead
} from "../../../../layouts/TableLayout/TableLayout";
import { Popover } from "@mui/material";
import "./Tables.scss";
import usePagination from "../../../../hooks/useTablePagination";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import { IProduct } from "../../interfaces/IProduct";
import ImageStack from "../Imagestack/ImageStack";

interface ITransactionsTable {
    tableHead: string[];
    tableData: IProduct[];
    children: JSX.Element;
}
const ProductTable = (props: ITransactionsTable) => {
    const { tableData, tableHead, children } = props;
    const { anchorEl, handleClick, handleClose, id, open } = usePopOver();

    const { currentItems, currentPage, nextPage, prevPage, totalPages, goToPage, totalDataLength } =
        usePagination(tableData ?? [], 10);

    return (
        <>
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
                            <tr style={{ background: 'transparent' }}>
                                <td colSpan={tableHead.length + 1}>{children}</td>
                            </tr>
                        ) : (
                            <>
                                {currentItems.map((item, index) => (
                                    <TableBodyRow key={index} checkbox>
                                        <TableBodyRowChild>{item["S/N"]}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>{item.productName}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>
                                            <ImageStack images={item.productImage} limit={4} />
                                        </TableBodyRowChild>

                                        <TableBodyRowChild nonCapitalize>{item.productCategory}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>{item.weight}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>{item.amount}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>{item.Date}</TableBodyRowChild>

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
                                            ></Popover>
                                        </TableBodyRowChild>
                                    </TableBodyRow>
                                ))}
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

export default ProductTable;
