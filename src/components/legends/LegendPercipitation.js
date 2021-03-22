import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const LegendPercipitation = (props)  => {

  // Use custom CSS.
  const classes = useStyles();

  // Destructure props.
  const {units} = props;

  // Arrays to hold the legend's scale values.
  const metric = ['0', '4', '8', '12', '16+'];
  const imperial = ['0', '0.16', '0.31', '0.47', '0.63+'];

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
      <Typography className={classes.title} variant="body1">Precipitaion: {units ? 'mm/h' : 'in/h'}</Typography>
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
    backgroundImage: 'linear-gradient(to right, #fff 0%, #9549ff 100%)',
    border: '1px black solid',
    borderRadius: '3px'
  }
});

export default LegendPercipitation;