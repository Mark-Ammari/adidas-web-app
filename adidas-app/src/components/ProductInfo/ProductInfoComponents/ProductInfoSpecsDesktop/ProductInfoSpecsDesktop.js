import React from 'react';
import PropTypes from 'prop-types';
import classes from './ProductInfoSpecsDesktop.module.css';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';

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
  const styles = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const searchProduct = useSelector(state => state.searchProduct.searchProduct)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={styles.root}>
      <AppBar position="static" color="default">
        <Tabs
          TabIndicatorProps={{ style: { background: "#OOO" } }}
          classes={{ indicator: styles.indicator }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="Information Tabs"
        >
          {searchProduct.hasOwnProperty("product_description") ? <Tab label={<span>Description</span>} {...a11yProps(0)} /> : null }
          {searchProduct.hasOwnProperty("product_description") && searchProduct["product_description"].hasOwnProperty("usps") ? <Tab label={<span>Specifications</span>} {...a11yProps(1)} /> : null}
          {searchProduct.hasOwnProperty("product_description") && searchProduct["product_description"].hasOwnProperty("product_highlights") ? <Tab label={<span>Highlights</span>} {...a11yProps(1)} /> : null}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.ProductInfoSpecsDesktopDescription}>
            {searchProduct.hasOwnProperty("product_description") ?
              <>
                <div>
                  <Typography variant="h4" gutterBottom>{searchProduct["product_description"].title}</Typography>
                  <Typography variant="h5" gutterBottom>{searchProduct["product_description"].subtitle}</Typography>
                  <Typography variant="subtitle1" gutterBottom>{searchProduct["product_description"].text}</Typography>
                </div>
                <div>
                  <img src={searchProduct["product_description"]["description_assets"]["image_url"]} alt="Product Media" />
                </div>
              </> : null
            }
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={classes.ProductInfoSpecsDesktopDescription}>
            {searchProduct.hasOwnProperty("product_description") && searchProduct["product_description"].hasOwnProperty("usps") ?
              <>
                <div>
                  <ul>
                    {searchProduct["product_description"].usps.slice(0, Math.ceil(searchProduct["product_description"].usps.length / 2)).map((bullet, key) => {
                      return <li key={key}><Typography gutterBottom>{bullet}</Typography></li>
                    })}
                  </ul>
                </div>
                <div>
                  <ul>
                    {searchProduct["product_description"].usps.slice(Math.ceil(searchProduct["product_description"].usps.length / 2)).map((bullet, key) => {
                      return <li key={key}><Typography gutterBottom>{bullet}</Typography></li>
                    })}
                  </ul>
                </div>
              </> : null
            }
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className={classes.ProductInfoSpecsDesktopDescription}>
            {searchProduct.hasOwnProperty("product_description") && searchProduct["product_description"].hasOwnProperty("product_highlights") ?
              searchProduct["product_description"]["product_highlights"].map((highlight, key) => {
                return <div className={classes.ProductInfoSpecsDesktopDescriptionHighlights} key={key}>
                  <Typography variant="h5" gutterBottom>{highlight.headline}</Typography>
                  <Typography variant="subtitle1" gutterBottom>{highlight.copy}</Typography>
                </div>
              })
              : null
            }
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default ProductInfoSpecsDesktop;