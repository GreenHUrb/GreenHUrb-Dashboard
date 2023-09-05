import { useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/form/Input/Input";
import Card from "../../../../assets/icons/card (1).svg";
import Money from "../../../../assets/icons/money-send.svg";
import Copy from "../../../../assets/icons/copy.svg";
import BackButton from "../../../../components/BackButton/SettingsBackButton";
import { AllRouteConstants } from "../../../../router/RouteConstants";

export const SubscriptionPayment = () => {
  const [useCard, setUseCard] = useState<boolean>(true);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  const handleCopyClick = () => {
    const selectedText = paragraphRef.current?.textContent;

    if (selectedText) {
      // Create a temporary textarea element to copy text to clipboard
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = selectedText;
      document.body.appendChild(tempTextArea);

      // Select and copy the text
      tempTextArea.select();
      document.execCommand("copy");
      alert("Copy to clip board");
      // Remove the temporary textarea
      document.body.removeChild(tempTextArea);
    }
  };

  return (
    <main className="subscription_payment animate__animated animate__fadeIn">
      <BackButton locationName="Back to Settings" locationRoute={AllRouteConstants.settings.index} />
      <div>
        <div>
          <div className="subscription_payment_top">
            <h3>Add Payment method</h3>
            <p>Billed</p>
            <Input
              id="bill"
              label=""
              error={null}
              inputProps={{
                type: "text",
                style: { width: "50%", padding: "3px", marginLeft: "auto", textAlign: 'center', color: '#000000' },
                placeholder: 'Yearly'
              }}
            />
            <p>Amount</p>
            <p>N60,000</p>
            <p>Vat</p>
            <p>N500</p>
            <p>Discount</p>
            <p>N10,000</p>
          </div>
          <div className="subscription_payment_total">
            <h3>Total</h3>
            <p>N50,000</p>
          </div>
          <div className="subscription_payment_bottom">
            <h3>Payment details</h3>
            <p>Choose your preferred payment method</p>
            <div className="subscription_payment_bottom_btn_container">
              <Button
                label={
                  <>
                    <LazyLoadImage src={Card} /> <span>Card</span>
                  </>
                }
                variant={useCard ? "contained" : "outlined"}
                type="button"
                onClick={() => setUseCard(true)}
              />
              <Button
                label={
                  <>
                    <LazyLoadImage src={Money} /> <span>Bank transfer</span>
                  </>
                }
                variant={!useCard ? "contained" : "outlined"}
                type="button"
                onClick={() => setUseCard(false)}
              />
            </div>
          </div>
        </div>
        <div className="subscription_payment_details">
          {useCard ? (
            <div className="subscription_payment_details_card">
              <h3>Add card</h3>
              <div>
                <Input
                  id="name"
                  label="Name on card"
                  error={null}
                  inputProps={{ placeholder: "Name of card owner", type: "text" }}
                />
                <Input
                  id="number"
                  label="Card number"
                  error={null}
                  inputProps={{ placeholder: "0000-0000-0000-0000", type: "text" }}
                />
                <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                  <Input
                    id="Expiry"
                    label="Expiry date"
                    error={null}
                    inputProps={{ type: "date" }}
                  />
                  <Input id="cvv" label="CVV" error={null} inputProps={{ type: "text" }} />
                </div>
              </div>
              <Button label="Pay now" fullWidth variant="contained" />
            </div>
          ) : (
            <div className="subscription_payment_details_transfer">
              <h3>Bank transfer</h3>
              <p>
                Transfer the sum <span>N50,000</span> to the account details below:
              </p>
              <div className="subscription_payment_details_transfer_inner_container">
                <p
                  style={{
                    fontWeight: "var(--very-light-font)",
                    fontSize: "var(--medium-paragraph)"
                  }}
                >
                  First bank
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: ".5rem",
                    fontWeight: "var(--medium-font)",
                    fontSize: "24px"
                  }}
                >
                  <p ref={paragraphRef}>3101676969</p>
                  <button
                    onClick={handleCopyClick}
                    style={{
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      backgroundColor: "transparent"
                    }}
                  >
                    <LazyLoadImage src={Copy} />
                  </button>
                </div>
                <p className="subscription_payment_details_transfer_inner_container_text">
                  Use this account only for this transaction. It expires in <span>20 minutes</span>.
                </p>
              </div>

              <Button label="I have paid" fullWidth variant="contained" />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
