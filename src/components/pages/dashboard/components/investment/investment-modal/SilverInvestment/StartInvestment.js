import React from 'react'
import './SilverInvestmentDetails.css'

const StartInvestment = ({setPage}) => {
    return (
        <div className="startinvestment">
        <div className="startinvestment-body">
            <div className="startinvestment-main">
            <h5 className="startinvestment-h5"> Invest</h5>
          <p className="startinvestment-textbody">Invest in silvest plan and earn 50% interest in 3 months</p>
           <div className="amountinvest">
               <p className="amount-p">How much would you like to invest?</p>
               <input type="text" className="startinvest-input" placeholder="NGN"/>
               <p className="minimum-amount">Minimum amount:N50,000</p>
           </div>
           <div className="start-date">
               <p className="amount-p">Start date</p>
               <input type="text" className="startinvest-input" placeholder="DD/MM/YYYY"/>
               <div className="start-date">
               <p className="amount-p">Maturity date</p>
               <input type="text" className="startinvest-input" placeholder="10,Jun 2021"/> 
               </div>
           </div>
           <div className="radiobutton">
           <input type="radio" id="html" name="fav_language" value="HTML" className="radio-input"/>
            <label for="html" className="enquiry-label">Prefer ROI to be disimbursed 
            after investment cycle</label><br/>
            </div>
            <div className="radiobutton">
            <input type="radio" id="html" name="fav_language" value="HTML" className="radio-input2"/>
            <label for="html" className="enquiry-label2">Prefer ROI to be disimbursed 
            after investment cycle</label>
            </div>
           <div className="interest-rate">
               <div className="interest-flex">
                   <p>Interest Rate</p>
                   <p>50%</p>
               </div>
               <div className="interest-flex">
                   <p >Estimated Returns</p>
                   <p>50%</p>
               </div>
           </div>
        <button className="invest" onClick={() => setPage(2)}>Invest</button>
        </div>
    </div>
    </div>
    )
}
export default StartInvestment
