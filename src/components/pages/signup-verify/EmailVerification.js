import React, { useEffect, useState } from "react";
import LogoIcon from "../../Logo/Logo";
import { TextInput } from "../../pages/Formik/FormLib";
import Loader from "react-loader-spinner";
import { Form, Formik, Field } from "formik";
import {
  isLoading,
  selectCurrentUser,
  success,
  error,
  token,
} from "../../../redux/selectors/auth.selector";
import { Redirect, useHistory } from "react-router-dom";
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
import useAuth from "../../../hooks/useAuth";

const EmailVerification = ({ loading, success }) => {
  const [showLoader, setShowLoader] = useState(false);
  const { user } = useAuth();
  return (
    <StyledContainer>

    </StyledContainer>
  )
};

export default EmailVerification;
