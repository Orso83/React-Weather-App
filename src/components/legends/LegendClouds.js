import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const LegendClouds = () => {

  // Use custom CSS.
  const classes = useStyles();

  // Array to hold the ledgend's scale values.
  const clouds = [0, 25, 50, 75, 100];

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
      <Typography className={classes.title} variant="body1">Clouds: %</Typography>
      <div className={classes.legend}>
        <div className={classes.scale}>
          {printScale(clouds)}
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
    backgroundImage: 'linear-gradient(to right, rgba(247, 247, 255, 0) 0%, rgba(251, 247, 255, 0) 10%, rgba(244, 248, 255, 0.1) 20%, rgba(240, 249, 255, 0.2) 30%, rgba(221, 250, 255, 0.4) 40%, rgba(224, 224, 224, 0.9) 50%, rgba(224, 224, 224, 0.76) 60%, rgba(228, 228, 228, 0.9) 70%, rgba(232, 232, 232, 0.9) 80%, rgb(214, 213, 213) 90%, rgb(210, 210, 210) 95%, rgb(183, 183, 183) 100%)',
    border: '1px black solid',
    borderRadius: '3px'
  }
});

export default LegendClouds;
