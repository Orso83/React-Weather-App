import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, createMuiTheme, ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';
import 'fontsource-roboto';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './components/Header';
import Forecast from './components/Forecast';

const App = () => {

  // Use custom css.
  const classes = useStyle();

  const [forecast, setForecast] = useState();
  const [units, setUnits] = useState(true); // True = metric, False = imperial.
  const [deviceLocation, setDeviceLocation] = useState();
  const [locationName, setLocationName] = useState();
  const [darkMode, setDarkMode] = useState('light');

  // Set material UI themes.
  const theme = createMuiTheme({
    palette: {
      type: darkMode,
      primary: {
        main: blue['700']
      },
      secondary: {
        main: red['A400']
      }
    }
  });

  // Component Did Mount.
  useEffect(() => {
    // Set the devices' geolocation.
    navigator.geolocation.getCurrentPosition((position) => {
      setDeviceLocation(position.coords);
    });
  }, []);

  // If the device location changes, make a new API calls.
  useEffect(() => {
    if(deviceLocation) {

      // Get the weather forecast for the device location.
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${deviceLocation.latitude}&lon=${deviceLocation.longitude}&exclude=minutely&units=metric&appid=464d302e2871d55aec231e19fb9078f7`)
      .then(response => {setForecast(response.data)})
      .catch(error => {console.log(error);});

      // Get the nearest city name for the device location.
      axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${deviceLocation.latitude}&lon=${deviceLocation.longitude}&limit=1&appid=464d302e2871d55aec231e19fb9078f7`)
      .then(response => {
        setLocationName(response.data[0].name);

        // If the device location is US, set the units to imperial.
        response.data[0].country === "US" && setUnits(false);
      })
      .catch(error => {console.log(error)})
      }
  }, [deviceLocation]);

  // Set theme base on the current time, sunrise, and sunset.
  useEffect(() => {
    if(forecast) {
      // Get the current time for the device.
      const currentTime = (new Date().getTime()/1000).toFixed();

      // Check if the current time falls between sunrise and sunset, if so, set light theme. If not, set dark theme.
      currentTime > forecast.current.sunrise && currentTime < forecast.current.sunset ? setDarkMode('light') : setDarkMode('dark');
    }
  }, [forecast]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setUnits={setUnits} units={units} darkMode={setDarkMode} theme={darkMode} />
      <Container
        maxWidth="lg"
      >
        {forecast ? <Forecast forecast={forecast} units={units} locationName={locationName} deviceLocation={deviceLocation} /> : <CircularProgress color="secondary" className={classes.progress} /> }
      </Container>
    </ThemeProvider>
  );
}

// Custom css.
const useStyle = makeStyles(theme => ({
  progress: {
    display: "block",
    margin: "250px auto"
  }
}));

export default App;
