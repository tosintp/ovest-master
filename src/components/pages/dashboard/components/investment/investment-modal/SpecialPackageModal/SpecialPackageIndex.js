import React from 'react'
import SelectLocation from './SelectLocation';
import SpecialInvestDetails from './SpecialInvestDetails';
import IbadanLandvest from './IbadanLandvest'
import backicon from "../../../../../../Assets/backicon.svg";



const SpecialPackageIndex = ({page , setPage}) => {
    let currentPage;
 switch (page){
     case 0:
         currentPage = <SpecialInvestDetails setPage={setPage}  />
         break;

         case 1:
      currentPage = (
        <>
          <button
            className="backicon"
            onClick={() => {
                setPage(0)
              }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <SelectLocation setPage={setPage} />
        </>
        );
        break;
      case 2:
        currentPage = (
          <>
            <button
              className="backicon"
              onClick={() => {
                  setPage(0)
                }}
            >
              <img src={backicon} alt="back icon" />
            </button>
            <IbadanLandvest setPage={setPage} />
          </>
          );
          break;
 }

    return (
        <div>
            {currentPage}
        </div>
    )
}

export default SpecialPackageIndex;
