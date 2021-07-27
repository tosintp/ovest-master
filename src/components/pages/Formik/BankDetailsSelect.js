import { useField } from "formik";
import React from "react";

import {
  StyledTextSelectBankTransfer,
  // StyledLabel,
  StyledIcon,
  ErrorMsg,
  // StyledTextInputCardFunding,
} from "../../Syles/styles";

const BankTranferDetailsSelect = ({ icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div style={{ position: "relative" }}>
      {props.type !== "password" && (
        <StyledTextSelectBankTransfer
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

export default BankTranferDetailsSelect;
