import React, { useState } from "react";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./SavestTitle.css";
import { showModal } from "../../../../../redux/actions/modal.action";
import useAuth from "../../../../../hooks/useAuth";
import savestinactive from "../../assets/withdraw-savest-inactive.svg";
import savestactive from "../../assets/withdraw-savest-active.svg";
import { FiPlus } from "react-icons/fi";
import { color } from "@material-ui/system";
import closemodalicon from "../../../../Assets/closemodalicon.svg";
import WithdrawSavestIndex from "./SavestModal/WithdrawSavestModal/WithdrawSavestIndex";
// import CreateSavestIndex from "./SavestModal/CreateSavestModal/CreateSavestIndex"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const SavestTitle = ({ toggleModalAppearance }) => {
  const [menu, setMenu] = useState(0);
  const [savestTransactionActive] = useState(false);
  const classes = useStyles();
  const openModal = () => {
    toggleModalAppearance();
    console.log("open redux");
  };
  const { user } = useAuth();

  return (
    <div className="savest">
      <div className="savestPage">
        <div className="SavestHeader">
          <h1>Savest</h1>
          <p className="">Hi angela , let’s help you save towards a goal</p>
        </div>
        <div className="buttonSection">
          {/* <Button
              variant="outlined"
              className={classes.button}
              startIcon={<BackupOutlinedIcon />}
              style={{
                width: "158px",
                height: "52px",
                color: "#DADADA",
                fontSize: "1.2rem",
                fontWeight: "500"
                // border: "1px solid #DADADA",
                // backgroundColor: "white",
              }}
            >
              Withdraw
            </Button> */}

          <div
            className={`savestbtn-inactive ${
              savestTransactionActive ? "savestbtn-active" : ""
            }`}
          >
            <FiPlus style={{ fontSize: "20px", color: "#dadada" }} />

            <p>Save now</p>
          </div>
            <a href="#maturedspecialindex">
          <div
            className={`savestbtn-inactive ${
              savestTransactionActive ? "savestwithdraw-active" : ""
            }`}
          >
            <img
              src={savestTransactionActive ? savestactive : savestinactive}
              alt="save now"
            />
            <p>Withdraw</p>
          </div>
          </a>

        </div>
      </div>
       <>
        <div id="maturedspecialindex" className="maturedspecialindex">
          <div className="investmodal-head">
            {menu === 0 ? (
              <a
                href="#"
                className="closemodalicon-btn"
                onClick={() => {
                  setMenu(0);
                }}
              >
                <img src={closemodalicon} alt="" className="closemodal" />
              </a>
            ) : null}

            <WithdrawSavestIndex {...{ menu, setMenu }} />
          </div>
        </div>
      </>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleModalAppearance: () => dispatch(showModal()),
  // toggleWithdrawalModalAppearance: () => dispatch(showWithdrawalModal()),
});
export default connect(null, mapDispatchToProps)(SavestTitle);
