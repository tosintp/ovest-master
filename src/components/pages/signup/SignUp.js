import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { SignUp as DispatchSignUp } from "../../../redux/operators/auth.op";
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

// import "../../../";
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

const SignUp = ({ error, success, loading, user, token }) => {
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setShowLoader(loading);
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
        <StyledTitle size={20}>Create a Secure Account</StyledTitle>
          <SubTitle>
            Let’s meet you. A step towards achieving your goals!
          </SubTitle>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              referal: "",
              country: "",
              password: "",
              password_confirmation: "",
              username: "",
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log(values);
              dispatch(DispatchSignUp(values));
              // loginUser(values, history, setFieldError, setSubmitting);
            }}
            validationSchema={Yup.object({
              firstname: Yup.string().required("Firstname is Required"),
              lastname: Yup.string().required("Lastname is Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("email is Required"),
                phone: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Phone Number is Required"),
              // referral: Yup.string().required("City is Required"),
              country: Yup.string().required("Country is Required"),
              
         
            
              password: Yup.string()
                .min(8, "password is too short")
                .max(30, "password is too long")
                .required("Password is Required"),
                password_confirmation: Yup.string()
               .required("confirm_password is Required")
               .oneOf([Yup.ref("password"), "Passwords must match"]),
              username: Yup.string().required("Username is Required"),

            })}
          >
            {({ isSubmitting }) => (
              <Form>
              <TextInput
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                />
                <TextInput
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                />{" "}
                 <TextInput
                  type="email"
                  name="email"
                  placeholder="email@mail.com"
                />{" "}
                <TextInput
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                />{" "}
                <TextInput type="text" name="referal" placeholder="Referral" />{" "}
                <TextInput name="country" type="text" placeholder=" Country" />
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

<TextInput
                  name="username"
                  type="text"
                  placeholder=" Username"
                />
                
                <ButtonGroup>
                  {!showLoader && (
                    <StyledFormButton type="submit">Sign Up</StyledFormButton>
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
            Already an OVestor? <TextLink to="/signin  ">Login</TextLink>
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

export default connect(mapStateToProps)(SignUp);
