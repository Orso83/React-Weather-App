import { useEffect, useState } from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import DataOutput from './DataOutput';
import 'weather-icons/css/weather-icons.css';

const CurrentWeather = (props) => {

  // Use custom CSS.
  const classes = useStyle();

  // State.
  const [units, setUnits] = useState(true);

  // Watch for units change.
  useEffect(() => {
    props.units ? setUnits(true) : setUnits(false);
  }, [props.units]);

  // Destructure props.
  const {
    weather,
    temp,
    feels_like,
    clouds,
    dew_point,
    humidity,
    pressure,
    uvi,
    visibility,
    wind_speed,
    wind_deg,
    sunrise,
    sunset
  } = props.weather;

  // Capitalize the first letter of the description.
  const conditionsDescription = weather[0].description.slice(0, 1).toUpperCase() + weather[0].description.slice(1);

  // Conversion functions...
  const celsiusToFahrenheit = (celsius) => {
    return ((celsius * (9/5)) + 32);
  }

  /*********************************************************
  * PURPOSE:  To convert meters to feet.
  * INPUT:    INT/FLOAT - The distance in meters.
  * OUTPUT:   INT/FLOAT - The distance in feet.
  *********************************************************/
  const meterToFeet = (meters) => {
    return (meters * 3.2808);
  }

  /*********************************************************
  * PURPOSE:  To convert hectopascals to inches of mercury.
  * INPUT:    INT/FLOAT - The pressure in hectopascals.
  * OUTPUT:   INT/FLOAT - The pressure in inches of mercury.
  *********************************************************/
  const hectopascalsToInches = (hectopascal) => {
    return (hectopascal * 0.02953);
  }

  /*********************************************************
  * PURPOSE:  To convert m/s to mph.
  * INPUT:    INT/FLOAT - The wind speed in m/s.
  * OUTPUT:   INT/FLOAT - The wind speed in mph.
  *********************************************************/
  const metersPerSecondToMPH = (meters) => {
    return (meters * 2.23694);
  }

  // Render.
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />} style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <Grid
          container
          direction="column"
          spacing={1}
          style={{paddingLeft: '35px'}} // To adjust for the ExpandMore icon.
        >
          <Grid
            item
            container
            justify="center"
          >
            <i
              className={`wi ${props.weatherIcon[weather[0].id]} ${classes.weatherIcon}`} style={{fontSize: '3rem', paddingBottom: '0.5rem'}}
            />
          </Grid>
          <Grid
            item
            container
            justify="center"
          >
            <Typography variant="h5" color="textSecondary">{conditionsDescription}</Typography>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
          >
            <Typography variant="h4">
              {units ? temp.toFixed() : celsiusToFahrenheit(temp).toFixed()}
              &deg;
              {units ? "C" : "F"}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <DataOutput
            title="Temp"
            value={units ? temp.toFixed() : celsiusToFahrenheit(temp).toFixed()}
            superScript="&deg;"
            subScript=""
          />
          <DataOutput
            title="Feels Like"
            value={units ? feels_like.toFixed() : celsiusToFahrenheit(feels_like).toFixed()}
            superScript="&deg;"
            subScript=""
          />
          <DataOutput
            title="Clouds"
            value={clouds}
            superScript=""
            subScript="%"
          />
          <DataOutput
            title="Dew Point"
            value={units ? dew_point.toFixed() : celsiusToFahrenheit(dew_point).toFixed()}
            superScript="&deg;"
            subScript=""
          />
          <DataOutput
            title="Humidity"
            value={humidity}
            superScript=""
            subScript="%"
          />
          <DataOutput
            title="Pressure"
            value={units ? pressure : hectopascalsToInches(pressure).toFixed(2)}
            superScript=""
            subScript={units ? "hPa" : "inHg"}
          />
          <DataOutput
            title="UV Index"
            value={uvi}
            superScript=""
            subScript=""
          />
          <DataOutput
            title="Visibility"
            value={units ? visibility.toFixed() : meterToFeet(visibility).toFixed()}
            superScript=""
            subScript={units ? "m" : "ft"}
          />
          <DataOutput
            title="Wind Speed"
            value={units ? wind_speed.toFixed() : metersPerSecondToMPH(wind_speed).toFixed()}
            superScript=""
            subScript={units ? "m/s" : "mph"}
          />
          <DataOutput
            title="Wind Direction"
            value={wind_deg}
            superScript="&deg;"
            subScript=""
          />
          <DataOutput
            title="Sunrise"
            value={new Date(sunrise * 1000).toLocaleTimeString().slice(-11, -6)}
            superScript=""
            subScript="am"
          />
          <DataOutput
            title="Sunset"
            value={new Date(sunset * 1000).toLocaleTimeString().slice(-11, -6)}
            superScript=""
            subScript="pm"
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

// Custom CSS.
const useStyle = makeStyles({
  weatherIcon: {
    fontSize: '2rem',
    paddingRight: '.5rem'
  }
});

export default CurrentWeather;