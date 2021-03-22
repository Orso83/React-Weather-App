import { useState, useEffect } from 'react';
import { AppBar, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography, Switch, Button, Tooltip, FormControlLabel } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

const Header = (props) => {
  // Use custom CSS.
  const classes = useStyle();

  // State.
  const [anchorEl, setAnchorEl] = useState(null);
  const [unitsSwitch, setUnitsSwitch] = useState(false);
  const [darkModeSwitch, setDarkModeSwitch] = useState(false);

  // Check the state of the theme prop and set the dark mode toggle switch accordingly.
  useEffect(() => {
    props.theme === 'light' ? setDarkModeSwitch(false) : setDarkModeSwitch(true);
  }, [props.theme]);

  // Check if units is metric or imperial and set the units switch to the correct setting.
  useEffect(() => {
    props.units ? setUnitsSwitch(false) : setUnitsSwitch(true);
  }, [props.units]);

  return (
      <AppBar position="sticky">
          <Toolbar>
              <Typography className={classes.headerText} variant="h6">
                  Weather Forecast
              </Typography>
              <IconButton color="inherit" onClick={(event) => setAnchorEl(event.currentTarget)}>
                <SettingsIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <Tooltip
                  title="Celsius / Fahrenheit"
                  placement="left"
                  arrow
                >
                  <MenuItem>
                    <FormControlLabel
                      label="C&deg; / F&deg;"
                      control={<Switch
                        checked={unitsSwitch}
                        onChange={() => {
                          setUnitsSwitch(!unitsSwitch);
                          props.setUnits(unitsSwitch ? true : false);
                        }}
                      />}
                    />
                  </MenuItem>
                </Tooltip>
                <Tooltip
                  title="Dark Theme"
                  placement="left"
                  arrow
                >
                <MenuItem>
                  <FormControlLabel
                    label="Dark Mode"
                    control={<Switch
                      checked={darkModeSwitch}
                      onChange={() => {
                        setDarkModeSwitch(!darkModeSwitch);
                        props.darkMode(darkModeSwitch ? "light" : "dark");
                      }}
                    />}
                  />
                </MenuItem>
                </Tooltip>
                <MenuItem>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    onClick={() => setAnchorEl(null)}
                  >Close</Button>
                </MenuItem>
              </Menu>
          </Toolbar>
      </AppBar>
  );
}

// Custom CSS.
const useStyle = makeStyles(theme => ({
  headerText: {
    flexGrow: 1
  }
}));

export default Header;