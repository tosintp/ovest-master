import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
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
import { Form, Formik } from "formik";
import { createStructuredSelector } from "reselect";
import {
  isLoading,
  selectCurrentUser,
  success,
  error,
  token,
} from "../../../redux/selectors/auth.selector";
import { Redirect, useHistory } from "react-router-dom";

const SignIn = ({ error, success, loading, user, token }) => {
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setShowLoader(loading);
    console.log(success);
  }, [loading]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    if (success){
      return <Redirect to='/dashboard'/>
    }
  return (
    <StyledContainer>
      <div className="Sign-in">
        <LogoIcon />

        <StyledFormArea>
          <StyledTitle size={20}>Login to your Account</StyledTitle>
          <SubTitle>Welcome back. Let’s help you achieve more today! </SubTitle>
          <Formik
            initialValues={{
              phone: "",
              password: "",
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log(values);
              dispatch(DispatchSignIn(values));
              // loginUser(values, history, setFieldError, setSubmitting);
            }}
            validationSchema={Yup.object({
              phone: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Phone Number is Required"),
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
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                />

                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
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

          <div className="form-icon">
            <img src={fbcircle} className="formicon2" alt="fb-icon" />
            <img src={applecircle} className="formicon1" alt="apple-icon" />
            <img src={googlecircle} className="formicon1" alt="ggicon" />
          </div>
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
