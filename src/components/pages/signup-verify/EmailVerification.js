import React, { useState, useEffect } from "react";
import LogoIcon from "../../Logo/Logo";
import { TextInput } from "../../pages/Formik/FormLib";
import Loader from "react-loader-spinner";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
// import {
//   isLoading,
//   selectCurrentUser,
//   success,
//   error,
//   token,
// } from "../../../redux/selectors/auth.selector";
// import { Redirect, useHistory } from "react-router-dom";
import {
  StyledContainer,
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  ButtonGroup,
  SubTitle,
  // ExtraText,
  // TextLink,
  colors,
} from "../../Syles/styles";
import useAuth from "../../../hooks/useAuth";
import "../signin/SignIn.css";
import { apiPost } from "../../../helpers";

const EmailVerification = ({ loading, success }) => {
  const [showLoader] = useState(false);
  const { user } = useAuth();
  const { email ,lastname } = user.currentUser;

  const sendEmailOtp = async () => {
    apiPost(`email/otp/send`, {email} ).then((response) => {
      console.log( response );
      
    });
  };

  useEffect(() => {
    sendEmailOtp()  }, [])
  // const { lastname } = user.currentUser;

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
                marginTop: "",
              }}
            >
              Verify Email
            </StyledTitle>
            <SubTitle>Enter the verificaion code sent to {lastname} </SubTitle>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              checked: [],
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log(values);
              // dispatch(DispatchSignIn(values));
              // loginUser(values, history, setFieldError, setSubmitting);
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              // phone: Yup.string()
              //   .number("Invalid phone address")
              //   .required("phone is Required"),
              password: Yup.string()
                .min(8, "password is too short")
                .max(30, "password is too long")
                .required("Password is Required"),
            })}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="verifyEmail"
                  type="tel"
                  placeholder="Verify Email"
                />

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label style={{ display: "flex" }}>
                    <Field
                      type="checkbox"
                      name="checked"
                      value="Two"
                      style={{
                        width: "16px",
                        height: "16px",
                        background: "#ff0000",
                      }}
                    />
                    <p
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "16px",
                        lineHeight: "19px",
                        textTransform: "capitalize",

                        color: "#666666",
                      }}
                    >
                      Rememeber Me
                    </p>
                  </label>
                  {/* <Link to="#"> */}{" "}
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "16px",
                      lineHeight: "19px",
                      textTransform: "capitalize",

                      color: "#666666",
                    }}
                  >
                    Forget Password ?
                  </p>
                  {/* </Link> */}
                </div>

                {/* <input type="checkbox"> */}

                <ButtonGroup>
                  {!showLoader && (
                    <StyledFormButton type="submit">Login</StyledFormButton>
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
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

export default EmailVerification;
