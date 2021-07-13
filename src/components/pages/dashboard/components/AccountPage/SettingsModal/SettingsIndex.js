import React from "react";
import Settings from "./SettingsPage/Settings";
import Information from "./SettingsPage/Information";
import backicon from "../../../../../Assets/backicon.svg";
import info from "../../../assets/info.svg";

const SettingsIndex = ({ section, setSection }) => {
  let CurrentPage;
  switch (section) {
    case 0:
      CurrentPage = <Settings setSection={setSection} />;
      break;

    case 1:
      CurrentPage = (
        <>
          <a
            href="#settingsModal"
            className="backicon"
            onClick={() => {
              setSection(0);
            }}
          >
            <div style={{
              display: "flex",
              justifyContent:"space-between",
            }}>
              <img src={backicon} alt="back icon" className="back-icon" />
              <img src={info} alt="" />
            </div>
          </a>
          <Information setSection={setSection} />
        </>
      );
      break;
  }
  return <div className="current-page">{CurrentPage}</div>;
};

export default SettingsIndex;
