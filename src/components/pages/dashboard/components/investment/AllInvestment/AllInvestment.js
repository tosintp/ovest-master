import React, { useState, useEffect } from "react";
import * as moment from "moment";
import AllInvestmentPlan from "./AllInvestmentPlan";
import MyInvestment from "./MyInvestment";
import NoInvestment from "./NoInvestment";
import MaturedInvest from "./MaturedInvest";
import NoMatured from "./NoMatured";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { $api } from "../../../../../../helpers/$api";

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
    width: "500px",
  },
  indicator: {
    backgroundColor: "#FD740E",
  },
  tabs: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: "650px",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const investments = await $api.user.getUserInvestments();

        setInvestments(investments);
      } catch (error) {
        // error getting user investments
      }
    })();
  }, [setInvestments]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const maturedInvestments = investments.filter(({ startDate, duration }) => {
    const hasMatured = moment(startDate)
      .add(duration, "months")
      .isBefore(moment());

    return hasMatured;
  });

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="red"
        variant="50px"
        aria-label=""
        classes={{ indicator: classes.indicator }}
        className={classes.tabs}
      >
        <Tab
          label="All Investments Plan"
          {...a11yProps(0)}
          style={{
            fontSize: "15px",
            textTransform: "none",
            fontWeight: "500",
            fontSize: "18px",
            paddingTop: "40px",
          }}
        />
        <Tab
          label="My Investments"
          {...a11yProps(1)}
          style={{
            fontSize: "15px",
            textTransform: "none",
            fontWeight: "500",
            fontSize: "18px",
            paddingTop: "40px",
          }}
        />
        <Tab
          label="Matured"
          {...a11yProps(2)}
          style={{
            fontSize: "15px",
            textTransform: "none",
            fontWeight: "500",
            fontSize: "18px",
            paddingTop: "40px",
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0} style={{}}>
        <AllInvestmentPlan />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        {/* <NoInvestment/> */}
        <MyInvestment investments={investments} />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        {/* <NoMatured/> */}
        <MyInvestment investments={maturedInvestments} />
      </TabPanel>
    </div>
  );
}
