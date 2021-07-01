import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TransactionDetails from "../SavestPay/Transactiondetails";
import Transactioncard from "../SavestPay/Transactioncard";
import "./Tabs.css";
import Debitransaction from "./DebitTransaction";
import Creditransaction from "./Creditransaction";
// import TransactionDetails from './../../main/TransactionDetails';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: "640px",
    // marginLeft: "15px",
    // marginRight: "26px",
  },
  indicator: {
    backgroundColor: "#1890ff",
    maxWidth: "100px",
    marginLeft: "10px",
  },
  tabs: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        // width="10px"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        classes={{ indicator: classes.indicator }}
        className={classes.tabs}
      >
        <Tab
          label="All"
          {...a11yProps(0)}
          style={{
            paddingRight: "90px",
            fontSize: "1.6rem",
            textTransform: "none",
          }}
        />
        <Tab
          label="Credit"
          {...a11yProps(1)}
          style={{
            fontSize: "1.6rem",
            // paddingRight: "240px",
            position: "relative",
            right: 100,
            textTransform: "none",

            // paddingRight:"180px",
            //  marginRight: "200px",
          }}
        />
        <Tab
          label="Debit"
          {...a11yProps(2)}
          style={{
            paddingRight: "1.6rem",
            fontSize: "1.6rem",
            position: "relative",
            right: 130,
            textTransform: "none",
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="mr-5 transaction">
          <TransactionDetails />
          <Transactioncard />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="transaction">
          <Creditransaction />
          <Transactioncard />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="transaction">
          <Debitransaction />
          <Transactioncard />
        </div>
      </TabPanel>
    </div>
  );
}
