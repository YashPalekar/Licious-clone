import { useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const [method, setMethod] = useState("debit");

  const showForm = (m) => {
    switch (m) {
      case "debit":
        return (
          <>
            <input
              placeholder="Debit-Card number"
              minLength="12"
              maxLength="20"
            />
            <input placeholder="cvv" minLength="3" maxLength="3" />
          </>
        );

      case "credit":
        return (
          <>
            <input
              placeholder="Credit-Card number"
              minLength="12"
              maxLength="20"
              type="number"
            />
            <input placeholder="cvv" minLength="3" maxLength="3" />
          </>
        );

      case "upi":
        return (
          <>
            <input placeholder="UPI id" />
          </>
        );

      default:
        break;
    }
  };

  return (
    <div className="main">
      <div className="page-title-heading">
        <h4>Please select your payment method:</h4>
        <h4>
          <strong>Total : ₹{location.state}</strong>
        </h4>
      </div>
      <div className="radio-flexbox">
        <div>
          <input
            onClick={() => setMethod("debit")}
            type="radio"
            id="debit"
            name="method"
            value="debit-card"
            defaultChecked
          />
          <label for="method">
            <h5>Debit Card</h5>
          </label>
        </div>

        <div>
          <input
            onClick={() => setMethod("credit")}
            type="radio"
            id="credit"
            name="method"
            value="credit-card"
          />
          <label for="method">
            <h5>Credit Card</h5>
          </label>
        </div>

        <div>
          <input
            onClick={() => setMethod("upi")}
            type="radio"
            id="debit"
            name="method"
            value="debit-card"
          />
          <label for="method">
            <h5>UPI</h5>
          </label>
        </div>
      </div>

      <div className="create-account-form">
        {showForm(method)}
        <button className="active-color-btn center-btn">PAY</button>
      </div>
    </div>
  );
};

export default PaymentPage;
