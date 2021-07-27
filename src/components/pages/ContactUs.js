import React from "react";
import "../../App.css";
import "./ContactUs.css";
import Footer from "./footer";
import DefaultLayout from "../../layouts/DefaultLayout";
import community from "../Assets/community.svg";
import send from "../Assets/send.svg";
import questionmark from "../Assets/question-mark.svg";
import backtick from "../pages/dashboard/assets/backtick.svg";
import TelegramCommunity from "./TelegramCommunity";

const ContactUs = () => {
  return (
    <>
      <DefaultLayout>
        <div>
          <div className="contactus">
            <div className="contactus-main">
              <div className="contactus-header">
                <h5 className="contactus-header-h5">Contact Us</h5>
                <p className="contactus-header-p">
                  Need support? Have a question? Running into a problem? We’re
                  here to help.
                </p>
              </div>
              <div className="contactus-major-cards">
                <div className="have-a-question">
                  <div className="have-a-question-main">
                    <div className="have-question-img">
                      <img src={questionmark} alt="questionmark-img" />
                    </div>
                    <h5 className="have-a-question-h5">Have a question?</h5>
                    <p className="checkout-faq">
                      Check out our FAQ section for tons of answers to some of
                      our most common customer questions. It’s the fastest way
                      to get the answer you’re looking for!
                    </p>
                    <p className="visit-the-faq">
                      Visit the FAQs page
                      <span>
                        <img src={backtick} alt="backarrow-img" />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="drop-a-message">
                  <div className="have-a-question-main">
                    <div className="have-question-img">
                      <img src={send} alt="questionmark-img" />
                    </div>
                    <h5 className="have-a-question-h5">Drop us a message</h5>
                    <p className="checkout-faq">
                      Our support team is on hand to take your queries and offer
                      prompt resolutions to your tickets.
                    </p>
                    <p className="drop-visit-the-faq">
                      Contact support
                      <span>
                        <img src={backtick} alt="backarrow-img" />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="ask-the-community">
                  <div className="have-a-question-main">
                    <div className="have-question-img">
                      <img src={community} alt="questionmark-img" />
                    </div>
                    <h5 className="have-a-question-h5">Ask the community</h5>
                    <p className="checkout-faq">
                      We have a vibrant community of Carbon customers where we
                      communicate regular updates about our products and
                      services.
                    </p>
                    <p className="join-our-community-faq">
                      Join our Community
                      <span>
                        <img src={backtick} alt="backarrow-img" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="the-telegram-community">
            <TelegramCommunity />
          </div>
        </div>

        {/* <Footer /> */}
      </DefaultLayout>
    </>
  );
};
export default ContactUs;
