import { useEffect, useState} from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, makeStyles } from '@material-ui/core';

const HourlyWeather = (props) => {

  // Use custom CSS.
  const classes = useStyle();

  // Destructure props.
  const [units, setUnits] = useState(false);

  // Watch for units to change.
  useEffect(() => {
    props.units ? setUnits(true) : setUnits(false);
  }, [props.units]);

  // Array to convert the numeric day of the week to a string.
  const dayOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",];

  /*********************************************************
  * PURPOSE:  To convert celsius to fahernheit.
  * INPUT:    INT/FLOAT - The temperature in celsius.
  * OUTPUT:   INT/FLOAT - The temperature in fahrenheit.
  *********************************************************/
  const celsiusToFahrenheit = (celsius) => {
    return ((celsius * (9/5)) + 32);
  }
  
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {props.weather.map(hour => {

              // Format the UNIX Date.
              let date = new Date(hour.dt*1000);
              let local = date.toLocaleTimeString();
              let time = local.slice(-11, -9) + " " + local.slice(-2);

              return (
                <TableCell key={hour.dt} align="center">
                  <Typography>{dayOfTheWeek[date.getDay()]}</Typography>
                  <Typography>{time}</Typography>
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {props.weather.map(hour => {
              return (
                <TableCell key={hour.dt} align="center">
                  <i className={`wi ${props.weatherIcon[hour.weather[0].id]} ${classes.weatherIcon}`}></i>
                  {units ? hour.temp.toFixed() : celsiusToFahrenheit(hour.temp).toFixed()}
                  &deg;
                  {units ? 'C' : 'F'}
                </TableCell>
              )
            })}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Custom CSS.
const useStyle = makeStyles({
  weatherIcon: {
    fontSize: '1.5rem',
    padding: '.75rem'
  }
});

export default HourlyWeather;