import React from "react";
import "./SilverInvestmentDetails.css";
import { Formik, Form } from "formik";
import { BankTranferDetailsTextInput } from "../../../../../../Formik/BankDetailsInput";
import * as Yup from "yup";

const StartInvestment = ({ setPage }) => {
  return (
    <div className="startinvestment">
      <div className="startinvestment-body">
        <h5 className="startinvestment-h5"> Invest</h5>
        <p className="startinvestment-textbody">
          Invest in silvest plan and earn 50% interest in 3 months
        </p>
        <div className="amountinvest">
          <p className="amount-p">How much would you like to invest?</p>
          <Formik
            initialValues={{
              amount: "",
            }}
            onSubmit={(values, { setSubmittimg, setFieldError }) => {
              console.log(values);
            }}
            validationSchema={Yup.object({
              amount: Yup.string().required(
                "Amount deposited Field is required"
              ),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <BankTranferDetailsTextInput
                  name="amount"
                  type="tel"
                  placeholder="NGN"
                />
              </Form>
            )}
          </Formik>
          <p className="minimum-amount">Minimum amount:N50,000</p>
        </div>
        <div className="radiobutton">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className="radio-input"
          />
          <label for="html" className="enquiry-label">
            Prefer ROI to be disimbursed after investment cycle
          </label>
          <br />
        </div>
        <div className="radiobutton">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className="radio-input2"
          />
          <label for="html" className="enquiry-label2">
            Prefer ROI to be disimbursed after investment cycle
          </label>
        </div>
        <div className="interest-rate">
          <div className="interest-flex">
            <p>Interest Rate</p>
            <p>50%</p>
          </div>
          <div className="interest-flex">
            <p>Estimated Returns</p>
            <p>50%</p>
          </div>
        </div>
        <button type="submit" className="invest" onClick={() => setPage(2)}>
          Proceed
        </button>
      </div>
    </div>
  );
};
export default StartInvestment;
