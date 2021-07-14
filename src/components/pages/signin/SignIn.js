import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SignIn as DispatchSignIn } from "../../../redux/operators/auth.op";
import * as Yup from "yup";
import {
  StyledContainer,
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  ButtonGroup,
  SubTitle,
  ExtraText,
  TextLink,
  colors,
} from "../../Syles/styles";

import "./SignIn.css";
import LogoIcon from "../../Logo/Logo";
import { TextInput } from "../../pages/Formik/FormLib";
import applecircle from "../../Assets/applecirlce.png";
import fbcircle from "../../Assets/fb-circle.png";
import googlecircle from "../../Assets/googlecircle.png";
import Loader from "react-loader-spinner";
import { Form, Formik, Field } from "formik";
import { createStructuredSelector } from "reselect";
import {
  isLoading,
  selectCurrentUser,
  success,
  error,
  token,
} from "../../../redux/selectors/auth.selector";
import { Redirect } from "react-router-dom";

const SignIn = ({ error, success, loading, user, token }) => {
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  // const history = useHistory();

  // useEffect(
  //   () => {
  //     setShowLoader(loading);
  //     // console.log(success);
  //   },
  //   [loading],
  //   [success]
  // );

  useEffect(() => {
    if (error) {
      if (error.statusCode === 500) {
        alert(error.message);
      } else if (error.statusCode === 401) {
        alert("Invalid email or Password");
      }
    }
  }, [error]);

  // const phoneRegExp =
  // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  if (success) {
    return <Redirect to="/dashboard" />;
  }
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
            <StyledTitle
              size={20}
              style={{
                fontWeight: "700",
              }}
            >
              Login to your Account
            </StyledTitle>
            <SubTitle>
              Welcome back. Let’s help you achieve more today!{" "}
            </SubTitle>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              checked: [],
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log(values);
              dispatch(DispatchSignIn(values));
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
                <TextInput name="email" type="email" placeholder="Email" />

                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
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
                      Remember Me
                    </p>
                  </label>

                  <Link to="#">
                    {" "}
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
                  </Link>
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

          <ExtraText>
            Not yet an OVestor? <TextLink to="/signup">Register</TextLink>
          </ExtraText>
          {/* <p
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "19px",
              textAlign: "center",
              padding: "10px",
              color: "#121212",
            }}
          >
            OR
          </p>
          <div className="form-icon">
            <img src={fbcircle} className="formicon2" alt="fb-icon" />
            <img src={applecircle} className="formicon1" alt="apple-icon" />
            <img src={googlecircle} className="formicon1" alt="ggicon" />
          </div> */}
        </StyledFormArea>
      </div>
    </StyledContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  error,
  success,
  loading: isLoading,
  user: selectCurrentUser,
  token,
});

export default connect(mapStateToProps)(SignIn);
