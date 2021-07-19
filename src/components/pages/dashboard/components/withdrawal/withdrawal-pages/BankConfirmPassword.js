import React from "react";
import lock from "../../../../../Assets/lock.svg";
import "./Withdrawal-pages.css";
import {
  StyledBankTransferFormButton,
  ButtonGroup,
  colors,
} from "../../../../../Syles/styles";
import { Formik, Form } from "formik";
import Loader from "react-loader-spinner";
import * as Yup from "yup";
import { TextInput } from "../../../../Formik/FormLib";

const BankConfirmPassword = ({ setStage }) => {
  const setChange = (e) => {
    setStage(0);
  };
  return (
    // <div>
    <div className="cardpaymentsuccess cardpassword">
      <div className="cardpassword-inner">
        <button>
          <img className=" " src={lock} alt="card close icon" />
        </button>
        <h5>Confirm Password</h5>
        <p>Enter your OVest password to approve your transaction</p>
        <Formik
          initialValues={{
            password: "",
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            console.log(values);
            setChange();
          }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(8, "password is too short")
              .max(30, "password is too long")
              .required("Password is Required"),
          })}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                style={{ width: "98%" }}
                name="password"
                type="password"
                placeholder="Password"
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Proceed
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
      </div>
    </div>
    // </div>
  );
};

export default BankConfirmPassword;
