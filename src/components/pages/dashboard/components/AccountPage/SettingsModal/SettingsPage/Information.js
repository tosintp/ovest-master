import React, { useState } from "react";
import { connect } from "react-redux";
import { merge } from "lodash";
import "./Information.css";
import Loader from "react-loader-spinner";
import { Formik, Form } from "formik";
import Info from "../../../../assets/info.svg";
import { CountryDropdown } from "react-country-region-selector";

import {
  ButtonGroup,
  StyledBankTransferFormButton,
  colors,
} from "../../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "./../../../../../Formik/BankDetailsInput";
import closemodalicon from "../../../../../../Assets/closemodalicon.svg";
import { updateUserAction } from "../../../../../../../store/user/user.action";
import { useUser } from "../../../../../../../hooks/use-user";

const Information = ({ updateUser }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const user = useUser();

  const handleSubmit = async (values, { setSubmitting }) => {
    const update = merge({}, user, values);
    try {
      setSubmitting(true);
      await updateUser(update);
    } catch (error) {
      alert(error.message);
      // use toast or error reporting here
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="information">
      <div>
        <img
          src={Info}
          alt="Info"
          className="info-image"
          onClick={() => setShowSuccess(true)}
        />
      </div>
      <p className="information-para">Personal Information</p>
      <div className="formSection">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            username: "",
            gender: "",
            Email: "",
            phonenumber: "",
            country: user.country,
            state: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, values, handleBlur }) => (
            <Form>
              <p className="info-label">First Name</p>
              <BankTranferDetailsTextInput
                name="firstname"
                type="tel"
                placeholder={user.firstname}
              />

              <p className="info-label">Last Name</p>
              <BankTranferDetailsTextInput
                name="lastname"
                type="tel"
                placeholder={user.lastname}
              />

              <p className="info-label">Username</p>
              <BankTranferDetailsTextInput
                name="username"
                type="tel"
                placeholder={user.username}
              />

              <p className="info-label">Gender</p>
              <BankTranferDetailsTextInput
                name="gender"
                type="tel"
                placeholder={user.gender}
              />

              <p className="info-label">Email </p>
              <BankTranferDetailsTextInput
                name="email"
                type="tel"
                placeholder={user.email}
              />

              <p className="info-label">Phone Number</p>
              <BankTranferDetailsTextInput
                name="phonenumber"
                type="tel"
                placeholder={user.phonenumber}
              />

              <p className="info-label">Country</p>
              <CountryDropdown
                style={{
                  width: "380px",
                  height: "48px",
                  borderRadius: "4px",
                  color: "#757575",
                  border: " 1px solid #c4c4c4",
                  fontSize: "12px",
                  display: "block",
                  outline: "none",
                  transition: "ease-in-out 0.3s",
                  margin: "19px auto 10px auto",
                  paddingLeft: "16px",
                  "&:focus": {
                    backgroundColor: "#fcf5f5",
                    color: "black",
                  },
                }}
                name="country"
                value={values.country}
                onChange={(_, e) => handleChange(e)}
                onBlur={handleBlur}
              />

              <p className="info-label">State</p>
              <BankTranferDetailsTextInput
                name="state"
                type="tel"
                placeholder={user.state}
              />

              <ButtonGroup className="button-group">
                {!isSubmitting && (
                  <StyledBankTransferFormButton type="submit">
                    Update Profile
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

      <div
        className={`confirmbank__success-bg ${
          showSuccess ? "success-info" : ""
        }`}
      >
        <div className="confirm__success-content">
          <div className="confirm-close-modal">
            <button className="closemodal-btn">
              <img
                src={closemodalicon}
                alt=""
                className="closemodal"
                onClick={() => setShowSuccess(false)}
              />
            </button>
          </div>
          <div className="info-text">
            <h1>Kindly Note</h1>
            <p>
              Some details here can’t be edited. Contact support@ovest.ng to
              effect some changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = { updateUser: updateUserAction };

export default connect(null, mapDispatchToProps)(Information);
