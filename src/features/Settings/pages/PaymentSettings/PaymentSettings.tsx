import React from "react";
import BackButton from "../../../../components/BackButton/SettingsBackButton";
import { AllRouteConstants } from "../../../../router/RouteConstants";
import "../../styles/payment_settings.scss";
import Checkbox from "../../../../components/form/Checkbox/Checkbox";
import Input from "../../../../components/form/Input/Input";
import Button from "../../../../components/Button/Button";
import { IoAddOutline } from "react-icons/io5";

interface PaymentSettingsProps {}

export const PaymentSettings: React.FC<PaymentSettingsProps> = ({}) => {
  return (
    <main className="payment_settings animate__animated animate__fadeIn">
      <BackButton
        locationName="Back to Settings"
        locationRoute={AllRouteConstants.settings.index}
      />
      <div>
        <div className="payment_settings_top">
          <div>
            <h3>Contact email</h3>
            <p>Choose where your payment invoices should be sent to.</p>
          </div>
          <div>
            <div style={{ marginBottom: "2rem" }}>
              <Checkbox
                label={
                  <>
                    <span style={{ fontWeight: "500", fontSize: "20px" }}>Send to my email</span>
                    <p style={{ marginLeft: "2rem", marginTop: ".5rem" }}>Johndoe@gmail.com</p>
                  </>
                }
                inputClassName="payment_settings_top_checkbox"
                checkboxProps={{ style: { marginRight: "1rem" } }}
              />
            </div>
            <div>
              <Checkbox
                label={
                  <span style={{ fontWeight: "500", fontSize: "20px" }}>
                    Send to an alternative email
                  </span>
                }
                inputClassName="payment_settings_top_checkbox"
                checkboxProps={{ style: { marginRight: "1rem" } }}
              />
              <Input
                id=""
                label=""
                error={null}
                inputProps={{
                  placeholder: "E.g david@gmail.com",
                  required: true
                }}
              />
            </div>
          </div>
        </div>

        <div className="payment_settings_bottom">
          <div>
            <h3>Card details</h3>
            <p>Choose where your payment invoices should be sent to.</p>
          </div>
          <div>
            <Button
              type="button"
              label={
                <>
                  <IoAddOutline size={25} />
                  <span style={{fontWeight: '400'}}>Add new payment details</span>
                </>
              }
              variant="contained"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
