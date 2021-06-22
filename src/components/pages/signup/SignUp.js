import React, {useEffect} from "react";
import {
  StyledContainer,
  StyledFormArea,
  StyledLabel,
  StyledTextInput,
  StyledFormButton,
  StyledTitle,
  ButtonGroup,
  SubTitle,
  ExtraText,
  TextLink,
  colors,
} from "../../Syles/styles";
import * as Yup from "yup";
// auth & redux
import { connect, useDispatch } from "react-redux";
import { signUpUser } from "./../../../auth/actions/userAction";
import { useHistory } from "react-router-dom";
import Logo from "../../Logo/Logo";
import "./SignUp.css";
import { Formik, Form } from "formik";
import LogoIcon from "../../Logo/Logo";
import { TextInput } from "../../pages/Formik/FormLib";
import applecircle from "../../Assets/applecirlce.png";
import fbcircle from "../../Assets/fb-circle.png";
import googlecircle from "../../Assets/googlecircle.png";
import Loader from "react-loader-spinner";
import { getCountries } from "../../../redux/operators/auth.op";

const SignUp = ({ signUpUser }) => {
  const dispatch = useDispatch()


  const history = useHistory();

  useEffect(() => {
   dispatch(getCountries())
  }, [])

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
              city: "",
              country: "",
              password: "",
              confirm_password: "",
              username: "",
            }}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log(values);
              signUpUser(values, history, setFieldError, setSubmitting);
            }}
            validationSchema={Yup.object({
              firstname: Yup.string().required("Firstname is Required"),
              lastname: Yup.string().required("Lastname is Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("email is Required"),
              city: Yup.string().required("City is Required"),
              country: Yup.string().required("Country is Required"),
              phone: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Phone Number is Required"),
              password: Yup.string()
                .min(8, "password is too short")
                .max(30, "password is too long")
                .required("Password is Required"),
              username: Yup.string().required("Username is Required"),
              confirm_password: Yup.string()
                .required("confirm_password is Required")
                .oneOf([Yup.ref("password"), "Passwords must match"]),
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
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                />{" "}
                <TextInput type="text" name="referal" placeholder="Referal" />{" "}
                <TextInput name="country" type="text" placeholder=" Country" />
                <TextInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <TextInput
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                />
                <TextInput
                  name="username"
                  type="text"
                  placeholder=" Username"
                />
                <ButtonGroup>
                  {!isSubmitting && (
                    <StyledFormButton type="submit">Login</StyledFormButton>
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

export default connect(null, signUpUser)(SignUp);
