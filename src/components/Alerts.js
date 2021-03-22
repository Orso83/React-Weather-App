import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Badge, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Alert from './Alert';

const Alerts = (props) => {

  // Destructure props.
  const [numOfAlerts, setNumOfAlerts] = useState(0);

  // Listen for prop change.
  useEffect(() => {
    setNumOfAlerts(props.alerts.length);
  }, [props.alerts]);

  return (
    <Accordion style={{marginTop: '1rem', paddingTop: '0.25rem'}}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Badge badgeContent={numOfAlerts} color="error">
          <AnnouncementIcon />
        </Badge>
        <Typography variant="body1" align="center" style={{width: '100%'}}>Current Alerts</Typography>
      </AccordionSummary>
      <AccordionDetails style={{display: 'flex', flexDirection: 'column', padding: '0.5rem'}}>
        {props.alerts.map((alert, index) => <Alert alert={alert} key={index} />)}
      </AccordionDetails>
    </Accordion>
  )
}

export default Alerts;
