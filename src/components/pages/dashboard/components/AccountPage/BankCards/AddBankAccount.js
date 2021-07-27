import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { Formik, Form } from "formik";
import {
  ButtonGroup,
  StyledBankTransferFormButton,
  colors,
} from "../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "./../../../../Formik/BankDetailsInput";
import "./BankCard.css";
import { $api } from "../../../../../../helpers/$api";

const AddBankAccount = ({ setSection, pageEmit }) => {
  const [banks, setBanks] = useState([]);
  const [bank] = pageEmit || [];
  const [values, setValues] = useState(
    bank || {
      account_name: "",
      account_number: "",
      bank: "",
    }
  );

  const handleValue = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (_, { setSubmitting, setFieldError }) => {
    const entries = Object.entries(values);
    let hasError = false;
    entries.forEach((entry) => {
      const [field, value] = entry;
      if (!value) {
        setFieldError(
          field,
          `${field.replace("_", " ").replace("no", "number")} is required`
        );

        hasError = true;
      }
    });
    setSubmitting(false);
    if (!hasError) {
      setSection(1, values);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const banks = await $api.user.getBanks();

        setBanks(banks);
      } catch (error) {
        // error getting banks
      }
    })();
  }, [setBanks]);

  return (
    <div className="addbank-page">
      <p className="bank_text">Add Bank Account</p>
      <div className="formSection">
        <Formik
          initialValues={{
            account_number: "",
            account_name: "",
            bank: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="crypto-form">
              <BankTranferDetailsTextInput
                onChange={handleValue}
                value={values.account_name}
                name="account_name"
                type="tel"
                placeholder="Enter Account Name"
              />

              <BankTranferDetailsTextInput
                onChange={handleValue}
                value={values.account_number}
                name="account_number"
                type="tel"
                placeholder="Enter Account Number"
              />
              <div>
                <select
                  name="bank"
                  onChange={handleValue}
                  initialValues={values.bank}
                  className="bank-select ml-5"
                >
                  <option value={values.bank_name} key={values.bank_name}>
                    {values.bank_name || "Select Bank"}
                  </option>

                  {banks.map((bank) => {
                    return (
                      <option value={bank.name} key={bank.id}>
                        {bank.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <ButtonGroup className="button-group">
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Confirm Bank Account
                  </StyledBankTransferFormButton>
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
      </div>
    </div>
  );
};

export default AddBankAccount;
