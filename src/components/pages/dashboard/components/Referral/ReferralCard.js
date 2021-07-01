import React from 'react'
import './ReferralCard.css'

const ReferralCard = () => {
  return (
    <div className="referral-section">
      <div className="referral-card">
        <div className="card-one">
          <p>Interest Rate</p>
          <h6 style={{color:"#038830"}}>N100,000</h6>
        </div>
        <div className="card-two">
          <p>Pending Earnings</p>
          <h6 style={{color: "#FD740E"}}>N 0</h6>
        </div>
        <div className="card-three">
          <p>Members Referred</p>
          <h6 style={{color: "#0768F6"}}>10</h6>
        </div>
      </div>
    </div>
  );
}

export default ReferralCard
