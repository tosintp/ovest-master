import React from "react";
import { SecurityTextInput } from "../../../../../Formik/FormLib";
import {
  StyledBankTransferFormButton,
  ButtonGroup,
  colors,
} from "../../../../../../Syles/styles";
import { Formik, Form } from "formik";
import Loader from "react-loader-spinner";
import * as Yup from "yup";

const Security = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <h2>Security</h2>
      <Formik
        initialValues={{
          currentpassword: "",
          newpassword: "",
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          console.log(values);
          //   setChange();
        }}
        validationSchema={Yup.object({
          currentpassword: Yup.string()
            .min(8, "password is too short")
            .max(30, "password is too long")
            .required("Password is Required"),
          newpassword: Yup.string()
            .min(8, "password is too short")
            .max(30, "password is too long")
            .required("Password is Required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <p
              style={{
                color: "#121212",
                fontSize: "1.6rem",
                lineHeight: "1.9rem",
                textAlign: "left",
                marginTop: "25px",
              }}
            >
              Current Password
            </p>
            <SecurityTextInput name="currentpassword" type="password" />
            <p
              style={{
                color: "#121212",
                fontSize: "1.6rem",
                lineHeight: "1.9rem",
                textAlign: "left",
                marginTop: "25px",
              }}
            >
              New Password
            </p>

            <SecurityTextInput name="newpassword" type="password" />
            <ButtonGroup>
              {!isSubmitting && (
                <StyledBankTransferFormButton type="submit">
                  Update Password
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

export default Security;
