import React from 'react'
// import SelectLocation from './SelectLocation';
// import SpecialInvestDetails from './SpecialInvestDetails';
// import IbadanLandvest from './IbadanLandvest'
// import SpecialPackageInvestNow from './SpecialPackageInvestNow';
import MyInvestmentSilverPlan from './MyInvestmentSilverPlan';



const SpecialPackageIndex = ({page , setPage}) => {
    let currentPage;
 switch (page){
     case 0:
         currentPage = <MyInvestmentSilverPlan setPage={setPage}  />
         break;

 }

    return (
        <div className="current-stage">
            {currentPage}
        </div>
    )
}

export default SpecialPackageIndex;
