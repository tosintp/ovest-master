import React, { useState } from "react";
import AddBankAccount from "../AddBankAccount";
import ConfirmBank from "../ConfirmBank";
// import BankSuccessful from "../BankSuccessful";
import backicon from "../../../../../../Assets/backicon.svg";
import "../../BankCards/BankCard.css";

const BankModalIndex = ({ section, setSection: sectionSetter, addBank }) => {
  let CurrentPage;
  const [pageEmit, setPageEmit] = useState(null);

  const setSection = (section, ...args) => {
    sectionSetter(section);
    if (args.length) {
      setPageEmit(args);
    }
  };

  switch (section) {
    case 0:
      CurrentPage = (
        <AddBankAccount setSection={setSection} pageEmit={pageEmit} />
      );
      break;

    case 1:
      CurrentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setSection(0);
            }}
          >
            <img src={backicon} alt="back icon" className="back-icon" />
          </button>
          <ConfirmBank
            setSection={setSection}
            pageEmit={pageEmit}
            addBank={addBank}
          />
        </>
      );
      break;
    // case 2:
    //   CurrentPage = (
    //     <>
    //       <button
    //         className="backicon"
    //         onClick={() =>
    //         {
    //           setSection( 1 );
    //         }}
    //       >
    //         <img src={backicon} alt="back icon" className="back-icon" />
    //       </button>
    //       <BankSuccessful setSection={setSection} />
    //     </>
    //   );
    //   break;
    default:
    // wisdom...
  }

  return <div className="current-page">{CurrentPage}</div>;
};

export default BankModalIndex;
