import React, { useState } from "react";
import "./bank.css";
import uploadfile from "../../../../../Assets/uploadfile.svg";
import {
  // StyledContainer,
  // StyledFormArea,
  // StyledLabel,
  // StyledTextInput,
  // StyledFormButton,
  // StyledTitle,
  ButtonGroup,
  StyledBankTransferFormButton,
  // SubTitle,
  // ExtraText,
  // TextLink,
  colors,
} from "../../../../../Syles/styles";
import { $api } from "../../../../../../helpers/$api";
import { API_URL } from "../../../../../../helpers/config";
import Loader from "react-loader-spinner";

const BankTranferVerify = ({ setStage }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile] = useState();
  const [filename, setFilename] = useState(
    "Upload a scanned copy or photo of your details to verify your payment."
  );

  // const changeHandler = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  const changeStage = () => {
    setStage(4);
  };
  const handleSubmission = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("pop", selectedFile);

      await $api.user.request({
        method: "POST",
        url: `${API_URL}/user/wallet/bank/update/pop`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("hello there");
      changeStage();
    } catch (error) {
      console.debug(error);
    }

    // var pop = formData.get("File").name;
    // var new_pop = [pop];
    // console.log(new_pop);

    // apiPost(`wallet/bank/update/pop`, new_pop, {
    //   "content-type": undefined,
    //   Accept: "application/json",
    // })
    //   // fetch("https://ovest.paym.com.ng/api/user/wallet/bank/update/pop", {
    //   //   method: "POST",
    //   //   body: formData,
    //   // })
    //   .then((data) => {
    //     console.log(data);

    //     if (data.status === "success") {
    //       changeStage();
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div className="banktransferverify">
      <div
        style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            marginTop: "40px",
            marginBottom: "23px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="w3-blue"
        >
          <div
            className="w3-blue"
            style={{
              height: "2px",
              width: "100%",
            }}
          ></div>
        </div>
        <br></br>

        <div className="verify-payment-header">
          <h5>Verify Payment</h5>
          <p>Upload the following document to complete your verification</p>
        </div>

        <form onSubmit={handleSubmission}>
          <div className="verify-payment-card">
            <label htmlFor="upload" className="custom-file-upload">
              <img src={uploadfile} alt="Upload file" />
            </label>
            <input
              type="file"
              id="upload"
              name="upload"
              // onChange={changeHandler}
              required
              style={{ display: "none" }}
              onChange={(event) => {
                const [file] = event.target.files;
                setFilename(file.name);
                console.log(event, event.target.value, event.target.files);
              }}
            />

            <p>{filename}</p>
          </div>

          <div className="verify-payment-footer">
            <p>
              *Please note that if additional informational is needed, Nebbix
              will inform you via email.
            </p>
          </div>

          <ButtonGroup>
            {!isSubmitting && (
              <StyledBankTransferFormButton type="submit">
                Verify
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
        </form>
      </div>
    </div>
  );
};

export default BankTranferVerify;
