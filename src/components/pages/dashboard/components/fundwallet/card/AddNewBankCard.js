import React from "react";
import "./card.css";
import addcardicon from "../../../../../Assets/addnewbank.svg";
import plusicon from "../../../../../Assets/plus.svg";
import { useUser } from "../../../../../../hooks/use-user";
import { Util } from "../../../../../../helpers/util";
import { FWPUBK } from "../../../../../../helpers/config";

const AddNewBankCard = ({ setStage, stageEmit }) => {
  const [amount] = stageEmit;
  const user = useUser();

  const handleCardAdd = () => {
    // eslint-disable-next-line no-undef
    FlutterwaveCheckout({
      public_key: FWPUBK,
      tx_ref: `tx_ref-${Util.generateRandomString(5)}`,
      amount,
      ...Util.getFlutterCurrencyAndCountryFromUserCountry(user.country),
      payment_options: "card",
      customer: {
        email: user.email,
        phone_number: user.phone,
        name: `${user.firstname} ${user.lastname}`,
      },
      callback: function (data) {
        // call verification endpoint here
        console.log(data);
      },
      customizations: {
        title: "Ovest",
        description: "Add new card",
        logo: "https://myovest.com//img/logo.png",
      },
    });
  };

  return (
    <div className="addnewcard">
      <div
        className=""
        style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="addnewcard-header">
          <h5>By Card</h5>
          <p>Fund your OVest wallet with your debit card.</p>
        </div>
        <div className="addnewcard-body">
          <p>
            Amount:
            <span> N{amount}</span>
          </p>

          <div
            className="addcard"
            onClick={handleCardAdd}
            style={{
              cursor: "pointer",
            }}
          >
            <img
              className="addcardicon"
              src={addcardicon}
              alt="add card icon"
            />
            <p>Add a new bank card</p>
            <img className="plus" src={plusicon} alt=" plus icon" />
          </div>
        </div>
        {/* <StyledBankTransferFormButton
          type="submit"
          style={{ marginTop: "100px" }}
        >
          Confirm
        </StyledBankTransferFormButton> */}
      </div>
    </div>
  );
};

export default AddNewBankCard;
