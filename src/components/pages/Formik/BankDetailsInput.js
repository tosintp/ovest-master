import React from "react";
import { useField } from "formik";

import {
  StyledTextInputBankTransfer,
  // StyledLabel,
  StyledIcon,
  ErrorMsg,
  // StyledTextInputCardFunding,
} from "../../Syles/styles";

export const BankTranferDetailsTextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);

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
