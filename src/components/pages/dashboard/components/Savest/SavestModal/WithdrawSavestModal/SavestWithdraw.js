import React from "react";
import "./WithdrawSavest.css";
import { Formik, Form } from "formik";
// import {
//   ButtonGroup,
//   StyledBankTransferFormButton,
//   colors,
// } from "../../../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "../../../../../Formik/BankDetailsInput";
import * as Yup from "yup";

const SavestWithdraw = ({ setMenu }) => {
  return (
    <div className="create-flexible-plan">
      <div className="create-flexible-plan-main">
        <div className="create-flexible-header">
          <h5 className="create-flexible-h5">Savest Withdraw</h5>
          <p className="create-flexible-p">
            Save strictly for your goals and earn 10% interest rate every 30
            days
          </p>
        </div>
        <div className="savest-amount-tosave">
          <p className="savest-amount-p">
            How much would you like to withdraw?{" "}
          </p>
          <Formik
            initialValues={{
              amount: "",
            }}
            onSubmit={(values, { setSubmittimg, setFieldError }) => {
              console.log(values);
            }}
            validationSchema={Yup.object({
              amount: Yup.string().required("Amount Field is required"),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <BankTranferDetailsTextInput
                  name="amount"
                  type="tel"
                  placeholder="Enter Amount"
                />
              </Form>
            )}
          </Formik>
          {/* <input type="text" className="savest-flexible-input" /> */}
          <p className="small-p">
            Your OVest wallet will be credited automatically
          </p>
        </div>

        <button onClick={() => setMenu(1)} className="savest-button">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SavestWithdraw;
