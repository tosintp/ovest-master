import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import banksuccess from "../../../assets/banksucess.svg";
import closemodalicon from "../../../../../Assets/closemodalicon.svg";
import { $api } from "../../../../../../helpers/$api";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const ConfirmBank = ({ pageEmit, addBank }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const classes = useStyles();
  // const [bank] = pageEmit;
  const [bank = {}] = pageEmit || [];

  const handleAddClick = async () => {
    try {
      const addedBank = await $api.user.addBankAccount(bank);
      addBank(addedBank);
      setShowSuccess(true);
    } catch (error) {
      setError(error.message);
      // toast/report error
    }
  };

  return (
    <div className="confirm-section">
      <p className="confirm-text">Confirm Bank Account</p>
      <center style={{ color: "red" }}>{error}</center>
      <div className="confirm-details">
        <h6>{bank.account_name}</h6>
        <p className="confirm-texts">{bank.account_number}</p>
        <p className="confirm-access">{bank.bank}</p>
      </div>
      <div className="bank-btns">
        <Button
          onClick={handleAddClick}
          // onClick={openModal}
          variant="contained"
          color="#"
          className={classes.button}
          style={{
            backgroundColor: "#0768F6",
            color: "white",
            width: "396px",
            height: "56px",
            textTransform: "capitalize",
            fontSize: "1.6rem",
            fontWeight: "500",
            lineHeight: "30px",
            borderRadius: "4px 4px 4px 0px",
            position: "relative",
            right: "8px",
            marginTop: "60px",
          }}
        >
          Update Profile
        </Button>
      </div>

      <div
        className={`confirmbank__success-bg ${
          showSuccess ? "success-info" : ""
        }`}
      >
        <div className="confirm__success-content">
          <div className="confirm-close-modal">
            <button className="closemodal-btn">
              <img
                src={closemodalicon}
                alt=""
                className="closemodal"
                onClick={() => setShowSuccess(false)}
              />
            </button>
          </div>
          <div>
            <img src={banksuccess} alt="bankSuccess" className="bank-image" />
          </div>
          <p className="bank-success-text">Bank Added Successfully</p>
          <Button
            variant="contained"
            color="#"
            className={classes.button}
            onClick={() => setShowSuccess(false)}
            style={{
              backgroundColor: "#0768F6",
              color: "white",
              width: "150px",
              height: "52px",
              textTransform: "capitalize",
              fontSize: "15px",
              fontWeight: "500",
              lineHeight: "30px",
              borderRadius: "4px 4px  4px 0px",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "33px",
            }}
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBank;
