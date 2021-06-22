import React, { useEffect } from "react";
import "./bank.css";
import Loader from "react-loader-spinner";

import { Formik, Form } from "formik";
import {
  StyledContainer,
  StyledFormArea,
  StyledLabel,
  StyledTextInput,
  StyledFormButton,
  StyledTitle,
  ButtonGroup,
  StyledBankTransferFormButton,
  SubTitle,
  ExtraText,
  TextLink,
  colors,
} from "../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "../../../../Formik/FormLib";

import * as Yup from "yup";

const BankTransferDetails = ({ setStage }) => {
  return (
    <div>
      <div
        style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="w3-light-grey"
      >
        <div
          className="w3-blue"
          style={{
            height: "2px",
            width: "50%",
          }}
        ></div>
      </div>
      <br></br>
      <div className="banktransferdetails-header">
        <h5>Deposit Details</h5>
        <p>Fill the following details to get your payment approved.</p>
      </div>
      <Formik
        initialValues={{
          amount: "",
          accountName: "",
          accountNumber: "",

          bankName: "",
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
          accountName: Yup.string().required("Account Name Field is Required"),
          accountNumber: Yup.string().required(
            "Account Name Field is Required"
          ),
          bankName: Yup.string().required("Bank Name Field is Required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <BankTranferDetailsTextInput
              name="amount"
              type="number"
              placeholder="Enter Amount deposited"
            />

            <BankTranferDetailsTextInput
              name="accountName"
              type="text"
              placeholder="Account Name sent from"
            />
            <BankTranferDetailsTextInput
              name="accountNumber"
              type="number"
              placeholder="Account Number sent from"
            />
            <BankTranferDetailsTextInput
              name="bankName"
              type="text"
              placeholder="Bank Name sent from"
            />
            <ButtonGroup>
              {!isSubmitting && (
                <StyledBankTransferFormButton type="submit" onClick={()=>{setStage(3)}}
                >
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
  );
};

export default BankTransferDetails;
