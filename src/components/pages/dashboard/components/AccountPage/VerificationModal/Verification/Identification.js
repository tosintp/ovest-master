import React, { useState } from "react";
import "./Identification.css";
import Upload from "../../../../assets/Upload.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import {
  ButtonGroup,
  colors,
  // StyledTextInputBankTransfer,
  StyledBankTransferFormButton,
} from "../../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "../../../../../Formik/BankDetailsInput";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Identification = () => {
  const classes = useStyles();
  const [filename, setFilename] = useState("Upload Valid ID");

  return (
    <div className="identification-section">
      <div className="identificationPage">
        <h1>Means of Identification</h1>
        <p>You must add a valid means of identification to get verified.</p>
      </div>
      <div className="identification-upload">
        <div>
          <label
            htmlFor="input"
            style={{
              display: "flex",
              cursor: "pointer",
            }}
          >
            <img src={Upload} alt="upload" className="upload" />
          </label>
          <input
            type="file"
            id="input"
            onChange={(event) => {
              const [file] = event.target.files;
              setFilename(file.name);
              console.log(event, event.target.value, event.target.files);
            }}
          />
          <p
            style={{
              marginTop: "10px",
            }}
          >
            {filename}
          </p>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{
            cardnumber: "",
          }}
          onSubmit={(values, { setSubmitting, setFieldError }) => {}}
          validationSchema={Yup.object({
            cardnumber: Yup.string().required(
              "Id Card Number Field is Required"
            ),
          })}
        >
          {({ isSubmitting }) => (
            <Form>
              <BankTranferDetailsTextInput
                name="cardnumber"
                type="tel"
                placeholder="ID Card Number"
              />
              <p className="Upload-note">
                NB: means of identification should be government issued which
                can be driver’s license, international passport, voter’s card
                etc
              </p>

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Upload ID
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

        {/* <input
          type="text"
          className="upload-input"
        /> */}
      </div>
    </div>
  );
};

export default Identification;
