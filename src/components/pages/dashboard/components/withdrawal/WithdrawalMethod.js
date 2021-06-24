import React from 'react'
import './withdrawal.css'

const WithdrawalMethod = ({setStage}) => {
    return (
        <div className='WithdrawalMethod'>
            <div className="WithdrawalMethod-header">
                <h5>
                    Withdraw
                </h5>
                <p>Where would you like to withdraw money to?</p>
            </div>
        </div>
    )
}

export default WithdrawalMethod
