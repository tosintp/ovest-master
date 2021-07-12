import React from 'react'
import './SpecialPackage.css'
import landvest from '../../../../../assets/landvesticon.svg'

const IbadanLandvest = ({setPage}) => {
    return (
        <div>
             <div className="silvestinvestment">
      <div className="silvestinvestment-body">
          <div className="silvestinvestment-main">
          <h5 className="silvestinvestment-h5 mb-3">Ibadan LandVest Plan</h5>
        <p className="silvestinvestment-textbody">Invest in OHouseEstate and become a land-owner in 6 months</p>
      </div>
      <div className="landvest-location mt-4">
        <div className="landvest-flex">
            <img src={landvest} alt="an iamhge" />
            <h5 className="landvest-title">Moniya (DryPort/Railway)</h5>
        </div>
        <p className="landvest-p">Become a land-owner at Moniya, Ibadan in <span>6 months </span>by investing 
        <span>N300,000</span> instead of <span>N650,000</span></p>
         <button className="landvest-button mb-4">View Details</button>
      </div>

      <div className="landvest-location mt-4">
        <div className="landvest-flex">
            <img src={landvest} alt="an iamhge" />
            <h5 className="landvest-title">Akaran (Ilaji Resort)</h5>
        </div>
        <p className="landvest-p">Become a land-owner at Moniya, Ibadan in <span>6 months </span>by investing
         <span>N650,000 </span>instead of <span>N1,400,000</span></p>
         <button className="landvest-button mb-4">View Details</button>
      </div>

      <div className="landvest-location mt-4">
        <div className="landvest-flex">
            <img src={landvest} alt="an iamhge" />
            <h5 className="landvest-title">Ologuneru (Ido LGA)</h5>
        </div>
        <p className="landvest-p">Become a land-owner at Moniya, Ibadan in <span>6 months </span>by investing
         <span>N650,000 </span>instead of <span>N1,400,000</span></p>
         <button onClick={() => setPage(3)} className="landvest-button mb-4">View Details</button>
      </div>
      </div>
        </div>
        </div>
    )
}

export default IbadanLandvest
