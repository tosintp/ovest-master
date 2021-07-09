import React from 'react'
import './SilverInvestmentDetails.css'

const SilverInvestmentDetails = ({setPage}) => {
    return (
      <div className="silvestinvestment">
      <div className="silvestinvestment-body">
          <div className="silvestinvestment-main">
          <h5 className="silvestinvestment-h5">Silvest Invesment Details</h5>
          {/* <hr/> */}
        <p className="silvestinvestment-p">Description</p>
        <p className="silvestinvestment-textbody">Silvest Investment Plan is a 3 months plan with a minimum capital of N
            50,000. The interest rate
             is 50% which would be paid 15% monthly and the third month would be 20% and the initial capital.</p>
      </div>
      <div className="silvest-flexbody">
        <div className="minimum-pricebody">
            <p className="minimum-price">Minimum Price</p>
            <p className="price">N50,000</p>
        </div>
        <div className="durationbody">
            <p className="duration">Duration</p>
            <p className="month">2 months</p>
        </div>
      </div>
      <div className="silvest-flexbody2">
        <div className="minimum-pricebody">
            <p className="minimum-price">Interest Rate</p>
            <p className="price">50%</p>
        </div>
        <div className="durationbody">
            <p className="duration">Investment Type</p>
            <p className="month">Flexible income</p>
        </div>
      </div>
      <div className="note-main">
          <p className="note">Note: Investment capital are not fixed as seen above, but are between 
              the values of N50,000 and above</p>
      </div>
      <button className="invest" onClick={() => setPage(1)}>Invest</button>
          </div>
        </div>
    )
}

export default SilverInvestmentDetails
