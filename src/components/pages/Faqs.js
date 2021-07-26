import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import searchInput from "../Assets/searchinput.svg";
import General from "./General";
import SavingsInvestment from "./SavingsInvestment";
import FeesCharges from "./FeesCharges";
import SafetySecurity from "./SafetySecurity";
import Faqswithdrawal from "./Faqswithdrawal";
import FaqsPeople from "./FaqsPeople";
import TelegramCommunity from "./TelegramCommunity";
import Footer from "./footer";

import "./Faqs.css";

const Faqs = () => {
  return (
    <>
      <DefaultLayout>
        <div>
          <div className="faqs-body">
            <div className="questions-details">
              <h1>Frequently Asked Questions</h1>
              <p>Quick answers to your most pressing questions</p>
              <div className="questions-search">
                <img src={searchInput} alt="" />
                <input
                  type="text"
                  placeholder="search for a question"
                  className="questions-input"
                />
              </div>
            </div>
          </div>

          <General />
          <SavingsInvestment />
          <FeesCharges />
          <SafetySecurity />
          <Faqswithdrawal />
          <FaqsPeople />
          <div className="telegram-faq">
            <TelegramCommunity />
          </div>
          <div className="footer-component">
            <Footer />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Faqs;
