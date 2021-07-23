import React from "react";
import "./Transaction.css";
import NoSavestTransacttion from "./NoSavestTransaction";
import SavestPlanDetails from "./SavestPlanDetails";
import savestfeeicon from "../../assets/savestfee-icon.svg";
import savesthouseicon from "../../assets/savest-houseicon.svg";

const Transaction = () => {
  return (
    <div className="TransactionSection">
      <div className="transactions">
        <NoSavestTransacttion />
        <div className="tuitionandrent-main">
          <SavestPlanDetails
            img={savestfeeicon}
            title={"Tuition Fees"}
            amount={"$0.00"}
            type={"Fixed Savest Plan"}
            interest={"Interest Rate"}
            percentage={"$0.00"}
            duration={"Per Annum"}
          />
          <div className="mt-5">
            <SavestPlanDetails
              img={savesthouseicon}
              title={"House Rent"}
              amount={"$0.00"}
              type={"Flexible Savest Plan"}
              interest={"Interest Rate"}
              percentage={"$0.00"}
              duration={"Per Annum"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
