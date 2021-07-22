import React, { useState } from "react";
import { connect } from "react-redux";
import { merge } from "lodash";
import "./Information.css";
import Loader from "react-loader-spinner";
import { Formik, Form } from "formik";
import Info from "../../../../assets/info.svg";
import {
  ButtonGroup,
  StyledBankTransferFormButton,
  colors,
} from "../../../../../../Syles/styles";
import { BankTranferDetailsTextInput } from "./../../../../../Formik/BankDetailsInput";
import * as Yup from "yup";
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
      <p>Personal Information</p>
      <div className="formSection">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            username: "",
            gender: "",
            Email: "",
            phonenumber: "",
            country: "",
            state: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <BankTranferDetailsTextInput
                name="firstname"
                type="tel"
                placeholder={user.firstname}
              />

              <BankTranferDetailsTextInput
                name="lastname"
                type="tel"
                placeholder={user.lastname}
              />

              <BankTranferDetailsTextInput
                name="username"
                type="tel"
                placeholder={user.username}
              />

              <BankTranferDetailsTextInput
                name="gender"
                type="tel"
                placeholder={user.gender}
              />
              <BankTranferDetailsTextInput
                name="email"
                type="tel"
                placeholder={user.email}
              />

              <BankTranferDetailsTextInput
                name="phonenumber"
                type="tel"
                placeholder={user.phonenumber}
              />
              <BankTranferDetailsTextInput
                name="country"
                type="tel"
                placeholder={user.country}
              />
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
