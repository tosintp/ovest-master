import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Form, Formik } from "formik";
import {
  StyledContainer,
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  ButtonGroup,
  SubTitle,
  colors,
  TextLink,
  ExtraText,
} from "../../Syles/styles.js";
import "../signin/SignIn.css";
import LogoIcon from "../../Logo/Logo";
import { TextInput } from "../Formik/FormLib";
import * as Yup from "yup";

const ResetPassword = () => {
  const [showLoader] = useState(false);
  const [error] = useState("");

  return (
    <StyledContainer>
      <div className="Sign-in">
        <LogoIcon />
        <StyledFormArea>
          <div
            style={{
              paddingBottom: "10px",
              paddingTop: "5px",
            }}
          >
            {" "}
            <StyledTitle
              size={20}
              style={{
                fontWeight: "700",
                textAlign: "left",
                paddingLeft: "0",
              }}
            >
              Change Password
            </StyledTitle>
            <SubTitle
              style={{
                fontWeight: "normal",
                textAlign: "left",
                marginTop: "",
              }}
            >
              Enter your new password
            </SubTitle>
          </div>
          <Formik
            initialValues={{
              password: "",
              password_confirmation: "",
            }}
            validationSchema={Yup.object({
              password: Yup.string()
                .min(8, "password is too short")
                .max(30, "password is too long")
                .required("Password is Required"),
              password_confirmation: Yup.string()
                .required("confirm_password is Required")
                .oneOf([Yup.ref("password"), "Passwords must match"]),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <p style={{ fontSize: 14, color: "red" }}>{error}</p>

                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <TextInput
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirm Password"
                />

                <ButtonGroup>
                  {!showLoader && (
                    <StyledFormButton type="submit">Submit</StyledFormButton>
                  )}

                  {showLoader && (
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
          <ExtraText>
            Already reset? <TextLink to="/signin">Login</TextLink>
          </ExtraText>
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

export default ResetPassword;
