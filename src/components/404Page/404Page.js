import React from "react";
import "./404page.css";
import four from "../Assets/four.svg";
import zero from "../Assets/zero.svg";
import DefaultLayout from "./../../layouts/DefaultLayout";

const ErrPage = () => {
  return (
    <>
      <DefaultLayout>
        <div className="errpage">
          <p>Whoops, that page is gone.</p>

          <div className="err-image">
            <img src={four} alt="four-img" />
            <img src={zero} alt="zero-img" />
            <img src={four} alt="four-img" />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default ErrPage;
