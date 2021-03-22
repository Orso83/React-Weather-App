import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const LegendPressure = (props) => {

  // Use custom CSS.
  const classes = useStyles();

  // Destructure props.
  const {units} = props;

  // Array to hold the legend's scale values.
  const metric = [950, 980, 1010, 1040, 1070];
  const imperial = [28.05, 28.94, 29.83, 30.71, 31.60];

  /**********************************************************
  * PURPOSE:  To print the array of scale values.
  * INPUT:    BOOL - True = metric, False = imperial.
  * OUTPUT:   INT/FLOAT/STRING - The printed array of values.
  **********************************************************/
  const printScale = unit => {
    return unit.map(i => <Typography key={i} variant="body2">{i}</Typography>);
  }

  return (
    <div className={classes.main}>
      <Typography className={classes.title} variant="body1">Pressure: {units ? 'hPa' : 'inHg'}</Typography>
      <div className={classes.legend}>
        <div className={classes.scale}>
          {units ? printScale(metric) : printScale(imperial)}
        </div>
        <div className={classes.colorBand} />
      </div>
    </div>
  )
}

// Custom CSS.
const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem'
  },
  title: {
    marginBottom: '1rem'
  },
  legend: {
    flexBasis: '100%'
  },
  scale: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  colorBand: {
    height: '1rem',
    backgroundImage: 'linear-gradient(to right, rgb(0, 115, 255) 0%, rgb(0, 170, 255) 8.35059%, rgb(75, 208, 214) 24.9192%, rgb(141, 231, 199) 41.4879%, rgb(176, 247, 32) 49.7722%, rgb(240, 184, 0) 58.0565%, rgb(251, 85, 21) 74.6251%, rgb(243, 54, 59) 91.1938%, rgb(198, 0, 0) 100%)',
    border: '1px black solid',
    borderRadius: '3px'
  }
});

export default LegendPressure;