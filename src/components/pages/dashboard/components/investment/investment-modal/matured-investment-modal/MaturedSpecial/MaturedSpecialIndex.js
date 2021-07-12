import React from 'react'
import backicon from "../../../../../../../Assets/backicon.svg";
import MoniyaRailwayMatured from './MoniyaRailwayMatured';



const MaturedSpecialIndex = ({page , setPage}) => {
    let currentPage;
 switch (page){
     case 0:
         currentPage = <MoniyaRailwayMatured setPage={setPage}  />
         break;

    //      case 1:
    //   currentPage = (
    //     <>
    //       <button
    //         className="backicon"
    //         onClick={() => {
    //             setPage(0)
    //           }}
    //       >
    //         <img src={backicon} alt="back icon" />
    //       </button>
    //       <MaturedEarnings setPage={setPage} />
    //     </>
    //     );
    //     break;
      
 }

    return (
        <div className="current-stage">
            {currentPage}
        </div>
    )
}

export default MaturedSpecialIndex;
