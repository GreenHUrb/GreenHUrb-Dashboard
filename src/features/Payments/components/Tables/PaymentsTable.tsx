import usePopOver from '../../../../hooks/usePopOver';
import { SlOptionsVertical } from 'react-icons/sl';
import { TableLayout, TableHeadContainer, TableBodyContainer, TableBodyRow, TableBodyRowChild, TableHead } from '../../../../layouts/TableLayout/TableLayout';
import { Popover } from '@mui/material';
import './Tables.scss'
import usePagination from '../../../../hooks/useTablePagination';
import TablePagination from '../../../../components/TablePagination/TablePagination';
import { IPayment } from '../../interfaces/IPayment';



interface IPaymentTable {
    tableHead: string[];
    tableData: IPayment[];
    pagination?: boolean

}
const PaymentsTable = (props: IPaymentTable) => {
    const { tableData, tableHead, pagination } = props
    const { anchorEl, handleClick, handleClose, id, open } = usePopOver()

    const {
        currentItems,
        currentPage,
        nextPage,
        prevPage,
        totalPages,
        goToPage,
        totalDataLength
    } = usePagination(tableData,  10);

    return (
        <>

            <TableLayout  >
                <TableHeadContainer checkbox>
                    <>
                        {tableHead.map((head) => (
                            <TableHead label={head} key={head} />
                        ))}
                    </>
                </TableHeadContainer>
                <TableBodyContainer>
                    <>
                        {currentItems.map((item, index) => (
                            <TableBodyRow key={index} checkbox>
                                <TableBodyRowChild>{item.date}</TableBodyRowChild>
                                <TableBodyRowChild nonCapitalize>{item.productName}</TableBodyRowChild>
                                <TableBodyRowChild nonCapitalize>{item.orderNo}</TableBodyRowChild>
                                <TableBodyRowChild nonCapitalize>N{item.amount.toLocaleString()}</TableBodyRowChild>
                                <TableBodyRowChild>
                                    <div className={`payment_table_status_button_${item.status.toLocaleLowerCase()} payment_table_status_button`}>
                                        {item.status}
                                    </div>
                                </TableBodyRowChild>

                                <TableBodyRowChild>
                                    <SlOptionsVertical
                                        aria-describedby={id}
                                        className="payment_table_actions"
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
                </TableBodyContainer>
            </TableLayout>
            {/* Pagination controls */}
            <div className="table_pagination">
                {pagination && (
                    <TablePagination currentPage={currentPage} goToPage={goToPage} nextPage={nextPage} prevPage={prevPage} totalPages={totalPages} itemsAmount={currentItems.length} totalDataLength={totalDataLength} />
                )}
            </div>
        </>
    );
}

export default PaymentsTable
