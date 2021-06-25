import React from 'react'
import AddIcon from "@material-ui/icons/Add";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import './SavestTitle.css'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div className="savest">
      <div className="savestPage">
        <div className="SavestHeader">
          <h1>Savest</h1>
          <p>Hi Angela, let’s help you save towards a goal</p>
        </div>
        <div className="buttonSection">
          <div>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<AddIcon />}
              style={{
                backgroundColor: "#0768F6",
                width: "158px",
                height: "52px",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              Save Now
            </Button>
          </div>
          <div>
            <Button
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
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

