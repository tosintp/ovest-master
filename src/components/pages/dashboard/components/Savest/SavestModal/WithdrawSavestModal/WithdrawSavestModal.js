import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../../../../../../redux/actions/modal.action";
import closemodalicon from "../../../../../../Assets/closemodalicon.svg";
import WithdrawSavestIndex from "./SpecialPackageIndex";

const WithdrawSavestModal = () => {
  const [menu, setMenu] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="investpages">
        {page === 0 ? (
          <button
            className="closemodalicon-btn"
            onClick={() => {
              setMenu(0);
              dispatch(hideModal());
            }}
          >
            <img src={closemodalicon} alt="" className="closemodal" />
          </button>
        ) : null}

        <WithdrawSavestIndex {...{ menu, setMenu }} />
      </div>
    </div>
  );
};

export default CreateSavestModal;
