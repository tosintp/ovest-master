import React from "react";
import { Formik, Form } from "formik";
import Loader from "react-loader-spinner";
import * as Yup from "yup";
import "./Withdrawal-pages.css";
import {
  StyledBankTransferFormButton,
  ButtonGroup,
  colors,
  StyledTextSelectBankTransfer,
} from "../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "../../../../Formik/BankDetailsInput";
import BankTranferDetailsSelect from "../../../../Formik/BankDetailsSelect";

const BAnkAccountMethod = ({ setStage }) => {
  const changeStage = () => {
    setStage(2);
  };
  return (
    <div
      style={{
        height: "90vh",
      }}
    >
      <div
        className="BankAccountMethod"
        style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Formik
          initialValues={{
            Amount: "",
            banks: "",
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            changeStage();
            // loginUser(values, history, setFieldError, setSubmitting);
          }}
          validationSchema={Yup.object({
            Amount: Yup.string().required(" Amount Field is Required"),
            banks: Yup.string().required(" Bank Field is Required"),
          })}
        >
          {({ isSubmitting }) => (
            <Form>
              <h5 className="bam-h5">Withdraw to Bank Account</h5>
              <p className="bam-p">
                How much would you like to withdraw from your wallet?{" "}
              </p>
              <BankTranferDetailsTextInput
                name="Amount"
                type="tel"
                placeholder="NGN"
              />

              <p className="savestform-p">
                Wallet Balance: <span> N5,000,000</span>
              </p>

              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",

                  letterSpacing: "0.03em",

                  color: "#121212",
                }}
              >
                Select bank account{" "}
              </p>

              <div class="select">
                <BankTranferDetailsSelect name="banks" id="standard-select">
                  <option value="" disabled selected hidden>
                    Select Bank
                  </option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </BankTranferDetailsSelect>

                <span class="focus"></span>
              </div>
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "#666666",
                  letterSpacing: "0.03em",
                  textAlign: "left",
                  width: "353px",
                  height: "44px",
                }}
              >
                Can't find your bank account?
                <span
                  style={{
                    color: "#267bf7",
                  }}
                >
                  Transfer to a new account
                </span>
              </p>

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Send
                  </StyledBankTransferFormButton>
                )}

                {isSubmitting && (
                  <Loader
                    type="ThreeDots"
                    color={colors.primary}
                    height={49}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>

        <div className="bnm-notice">
          <p>
            Kindly note that a transaction fee of N10.00 would be deducted from
            your wallet
          </p>
        </div>
      </div>
    </div>
  );
};

export default BAnkAccountMethod;
