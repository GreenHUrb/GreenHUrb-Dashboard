import Button from "../../../../components/Button/Button";
import { dummyTransactions, transactionTableHead } from "../../../Home/data/dummyTransactions";
import TransactionTable from "../../../Transactions/components/Tables/TransactionTable";
import SettingsBackButton from "../../components/SettingsBackButton/SettingsBackButton";

export const SubscribedPage = () => {
  return (
    <main className="settings_subscribed animate__animated animate__fadeIn">
      <SettingsBackButton />
      <div className="settings_subscribed_top">
        <div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>GreenHUrb Pro</h3>
            <p className="settings_subscribed_status">Active</p>
          </div>
          <p>Unlimited access to additional features and functionalities</p>
          <div className="settings_subscribed_btn_container">
            <Button label='Change plan' variant="contained" fullWidth />
            <Button label='Cancel subscription' variant="text" fullWidth />
          </div>
        </div>
        <div>
            <h3>Payment method</h3>
            <p>Change how you pay for your plan</p>
        </div>
      </div>
      <div className="settings_subscribed_table">
        <h3>Billing</h3>
        <div>
            <TransactionTable tableHead={transactionTableHead} tableData={dummyTransactions} />
        </div>
      </div>
    </main>
  );
};
