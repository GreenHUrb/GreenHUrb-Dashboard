import React, { useEffect, useState } from "react";
import "../styles/payment_home_styles.scss";

import { AllRouteConstants } from "../../../router/RouteConstants";

import {Button} from "../../../components/Button";
import TransactionTable from "../../Transactions/components/Tables/TransactionTable";
import { useNavigate } from "react-router-dom";
import KpiBalanceCard from "../../Home/components/KpiBalanceCard/KpiBalanceCard";
import PaymentsTable from "../components/Tables/PaymentsTable";
import { dummyPayments, paymentTableHead } from "../data/dummyPayments";
import { IPayment } from "../interfaces/IPayment";

export const Home = () => {
  const navigate = useNavigate();
  const [paymentTableFilter, setPaymentTableFilter] = useState<"all" | "received" | "withdrawn">(
    "all"
  );
  const [payment, setPayment] = useState<IPayment[]>(dummyPayments);

  useEffect(() => {
    if (paymentTableFilter === "all") {
      setPayment(dummyPayments);
      return;
    }

    const filteredPayment = dummyPayments.filter(dummyPayment => {
      return dummyPayment.status === paymentTableFilter;
    });
    setPayment(filteredPayment);
  }, [paymentTableFilter]);

  const walletBalance = "0.00";
  const todaysBalance = "0.00";

  return (
    <div className="payment_home animate__animated animate__fadeIn">
      <div className="payment_home_top">
        <KpiBalanceCard
          cardAmount={walletBalance}
          cardHeading="Wallet Balance"
          shadowColor="#355312"
        />
        <KpiBalanceCard
          cardAmount={todaysBalance}
          cardHeading="Today's Balance"
          shadowColor="#F2C570"
        />
      </div>
      <div className="payment_home_info">
        <h3>How do i withdraw from my wallet?</h3>
        <p>
          To withdraw funds from your wallet using your registered phone number with GreenHUrb,
          simply dial the USSD code *888*amount#
        </p>
      </div>
      <div className="payment_home_bottom ">
        <div className="payment_home_table_filter">
          <div className="payment_home_table_filter_container">
            <div className="payment_home_table_filter_left">
              <Button
                label="All Payments"
                variant="text"
                customClassName={`payment_home_table_filter_left_button ${paymentTableFilter !== "all" && "inactive"
                  }`}
                onClick={() => setPaymentTableFilter("all")}
              />
              <Button
                label="Received"
                variant="text"
                customClassName={`payment_home_table_filter_left_button ${paymentTableFilter !== "received" && "inactive"
                  }`}
                onClick={() => setPaymentTableFilter("received")}
              />
              <Button
                label="Withdrawn"
                variant="text"
                customClassName={`payment_home_table_filter_left_button ${paymentTableFilter !== "withdrawn" && "inactive"
                  }`}
                onClick={() => setPaymentTableFilter("withdrawn")}
              />
            </div>
          </div>
        </div>

        <div className="payment_home_table_container">
          <PaymentsTable tableData={payment} tableHead={paymentTableHead} pagination />
        </div>
      </div>
    </div>
  );
};
