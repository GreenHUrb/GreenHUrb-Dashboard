import usePopOver from '../../../../hooks/usePopOver';
import { SlOptionsVertical } from 'react-icons/sl';
import { TableLayout, TableHeadContainer, TableBodyContainer, TableBodyRow, TableBodyRowChild, TableHead } from '../../../../layouts/TableLayout/TableLayout';
import { Popover } from '@mui/material';
import { ITransaction } from '../../interfaces/ITransaction';
import './HomeTableStyles.scss'



interface IApartmentsTable {
    tableHead: string[];
    tableData: ITransaction[];
}
const TransactionTable = (props: IApartmentsTable) => {
    const { tableData, tableHead } = props
    const { anchorEl, handleClick, handleClose, id, open } = usePopOver()

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
                <TableBodyContainer >
                    <>
                        {tableData.map((item, index) => (
                            <TableBodyRow key={index} checkbox >
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
                </TableBodyContainer>
            </TableLayout>
        </>
    );
}

export default TransactionTable