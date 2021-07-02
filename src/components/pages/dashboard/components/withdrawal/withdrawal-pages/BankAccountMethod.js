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
import { BankTranferDetailsTextInput } from "../../../../Formik/FormLib";

const BAnkAccountMethod = ({ setStage }) => {
  return (
    <div className="">
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
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            // loginUser(values, history, setFieldError, setSubmitting);
          }}
          validationSchema={Yup.object({
            Amount: Yup.string().required(" Amount Field is Required"),
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
                type="number"
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
              {/* <BankTranferDetailsTextInput
                name="Amount"
                type="number"
                placeholder="NGN"
              /> */}

              <div class="select">
                <StyledTextSelectBankTransfer name="banks" id="standard-select">
                  <option value="" disabled selected hidden>
                    Select Bank
                  </option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </StyledTextSelectBankTransfer>
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

              {/* <select
                name="color"
                // value={values.color}
                // onChange={handleChange}
                // onBlur={handleBlur}
                style={{ display: "block" }},
                
              >
                <option value="" label="Select a color" />
                <option value="red" label="red" />
                <option value="blue" label="blue" />
                <option value="green" label="green" />
              </select> */}

              {/* <Form.Control as="select" size="lg">
                <option>Large select</option>
              </Form.Control> */}

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledBankTransferFormButton
                    type="submit"
                    onClick={() => {
                      setStage(5);
                    }}
                  >
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
