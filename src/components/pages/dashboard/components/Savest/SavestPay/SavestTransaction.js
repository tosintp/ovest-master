import React from 'react'
import SavestCard from '../SavestCard'
import './SavesTransaction.css'
import Tabs from "../SavestPay/Tabs"
// import Transactiondetails from './Transactiondetails'

const SavestTransaction = () => {
  return (
    <div>
      <SavestCard />
      <div className="transactionSession">
        <div className="transactionTitle">
          <p>Savest Transactions</p>
          <span>View Earnings</span>
        </div>
        <Tabs />
        {/* <Transactiondetails/> */}
      </div>
    </div>
  );
}

export default SavestTransaction
