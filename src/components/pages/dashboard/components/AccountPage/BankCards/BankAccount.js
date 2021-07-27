import React, { useState, useEffect } from "react";
import AddIcon from "../../../assets/AddBankIcon.svg";
import "./BankCard.css";
import BankModalIndex from "./BankModal/BankModalIndex";
import ATM from "../../../assets/ATM.svg";
import deleteIcon from "../../../assets/delete-icon.svg";
import backicon from "../../../../../Assets/backicon.svg";
import { $api } from "../../../../../../helpers/$api";

const BankItem = ({
  Account_name: name,
  Bank_Name: bank,
  Account_number: accountNumber,
  onDeleteClick,
}) => {
  return (
    <div className="bank-item">
      <div className="delete-screen">
        <p className="delete-button" onClick={onDeleteClick}>
          <img src={deleteIcon} alt="delete-icon" className="delete-icon" />
          <span>Delete Account</span>
        </p>
      </div>
      <div className="content">
        <p className="bank-holder">{name}</p>

        <div className="bank-footer">
          <p className="bank">{bank}</p>
          <p className="account-number">{accountNumber}</p>
        </div>
      </div>
    </div>
  );
};

const BankAccount = () => {
  const [section, setSection] = useState(0);
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const banks = await $api.user.getSavedBanks();

        setBanks(banks);
      } catch (error) {
        // error getting banks
      }
    })();
  }, [setBanks]);

  const handleBankItemDelete = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    const continueWithDelete = confirm(
      "Are you sure you want to delete this bank account?"
    );
    if (continueWithDelete) {
      const oldBanks = [...banks];
      const newBanks = banks.filter((bank) => bank.id !== id);
      setBanks(newBanks);
      try {
        await $api.user.deleteBankAccount(id);
      } catch (error) {
        setBanks(oldBanks);
        //toast error.message
      }
    }
  };

  return (
    <div>
      <div className="bank-list">
        <a href="#AddBankModal">
          <div className="bank-details" style={{ marginTop: 0 }}>
            <img src={AddIcon} alt="" className="bank-icon" />
            <p className="bank-text">Add new bank</p>
          </div>
        </a>

        {banks.map((bank) => {
          return (
            <BankItem
              {...bank}
              key={bank.id}
              onDeleteClick={() => handleBankItemDelete(bank.id)}
            />
          );
        })}
      </div>

      <>
        <div id="AddBankModal" className="addbank-modal">
          <div className="accountmodal-head">
            {section === 0 ? (
              <a href="#" className="backicon">
                <img src={backicon} alt="back icon" className="back-icon" />
              </a>
            ) : null}
            <BankModalIndex
              {...{
                section,
                setSection,
                addBank(payload) {
                  setBanks([...banks, payload]);
                },
              }}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default BankAccount;
