import React from "react";
import "./card.css";
import { Formik, Form } from "formik";
import { CardFundingTextInput } from "../../../../Formik/FormLib";
import * as Yup from "yup";

import {
  StyledContainer,
  StyledFormArea,
  StyledLabel,
  StyledTextInput,
  StyledFormButton,
  StyledTitle,
  ButtonGroup,
  StyledTextInputBankTransfer,
  StyledBankTransferFormButton,
  SubTitle,
  ExtraText,
  TextLink,
  colors,
  StyledTextInputCardFunding,
} from "../../../../../Syles/styles.js";

const CardFunding = ({ setStage }) => {
  return (
    <div className="card-funding">
      <div className="card-funding-header">
        <h5> By Card</h5>
        <p>Fund your OVest wallet by using your card details</p>
      </div>
      <div className="card-funding-body">
        <p>How much would you like to add to your wallet? </p>
      </div>
      <Formik
        initialValues={{
          amount: "",
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          console.log(values);
          // loginUser(values, history, setFieldError, setSubmitting);
        }}
        validationSchema={Yup.object({
          // phone: Yup.string()
          //   .matches(phoneRegExp, "Phone number is not valid")
          //   .required("Phone Number is Required"),
          amount: Yup.string().required("Amount deposited Field is Required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <StyledTextInputBankTransfer
              name="amount"
              type="number"
              placeholder="NGN"
            />

            <ButtonGroup>
              {!isSubmitting && (
                <StyledBankTransferFormButton
                  type="submit"
                  onClick={() => {
                    setStage(6);
                  }}
                  style={{ marginTop: "136px" }}
                >
                  Next
                </StyledBankTransferFormButton>
              )}
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardFunding;
