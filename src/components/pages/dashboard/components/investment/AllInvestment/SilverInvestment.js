import React from 'react'
import './SilverInvestment.css'
import Rectangle64 from '../../../assets/Rectangle 64.svg'
import Rectangle68 from '../../../assets/Rectangle 68.svg'
import Rectangle66 from '../../../assets/Rectangle 66.svg'

const SilverInvestment = () => {
    return (
        <div className="parent-silverinvestment">
               <p className="get-started">Select an investment plan to get started</p>
               <div className="silver-investment mt-3">
               <img src={Rectangle64} alt="" className="silverinvestment-img"/>
               <div className="silver-investmentchild">
               <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
               <p className="silverinvestment-p">Lock-away funds safely in our Silvest investment plan for  
               <span> 3 months</span> with at least <span>NGN50,000.</span></p>
               <button className="silverinvestment-button">View Details</button>
               </div>
                </div>

                <div className="gold-investment">
               <img src={Rectangle68} alt="" className="silverinvestment-img"/>
               <div className="silver-investmentchild">
               <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
               <p className="silverinvestment-p">Lock-away funds safely in our Silvest investment plan for  
               <span> 3 months</span> with at least <span>NGN50,000.</span></p>
               <button className="silverinvestment-button">View Details</button>
               </div>
                </div>

                <div className="special-package">
               <img src={Rectangle66} alt="" className="silverinvestment-img"/>
               <div className="silver-investmentchild">
               <h6 className="silverinvestment-h6">Silvest Investment Plan</h6>
               <p className="silverinvestment-p">Lock-away funds safely in our Silvest investment plan for  
               <span> 3 months</span> with at least <span>NGN50,000.</span></p>
               <button className="silverinvestment-button">View Details</button>
               </div>
                </div>
             </div>
    )
}

export default SilverInvestment
