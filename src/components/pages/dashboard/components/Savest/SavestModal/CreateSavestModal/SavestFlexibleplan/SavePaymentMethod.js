import React from "react";
import backtick from "../../../../../assets/backtick.svg";
import cardicon from "../../../../../assets/card-icon.svg";
import savestfundfrombank from "../../../../../assets/savestfundfrombank.svg";
import paymentmethod from "../../../../../assets/Payment System Logo.svg";

const PaymentMethod = ({ setMenu }) => {
  return (
    <div className="startinvestment-body">
      <div className="startinvestment-main">
        <div className="paymentmethod-main">
          <h5 className="paymentmethod-header">Payment Method</h5>
          <div className="payment-cards">
            <div className="paymentmethod-flex">
              <img src={cardicon} alt="" srcset="" className />
              <div>
                <h5 className="mb-4 wallet-title">Ovest Wallet</h5>
                <p className="investamount-balance mt-3">Balance: N0</p>
              </div>
              <img src={backtick} alt="" srcset="" onClick={() => setMenu(5)} />
            </div>
          </div>

          <div className="payment-cards">
            <div className="paymentmethod-flex">
              <img src={savestfundfrombank} alt="" srcset="" className />
              <div>
                <h5 className="mb-4 wallet-title-wallet-title-silverinvestment">
                  Fund from bank
                </h5>
              </div>
              <img src={backtick} alt="" srcset="" />
            </div>
          </div>
          <div className="select-cards">
            <p className="select-cards-p">Select Cards</p>
          </div>
          <div className="card-selection">
            <div className="payment-radio">
              <input type="radio" id="html" name="fav_language" value="HTML" />
            </div>
            <div className="payment-bank">
              <p className="payment-bank-p1">Ending in: **** 2345</p>
              <p className="payment-bank-p2">Access Bank</p>
              <p className="payment-bank-p3">
                Last time used: Mon Jul 04, 2021
              </p>
            </div>
            <div className="payment-method-img">
              <img src={paymentmethod} alt="" />
            </div>
          </div>
          <hr />
          <div className="card-selection">
            <div className="payment-radio">
              <input type="radio" id="html" name="fav_language" value="HTML" />
            </div>
            <div className="payment-bank">
              <p className="payment-bank-p1">Ending in: **** 2345</p>
              <p className="payment-bank-p2">Access Bank</p>
              <p className="payment-bank-p3">
                Last time used: Mon Jul 04, 2021
              </p>
            </div>
            <div className="payment-method-img">
              <img src={paymentmethod} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
