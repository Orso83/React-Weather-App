import React from 'react';
import Alerts from './Alerts';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import Map from './Map';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

const Forecast = (props) => {

  // Use custom CSS.
  const classes = useStyle();

  // Destructure props.
  const {
    alerts,
    current,
    hourly,
    daily
  } = props.forecast;

  // Translation object for icons.
  const weatherIcon = {
    200: "wi-thunderstorm",
    201: "wi-thunderstorm",
    202: "wi-thunderstorm",
    210: "wi-lightning",
    211: "wi-lightning",
    212: "wi-lightning",
    221: "wi-lightning",
    230: "wi-thunderstorm",
    231: "wi-thunderstorm",
    232: "wi-thunderstorm",
    300: "wi-sprinkle",
    301: "wi-sprinkle",
    302: "wi-rain",
    310: "wi-rain-mix",
    311: "wi-rain",
    312: "wi-rain",
    313: "wi-showers",
    314: "wi-rain",
    321: "wi-sprinkle",
    500: "wi-sprinkle",
    501: "wi-rain",
    502: "wi-rain",
    503: "wi-rain",
    504: "wi-rain",
    511: "wi-rain-mix",
    520: "wi-showers",
    521: "wi-showers",
    522: "wi-showers",
    531: "wi-storm-showers",
    600: "wi-snow",
    601: "wi-snow",
    602: "wi-sleet",
    611: "wi-rain-mix",
    612: "wi-rain-mix",
    615: "wi-rain-mix",
    616: "wi-rain-mix",
    620: "wi-rain-mix",
    621: "wi-snow",
    622: "wi-snow",
    701: "wi-showers",
    711: "wi-smoke",
    721: "wi-day-haze",
    731: "wi-dust",
    741: "wi-fog",
    761: "wi-dust",
    762: "wi-dust",
    771: "wi-cloudy-gusts",
    781: "wi-tornado",
    800: "wi-day-sunny",
    801: "wi-cloudy-gusts",
    802: "wi-cloudy-gusts",
    803: "wi-cloudy-gusts",
    804: "wi-cloudy",
    900: "wi-tornado",
    901: "wi-storm-showers",
    902: "wi-hurricane",
    903: "wi-snowflake-cold",
    904: "wi-hot",
    905: "wi-windy",
    906: "wi-hail",
    957: "wi-strong-wind"
  };

  return (
    <Grid
        container
        spacing={2}
        direction="column"
      >
        <Grid item xs={12}>
          {alerts && <Alerts alerts={alerts} />}
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.componentHeader} align="center" variant="h4">{props.locationName}</Typography>
          <CurrentWeather weather={current} units={props.units} weatherIcon={weatherIcon} />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.componentHeader} align="center" variant="h4">Radar</Typography>
          <Map deviceLocation={props.deviceLocation} units={props.units} />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.componentHeader} align="center" variant="h4">Hourly</Typography>
          <Paper>
            <HourlyWeather weather={hourly} units={props.units} weatherIcon={weatherIcon} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
            <Typography className={classes.componentHeader} align="center" variant="h4">Daily</Typography>
          <DailyWeather weather={daily} units={props.units} weatherIcon={weatherIcon} />
        </Grid>
    </Grid>
  )
};

// Custom CSS.
const useStyle = makeStyles({
  componentHeader: {
    padding: '1rem'
  }
});

export default Forecast;
