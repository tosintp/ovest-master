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
} from "../../Syles/styles";
import "../signin/SignIn.css";
import LogoIcon from "../../Logo/Logo";
import { TextInput } from "../Formik/FormLib";
import * as Yup from "yup";

const ForgetPassword = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState("");

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
              Forgot Password
            </StyledTitle>
            <SubTitle
              style={{
                fontWeight: "normal",
                textAlign: "left",
                marginTop: "",
              }}
            >
              Enter linked with your OVest account.
            </SubTitle>
          </div>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={Yup.object({
              Email: Yup.string().required("Email Field is Required"),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <p style={{ fontSize: 14, color: "red" }}>{error}</p>
                <TextInput
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />

                <ButtonGroup>
                  {!showLoader && (
                    <StyledFormButton type="submit">Send</StyledFormButton>
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

export default ForgetPassword;
