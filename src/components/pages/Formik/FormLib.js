import React, { useState } from "react";

import { useField } from "formik";
import {
  StyledTextInput,
  StyledTextInputBankTransfer,
  // StyledLabel,
  StyledIcon,
  ErrorMsg,
  // StyledTextInputCardFunding,
} from "../../Syles/styles";

import { FiEyeOff, FiEye } from "react-icons/fi";

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};

export const BankTranferDetailsTextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledTextInputBankTransfer
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledTextInputBankTransfer
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg
          style={{
            marginLeft: "30px",
            marginTop: "-15px",
            fontSize: "10px",
          }}
        >
          {meta.error}
        </ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};

export const CardFundingTextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledTextInputBankTransfer
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};

export const EmailVerifyInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledTextInput
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}
      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledTextInputBankTransfer
          invalid={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} left>
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ display: "none" }}>.</ErrorMsg>
      )}
    </div>
  );
};