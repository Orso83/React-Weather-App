import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const LegendWind = (props) => {

  // Use custom CSS.
  const classes = useStyles();

  // Destructure props.
  const {units} = props;

  // Arrays to hold the legend's scale values.
  const metric = [0, 2, 3, 6, 12, 25, 50, 100];
  const imperial = [0, 5, 7, 14, 27, 56, 112, 224];
  
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
      <Typography className={classes.title} variant="body1">Wind Speed: {units ? 'm/s' : 'mph'}</Typography>
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
    backgroundImage: 'linear-gradient(to right, rgb(159, 85, 181) 0%, rgb(44, 106, 187) 8.75%, rgb(82, 139, 213) 12.5%, rgb(103, 163, 222) 18.75%, rgb(142, 202, 240) 25%, rgb(155, 213, 244) 31.25%, rgb(172, 225, 253) 37.5%, rgb(194, 234, 255) 43.75%, rgb(172, 255, 166) 50%, rgb(254, 248, 174) 56.25%, rgb(254, 232, 146) 62.5%, rgb(254, 226, 112) 68.75%, rgb(253, 212, 97) 75%, rgb(244, 168, 94) 82.5%, rgb(244, 129, 89) 87.5%, rgb(244, 104, 89) 93.75%, rgb(244, 76, 73) 100%)',
    border: '1px black solid',
    borderRadius: '3px'
  }
});

export default LegendWind;
