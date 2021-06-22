import React from "react";
import "./bank.css";
import uploadfile from "../../../../../Assets/uploadfile.svg";
import {
  StyledContainer,
  StyledFormArea,
  StyledLabel,
  StyledTextInput,
  StyledFormButton,
  StyledTitle,
  ButtonGroup,
  StyledBankTransferFormButton,
  SubTitle,
  ExtraText,
  TextLink,
  colors,
} from "../../../../../Syles/styles";

const BankTranferVerify = ({ setStage }) => {
  return (
    <div className="banktransferverify">
      <div
        style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "100%",
        }}
        className="w3-blue"
      >
        <div
          className="w3-blue"
          style={{
            height: "2px",
            width: "100%",
          }}
        ></div>
      </div>
      <br></br>

      <div className="verify-payment-header">
        <h5>Verify Payment</h5>
        <p>Upload the following document to complete your verification</p>
      </div>

      <div className="verify-payment-card">
        <input type="file" id="upload" />
        <label for="upload">
          <img src={uploadfile} alt="Upload file" />
        </label>
        <p>
          Upload a scanned copy or photo of your details to verify your payment.
        </p>
      </div>

      <div className="verify-payment-footer">
        <p>
          *Please note that if additional informational is needed, Nebbix will
          inform you via email.
        </p>
      </div>

      <StyledBankTransferFormButton
        // type="submit"
        onClick={() => {
          setStage(4);
        }}
      >
        Verify
      </StyledBankTransferFormButton>
    </div>
  );
};

export default BankTranferVerify;
