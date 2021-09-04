import { makeStyles, withStyles } from "@material-ui/core/styles";

import React from "react";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
const AirbnbSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
        width:250
      },
      
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

const FilterByPrice = ({ value, handleChange }) => {
  const classes = useStyles();
  const minP = Math.floor(Math.min(...value));
  const maxP = Math.ceil(Math.max(...value));

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom variant="h6">
        Filter by Price:
      </Typography>
      <AirbnbSlider
        ValueLabelComponent={ValueLabelComponent}
        ThumbComponent={AirbnbThumbComponent}
        min={minP}
        max={maxP}
        defaultValue={[minP, maxP]}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterByPrice;
