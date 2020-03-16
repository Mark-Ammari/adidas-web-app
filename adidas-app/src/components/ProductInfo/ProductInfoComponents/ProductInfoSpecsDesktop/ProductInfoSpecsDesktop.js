import React from 'react';
import PropTypes from 'prop-types';
import './ProductInfoSpecsDesktop.css';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 900,
    margin: "auto",
    marginTop: "20px",
  },
  indicator: {
    background: "black"
  }
}));

const ProductInfoSpecsDesktop = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          TabIndicatorProps={{ style: { background: "#OOO" } }}
          classes={{ indicator: classes.indicator }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="Information Tabs"
        >
          <Tab label={<span>Description</span>} {...a11yProps(0)} />
          <Tab label={<span>Specifications</span>} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="productinfospecsdesktopdescription">
            <div>
                <Typography variant="h4" gutterBottom>{props.producttitle}</Typography>
                <Typography variant="h5" gutterBottom>{props.subtitle}</Typography>
                <Typography variant="subtitle1" gutterBottom>{props.description}</Typography>
            </div>
            <div>
                <img src={props.src} alt="Product Media" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="productinfospecsdesktopdescription">
            <div>
                <ul>{props.sectone}</ul>
            </div>
            <div>
                <ul>{props.secttwo}</ul>
            </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default ProductInfoSpecsDesktop;