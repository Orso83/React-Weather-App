import React from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

const DataOutput = (props) => {
  
  // Use custom CSS.
  const classes = useStyles();

  // Destructure props.
  const {
    title,
    value,
    superScript,
    subScript
  } = props;

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Paper
        variant="outlined"
        elevation={2}
        className={classes.box}
      >
        <Typography
          align="left"
          variant="subtitle1"
          color="textSecondary"
        >
          {title}
        </Typography>
        <Typography
          align="left"
          variant="h5"
          display="inline"
        >
          {typeof(value) === "number" ? value : value}
          {superScript}
        </Typography>
        <Typography
            variant="body1"
            display="inline"
          >
            {" " + subScript}
        </Typography>
      </Paper>
    </Grid>
  );
}

// Custom CSS.
const useStyles = makeStyles(theme => ({
  box: {
    padding: '10px'
  }
}));

export default DataOutput;