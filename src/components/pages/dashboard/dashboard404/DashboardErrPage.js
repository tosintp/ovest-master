import React from "react";
import "./DashboardErrpage.css";
import DashboardLayout from "../dashboardDefaultLayout/DashboardLayout";
import four from "../../../Assets/four.svg";
import zero from "../../../Assets/zero.svg";
const DashboardErrPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="errpage1">
          <p>Whoops, that page is gone.</p>

          <div className="err-image1">
            <img src={four} alt="four-img" />
            <img src={zero} alt="zero-img" />
            <img src={four} alt="four-img" />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardErrPage;
