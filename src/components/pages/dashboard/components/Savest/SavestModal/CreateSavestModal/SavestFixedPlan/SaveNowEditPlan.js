import React from "react";
import { Formik, Form } from "formik";

import { BankTranferDetailsTextInput } from "../../../../../../Formik/BankDetailsInput";
import * as Yup from "yup";

const SaveNowEditPlan = ({ setMenu }) => {
  return (
    <div className="create-flexible-plan">
      <div className="create-flexible-plan-main">
        <div className="create-flexible-header">
          <h5 className="create-flexible-h5">Save Now</h5>
          <p className="create-flexible-p">
            Save strictly for your goals and earn 10% interest rate every 30
            days
          </p>
        </div>
        <div className="savest-amount-tosave">
          <p className="savest-amount-p">
            When would you like to start saving?
          </p>
          <Formik
            initialValues={{
              amount: "",
            }}
            onSubmit={(values, { setSubmittimg, setFieldError }) => {
              console.log(values);
            }}
            validationSchema={Yup.object({
              amount: Yup.string().required("Date Field is required"),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <BankTranferDetailsTextInput
                  name="amount"
                  type="tel"
                  placeholder="DD/MM/YYYY"
                />
              </Form>
            )}
          </Formik>
          {/* <input type="text" className="savest-flexible-input" /> */}
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
              amount: Yup.string().required("Date Field is required"),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <BankTranferDetailsTextInput
                  name="amount"
                  type="tel"
                  placeholder="DD/MM/YYYY"
                />
              </Form>
            )}
          </Formik>
          {/* <input type="text" className="savest-flexible-input" /> */}
        </div>

        <button onClick={() => setMenu(14)} className="savest-button">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SaveNowEditPlan;
