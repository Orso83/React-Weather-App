import React from 'react';
import { Button, ButtonGroup, Tooltip } from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';

const MapButtonGroup = (props) => {
  return (
    <ButtonGroup color="primary" size="large" fullWidth>
    <Tooltip title="Temperature" arrow>
        <Button
          variant={props.overlayTemp ? "contained" : "outlined"}
          onClick={() => {
            props.clearOverlays();
            props.setOverlayTemp(!props.overlayTemp);
          }}
          style={{borderBottomRightRadius: '0'}}
        >
          <i className={'wi wi-thermometer'} style={{fontSize: '1.5rem'}} />
        </Button>
      </Tooltip>
      <Tooltip title="Wind" arrow>
        <Button
          variant={props.overlayWind ? "contained" : "outlined"}
          onClick={() => {
            props.clearOverlays();
            props.setOverlayWind(!props.overlayWind);
          }}
        >
          <i className={'wi wi-strong-wind'} style={{fontSize: '1.5rem'}} />
        </Button>
      </Tooltip>
      <Tooltip title="Pressure" arrow>
        <Button
          variant={props.overlayPressure ? "contained" : "outlined"}
          onClick={() => {
            props.clearOverlays();
            props.setOverlayPressure(!props.overlayPressure);
          }}
        >
          <SpeedIcon style={{fontSize: '1.75rem'}} />
        </Button>
      </Tooltip>
      <Tooltip title="Accumulated Percipitation" arrow>
        <Button
          variant={props.overlayAccPre ? "contained" : "outlined"}
          onClick={() => {
            props.clearOverlays();
            props.setOverlayAccPre(!props.overlayAccPre);
          }}
        >
          <i className={'wi wi-umbrella'} style={{fontSize: '1.5rem'}} />
        </Button>
      </Tooltip>
      <Tooltip title="Clouds" arrow>
        <Button
          variant={props.overlayClouds ? "contained" : "outlined"}
          onClick={() => {
            props.clearOverlays();
            props.setOverlayClouds(!props.overlayClouds);
          }}
          style={{borderBottomLeftRadius: '0'}}
        >
          <i className={'wi wi-cloud'} style={{fontSize: '1.5rem'}}/>
        </Button>
      </Tooltip>
    </ButtonGroup>
  )
}

export default MapButtonGroup;