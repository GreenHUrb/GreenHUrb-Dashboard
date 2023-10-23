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
import { useState } from "react";
import { usePagination } from "../../../../hooks/useTablePagination";
import { TablePagination } from "../../../../components/TablePagination";
import { ITransaction } from "../../../Home/interfaces/ITransaction";

interface ITransactionsTable {
  tableHead: string[];
  tableData: ITransaction[];
  pagination?: boolean;
  dataLimit?: number;
  children: JSX.Element;
}
const TransactionTable = (props: ITransactionsTable) => {
  const { tableData, tableHead, pagination, dataLimit,children } = props;
  const { anchorEl, handleClick, handleClose, id, open } = usePopOver();

  const { currentItems, currentPage, nextPage, prevPage, totalPages, goToPage, totalDataLength } =
    usePagination(tableData, dataLimit ?? 10);

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
              <tr style={{ background: "transparent" }}>
                <td colSpan={tableHead.length + 1}>{children}</td>
              </tr>
            ) : (
              <>
                {currentItems.map((item, index) => (
                  <TableBodyRow key={index} checkbox>
                    <TableBodyRowChild>{item.date}</TableBodyRowChild>
                    <TableBodyRowChild nonCapitalize>{item.productName}</TableBodyRowChild>
                    <TableBodyRowChild nonCapitalize>{item.orderNo}</TableBodyRowChild>
                    <TableBodyRowChild nonCapitalize>
                      N{item.amount.toLocaleString()}
                    </TableBodyRowChild>
                    <TableBodyRowChild>
                      <div
                        className={`transaction_table_status_button_${item.status.toLocaleLowerCase()} transaction_table_status_button`}
                      >
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
        {pagination && (
          <TablePagination
            currentPage={currentPage}
            goToPage={goToPage}
            nextPage={nextPage}
            prevPage={prevPage}
            totalPages={totalPages}
            itemsAmount={currentItems.length}
            totalDataLength={totalDataLength}
          />
        )}
      </div>
    </>
  );
};

export default TransactionTable;
