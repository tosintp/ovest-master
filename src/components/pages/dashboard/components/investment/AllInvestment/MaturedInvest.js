import React from 'react'
import './MaturedInvest.css'
import Rectangle64 from '../../../assets/Rectangle 64.svg'

const MyInvestment = () => {
    return (
        <div className="parent-allinvestment">
        <p className="get-started">Here is the list of all your investments</p>
          <div className="all-investment">
          <img src={Rectangle64} alt="" className="allinvestment-img"/>
          <div className="all-investmentchild"> 
          <h6 className="allinvestment-h6">Silvest Investment Plan</h6>
          <p className="allinvestment-p">Capital NGN50,000</p>
          <button className="allinvestment-button">Plan Details</button>
          </div>
          <div className="matured-main">
            <p className="matured">Matured </p>
            <p className="matured-naira">N150,000</p>
            <p className="matured-balance">Balance</p>
          </div>
           </div>

           <div className="all-investment">
          <img src={Rectangle64} alt="" className="allinvestment-img"/>
          <div className="all-investmentchild"> 
          <h6 className="allinvestment-h6">Silvest Investment Plan</h6>
          <p className="allinvestment-p">Capital NGN50,000</p>
          <button className="allinvestment-button">Plan Details</button>
          </div>
          <div className="matured-main">
            <p className="matured">Matured </p>
            <p className="matured-naira">N150,000</p>
            <p className="matured-balance">Balance</p>
          </div>
           </div>

           <div className="all-investment">
          <img src={Rectangle64} alt="" className="allinvestment-img"/>
          <div className="all-investmentchild"> 
          <h6 className="allinvestment-h6">Silvest Investment Plan</h6>
          <p className="allinvestment-p">Capital NGN50,000</p>
          <button className="allinvestment-button">Plan Details</button>
          </div>
          <div className="matured-main">
            <p className="matured">Matured </p>
            <p className="matured-naira">N150,000</p>
            <p className="matured-balance">Balance</p>
          </div>
           </div>
        </div>
    )
}

export default MyInvestment
