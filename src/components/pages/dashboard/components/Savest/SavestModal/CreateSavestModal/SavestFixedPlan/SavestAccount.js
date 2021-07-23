import React from "react";
import { Formik, Form } from "formik";
import {
  ButtonGroup,
  StyledBankTransferFormButton,
  colors,
} from "../../../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "../../../../../../Formik/BankDetailsInput";
import * as Yup from "yup";

const SavestAccount = ({ setMenu }) => {
  return (
    <div className="create-flexible-plan">
      <div className="create-flexible-plan-main">
        <div className="create-flexible-header">
          <h5 className="create-flexible-h5">Savest Account</h5>
          <p className="create-flexible-p">Edit your Savest plan details</p>
        </div>
        <div className="savest-amount-tosave">
          <p className="savest-amount-p">What is your target amount?</p>
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
        </div>
        <div className="checkbox-automate">
          <p className="savest-amount-p">
            Do you wish to automate your savings?
          </p>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className=" mt-3"
          />

          <label htmlFor="" className="savest-plan-label">
            Yes, I will like to be debited automatically
          </label>
          <br />
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className=" mt-4"
          />
          <label htmlFor="" className="savest-plan-label">
            No, I will like to save whenever I want
          </label>
        </div>

        <div className="savest-amount-tosave">
          <p className="savest-amount-p">Payment Date</p>
          <input
            type="text"
            className="savest-flexible-input"
            placeholder="Monday"
          />
        </div>

        <div className="savest-amount-tosave">
          <p className="savest-amount-p">When would you like to end saving?</p>
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
        </div>

        <button onClick={() => setMenu(13)} className="savest-button">
          Save
        </button>
      </div>
    </div>
  );
};

export default SavestAccount;
