import { useField } from "formik";
import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

import {
  StyledTextSelectBankTransfer,
  // StyledLabel,
  StyledIcon,
  ErrorMsg,
  // StyledTextInputCardFunding,
} from "../../Syles/styles";

const BankTranferDetailsSelect = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

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
