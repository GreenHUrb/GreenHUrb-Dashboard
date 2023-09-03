import usePopOver from '../../../../hooks/usePopOver';
import { SlOptionsVertical } from 'react-icons/sl';
import { TableLayout, TableHeadContainer, TableBodyContainer, TableBodyRow, TableBodyRowChild, TableHead } from '../../../../layouts/TableLayout/TableLayout';
import { Popover } from '@mui/material';
import './Tables.scss'
import { useState } from 'react';
import usePagination from '../../../../hooks/useTablePagination';
import TablePagination from '../../../../components/TablePagination/TablePagination';
import { ITransaction } from '../../../Home/interfaces/ITransaction';



interface ITransactionsTable {
    tableHead: string[];
    tableData: ITransaction[];
    children: JSX.Element

}
const ProductTable = (props: ITransactionsTable) => {
    const { tableData, tableHead, children } = props
    const { anchorEl, handleClick, handleClose, id, open } = usePopOver()

    const {
        currentItems,
        currentPage,
        nextPage,
        prevPage,
        totalPages,
        goToPage,
        totalDataLength
    } = usePagination(tableData, 10);

    return (
        <>

            <TableLayout>
                <TableHeadContainer checkbox>
                    <>
                        {tableHead.map((head) => (
                            <TableHead label={head} key={head} />
                        ))}
                    </>
                </TableHeadContainer>
                <TableBodyContainer>
                    <>
                        {tableData.length === 0 ? (
                            <div>
                                {children}
                            </div>
                        ) : (

                            <>
                                {currentItems.map((item, index) => (
                                    <TableBodyRow key={index} checkbox>
                                        <TableBodyRowChild>{item.date}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>{item.productName}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>{item.orderNo}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>N{item.amount.toLocaleString()}</TableBodyRowChild>
                                        <TableBodyRowChild>
                                            <div className={`transaction_table_status_button_${item.status.toLocaleLowerCase()} transaction_table_status_button`}>
                                                {item.status}
                                            </div>
                                        </TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>{item.customerName}</TableBodyRowChild>

                                        <TableBodyRowChild>
                                            <SlOptionsVertical
                                                aria-describedby={id}
                                                className="transaction_table_actions"
                                            />
                                            <Popover
                                                id={id}
                                                open={open}
                                                anchorEl={anchorEl}
                                                onClose={handleClose}
                                                anchorOrigin={{
                                                    vertical: "bottom",
                                                    horizontal: "left",
                                                }}
                                            >

                                            </Popover>
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
                <TablePagination currentPage={currentPage} goToPage={goToPage} nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} itemsAmount={currentItems.length} totalDataLength={totalDataLength} />

            </div>
        </>
    );
}

export default ProductTable
