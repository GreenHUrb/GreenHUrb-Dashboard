import React, { useEffect, useState } from "react";
import "../styles/transaction_home_styles.scss";
import { Button } from "../../../components/Button";
import TransactionTable from "../components/Tables/TransactionTable";
import { dummyTransactions, transactionTableHead } from "../../Home/data/dummyTransactions";
import { ITransactionStatus } from "../../Home/interfaces/ITransaction";

export const Home = () => {
  const [transactionTableFilter, setTransactionTableFilter] = useState<"all" | ITransactionStatus>(
    "all"
  );
  const [filteredItems, setFilteredItems] = useState(dummyTransactions);

  useEffect(() => {
    if (transactionTableFilter === "all") {
      setFilteredItems(dummyTransactions);
    } else {
      setFilteredItems(dummyTransactions.filter(item => item.status === transactionTableFilter));
    }
  }, [transactionTableFilter]);

  return (
    <div className="transaction_home animate__animated animate__fadeIn">
      <div className="transaction_home_table_filter">
        <div className="transaction_home_table_filter_container">
          <div className="transaction_home_table_filter_left">
            <Button
              label="All Transactions"
              variant="text"
              customClassName={`transaction_home_table_filter_left_button ${
                transactionTableFilter !== "all" && "inactive"
              }`}
              onClick={() => setTransactionTableFilter("all")}
            />
            <Button
              label="Pending"
              variant="text"
              customClassName={`transaction_home_table_filter_left_button ${
                transactionTableFilter !== "pending" && "inactive"
              }`}
              onClick={() => setTransactionTableFilter("pending")}
            />
            <Button
              label="Successful"
              variant="text"
              customClassName={`transaction_home_table_filter_left_button ${
                transactionTableFilter !== "successful" && "inactive"
              }`}
              onClick={() => setTransactionTableFilter("successful")}
            />
          </div>
        </div>
      </div>
      <div className="transaction_home_table_container">
        <TransactionTable tableData={filteredItems} tableHead={transactionTableHead} pagination />
      </div>
    </div>
  );
};
