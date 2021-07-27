import React from "react";
import { Formik, Form } from "formik";
import { BankTranferDetailsTextInput } from "../../../../../../Formik/BankDetailsInput";
import * as Yup from "yup";

const HowOftenFixed = ({ setMenu }) => {
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
          <p className="savest-amount-p">How often would you like to save ? </p>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className=" mt-3"
          />
          <label htmlFor="" className="savest-plan-label">
            Daily
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
            Once a week
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
            Once a month
          </label>
        </div>
        <div className="amount-targeted">
          <p className="savest-amount-p2 mt-5">Payment date</p>
          <Formik
            initialValues={{
              amount: "",
            }}
            onSubmit={(values, { setSubmittimg, setFieldError }) => {
              console.log(values);
            }}
            validationSchema={Yup.object({
              amount: Yup.string().required("Payment Date Field is required"),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <BankTranferDetailsTextInput
                  name="amount"
                  type="tel"
                  placeholder="Monday"
                />
              </Form>
            )}
          </Formik>
          <p className="savest-amount-p2 mt-5">
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
          {/* <input type="text" name="" id="" className="savest-flexible-input" /> */}
        </div>

        <div className="savest-amount-tosave">
          <p className="savest-amount-p">
            How long would you like to save for this plan?
          </p>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
            className=" mt-3"
          />
          <label htmlFor="" className="savest-plan-label">
            3 months
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
            6 months
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
            1 year
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
            Custom Preferred Duration
          </label>
        </div>

        <button onClick={() => setMenu(9)} className="savest-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default HowOftenFixed;
