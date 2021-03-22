import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import WarningIcon from '@material-ui/icons/Warning';
import React from 'react';

const Alert = (props) => {

  // Use custom CSS.
  const classes = useStyles();

  // Destructure props.
  const {
    event,
    description
  } = props.alert;

  return (
      <Accordion className={classes.alert}>
        <AccordionSummary expandIcon={<ExpandMore color="error" />}>
          <Grid container alignItems="center">
            <Grid item>
              <WarningIcon className={classes.warningIcon} />
            </Grid>
            <Grid item>
              <Typography>{event}</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
  )
}

// Custom CSS.
const useStyles = makeStyles({
  alert: {
    color: '#630000',
    backgroundColor: '#ffc9c9',
    border: '1px #630000 solid'
  },
  warningIcon: {
    marginRight: '0.5rem'
  }
});

export default Alert;
