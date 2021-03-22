import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Grid, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import DataOutput from './DataOutput';

const DailyWeather = (props) => {

  // Use custom CSS.
  const classes = useStyle();

  // Destructure props.
  const [units, setUnits] = useState(false);

  // Watch for units to change.
  useEffect(() => {
    props.units ? setUnits(true) : setUnits(false);
  }, [props.units]);

  // Array to convert numeric day of the week to string.
  const dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

  // Variable to hold converted rain and snow accumulation.
  let rain, snow;

  /*********************************************************
  * PURPOSE:  To convert celsius to fahernheit.
  * INPUT:    INT/FLOAT - The temperature in celsius.
  * OUTPUT:   INT/FLOAT - The temperature in fahrenheit.
  *********************************************************/
  const celsiusToFahrenheit = (celsius) => {
    return ((celsius * (9/5)) + 32);
  }

  /*********************************************************
  * PURPOSE:  To convert hectopascals to inches of mercury.
  * INPUT:    INT/FLOAT - The pressure in hectopascals.
  * OUTPUT:   INT/FLOAT - The pressure in inches of mercury.
  *********************************************************/
  const hectopascalsToInches = (hectopascal) => {
    return (hectopascal * 0.03);
  }

  /*********************************************************
  * PURPOSE:  To convert m/s to mph.
  * INPUT:    INT/FLOAT - The wind speed in m/s.
  * OUTPUT:   INT/FLOAT - The wind speed in mph.
  *********************************************************/
  const metersPerSecondToMPH = (meters) => {
    return (meters * 2.23694);
  }

  return (
    <div>
      {props.weather.map(day => {

        // Convert rain and snow accumulation to 'in' if units are imperial.
        units ? rain = day.rain : rain = (day.rain * 0.03937);
        units ? snow = day.snow : snow = (day.snow * 0.03937);

        // Format the UNIX Date to a numeric day of the week.
        // Use the dayOfTheWeek[] to map to a string. 
        let date = new Date(day.dt*1000);

        // Format the weather conditions description.
        let description = day.weather[0].description.slice(0, 1).toUpperCase() + day.weather[0].description.slice(1);

        return (
          <Accordion key={day.dt}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
            >
              <Grid
                container
                justify="space-around"
                alignItems="center"
              >
                <Grid
                  item
                  xs={4}
                >
                  <Typography
                    variant="body1"
                  >
                    {dayOfTheWeek[date.getDay()]}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <i className={`wi ${props.weatherIcon[day.weather[0].id]} ${classes.weatherIcon}`}></i>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  xs={4}
                >
                  <Typography
                    variant="body1"
                  >
                    {units ? day.temp.max.toFixed() : celsiusToFahrenheit(day.temp.max).toFixed()}
                    &deg;
                  </Typography>
                  /
                  <Typography
                    variant="body1"
                    color="textSecondary"
                  >
                    {units ? day.temp.min.toFixed() : celsiusToFahrenheit(day.temp.min).toFixed()}
                    &deg;
                    {units ? 'C' : 'F'}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">{description}</Typography>
                </Grid>
                <DataOutput
                  title="Max Temp"
                  value={units ? day.temp.max.toFixed() : celsiusToFahrenheit(day.temp.max).toFixed()}
                  superScript="&deg;"
                  subScript=""
                />
                <DataOutput
                  title="Min Temp"
                  value={units ? day.temp.min.toFixed() : celsiusToFahrenheit(day.temp.min).toFixed()}
                  superScript="&deg;"
                  subScript=""
                />
                <DataOutput
                  title="Clouds"
                  value={day.clouds}
                  superScript=""
                  subScript="%"
                />
                <DataOutput
                  title="Dew Point"
                  value={units ? day.dew_point.toFixed() : celsiusToFahrenheit(day.dew_point).toFixed()}
                  superScript="&deg;"
                  subScript=""
                />
                <DataOutput
                  title="Humidity"
                  value={day.humidity}
                  superScript=""
                  subScript="%"
                />
                <DataOutput
                  title="Pressure"
                  value={units ? day.pressure : hectopascalsToInches(day.pressure).toFixed(2)}
                  superScript=""
                  subScript={units ? "hPa" : "inHg"}
                />
                <DataOutput
                  title="Precipitation"
                  value={parseFloat(day.pop)*100}
                  superScript=""
                  subScript="%"
                />
                <DataOutput
                  title="UV Index"
                  value={day.uvi.toFixed()}
                  superScript=""
                  subScript=""
                />
                <DataOutput
                  title="Wind Speed"
                  value={units ? day.wind_speed.toFixed() : metersPerSecondToMPH(day.wind_speed).toFixed()}
                  superScript=""
                  subScript={units ? "m/s" : "mph"}
                />
                <DataOutput
                  title="Wind Direction"
                  value={day.wind_deg}
                  superScript="&deg;"
                  subScript=""
                />
                <DataOutput
                  title="Total Rain"
                  value={day.rain ? rain.toFixed(2) : 0}
                  superScript=""
                  subScript={props.units ? "mm" : "in"}
                />
                <DataOutput
                  title="Total Snow"
                  value={day.snow ? snow.toFixed(2) : 0}
                  superScript=""
                  subScript={props.units ? "mm" : "in"}
                />
                <DataOutput
                  title="Sunrise"
                  value={new Date(day.sunrise * 1000).toLocaleTimeString().slice(-11, -6)}
                  superScript=""
                  subScript="am"
                />
                <DataOutput
                  title="Sunset"
                  value={new Date(day.sunset * 1000).toLocaleTimeString().slice(-11, -6)}
                  superScript=""
                  subScript="pm"
                />
              </Grid>
            </AccordionDetails>
          </Accordion>
        )
    })}
    </div>
  );
}

// Custom CSS.
const useStyle = makeStyles({
  weatherIcon: {
    fontSize: '1.5rem',
    paddingLeft: '1.5rem'
  }
});

export default DailyWeather;