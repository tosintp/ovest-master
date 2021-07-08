import React from "react";
import PaymentOption from "../AccountDetails/PaymentOption";
import AboutOvest from "../AccountDetails/AboutOvest";
import backicon from "../../../../../Assets/backicon.svg";

const AccountIndex = ({ section, setSection }) => {
  let CurrentPage;
  switch (section) {
    case 0:
      CurrentPage = <PaymentOption setSection={setSection} />;
      break;

    case 1:
      CurrentPage = (
        <>
          <a
            href="#"
            className="backicon"
            onClick={() => {
              setSection(1);
            }}
          >
            <img src={backicon} alt="back icon" />
          </a>
          <AboutOvest setSection={setSection} />
        </>
      );
      break;
  }
  return <div>{CurrentPage}</div>;
};

export default AccountIndex;
