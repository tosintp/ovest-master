import React, { useState, useEffect } from "react";
import { pick } from "lodash";
import "./PaymentOption.css";
import Transfer from "../../../assets/Transfer.svg";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Card from "../../../assets/Card.svg";
import crypto from "../../../assets/crypto.svg";
import wallet from "../../../assets/wallet.svg";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import { Util } from "../../../../../../helpers/util";
import { $api } from "../../../../../../helpers/$api";

const PaymentOption = () => {
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 32,
      height: 20,
      padding: 0,
      margin: theme.spacing(1),
      marginTop: "19px",
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: "#0768F6",
        marginTop: "px",

        "& + $track": {
          backgroundColor: "#ffffff",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#ffffff",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 14,
      height: 17,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[500],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    is_crypto: false,
    is_dollar: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await $api.user.getUserStatus();
        const data = pick(res, ["is_crypto", "is_dollar"]);

        setState((i) => ({
          ...i,
          ...{
            is_crypto: data.is_crypto === 1,
            is_dollar: data.is_dollar === 1,
          },
        }));
      } catch (error) {
        // error
      }
    })();
  }, [setState]);

  const handleChange = async (event) => {
    const { name } = event.target;
    if (state[name]) return;

    try {
      switch (name) {
        case "is_crypto": {
          await $api.user.activateCryptoAccount();
          break;
        }
        case "is_dollar": {
          await $api.user.activateDollarAccount();
          break;
        }
        default:
        // DRY
      }
      setState({ ...state, [name]: true });
    } catch (error) {
      // error activating option
    }
  };
  return (
    <div className="payment-page">
      <div className="payment-header">
        <h1>Payment Option</h1>
        <p>
          Select your preferred payment option for withdrawal and wallet funding
        </p>
      </div>
      <div className="paymentOption">
        <div className="payment-details">
          <img src={Transfer} alt="name" />
          <p>By Bank Transfer</p>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.checkedA}
                  onChange={Util.noop}
                  name="checkedA"
                />
              }
            />
          </FormGroup>
        </div>
      </div>
      <div className="paymentOption">
        <div className="payment-details">
          <img src={Card} alt="name" />
          <p>By Card</p>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.checkedB}
                  onChange={Util.noop}
                  name="checkedB"
                />
              }
            />
          </FormGroup>
        </div>
      </div>
      <div className="paymentOption">
        <div className="payment-details">
          <img src={crypto} alt="name" />
          <p>By Nebbix (Cryptocurrency)</p>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.is_crypto}
                  onChange={handleChange}
                  name="is_crypto"
                />
              }
            />
          </FormGroup>
        </div>
      </div>
      <div className="paymentOption">
        <div className="payment-details">
          <img src={wallet} alt="name" />
          <p>Enable USD Wallet</p>
        </div>
        <div>
          <FormGroup>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={state.is_dollar}
                  onChange={handleChange}
                  name="is_dollar"
                />
              }
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
