import React from "react";
import { Formik, Form } from "formik";

import { BankTranferDetailsTextInput } from "../../../../../../Formik/BankDetailsInput";
import * as Yup from "yup";

const CreateFixed = ({ setMenu }) => {
  return (
    <div className="create-flexible-plan">
      <div className="create-flexible-plan-main">
        <div className="create-flexible-header">
          <h5 className="create-flexible-h5">Create Fixed Plan</h5>
          <p className="create-flexible-p">
            Save strictly for emergencies and earn up to 3.5% every 15 days.
          </p>
        </div>
        <div className="savest-amount-tosave">
          <p className="savest-amount-p">
            What would you like to name this plan?{" "}
          </p>
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
                  placeholder="Name"
                />
              </Form>
            )}
          </Formik>
        </div>
        <div className="amount-targeted">
          <p className="savest-amount-p2 mt-5">What is your target amount?</p>
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
          {/* <input type="text" name="" id="" className="savest-flexible-input" /> */}
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
        <button onClick={() => setMenu(8)} className="savest-button">
          Next
        </button>
        <div className="checkbox-main">
          <input type="checkbox" name="" id="" className="checkbox-input" />
          <label htmlFor="" className="earninterest-savest">
            Earn interest on this saving plan
          </label>
        </div>
      </div>
    </div>
  );
};

export default CreateFixed;
