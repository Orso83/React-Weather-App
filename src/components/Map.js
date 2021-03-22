import { Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'weather-icons/css/weather-icons.css';
import LegendTemp from './legends/LegendTemp';
import LegendWind from './legends/LegendWind';
import LegendPressure from './legends/LegendPressure';
import LegendPercipitation from './legends/LegendPercipitation';
import LegendClouds from './legends/LegendClouds';
import MapButtonGroup from './MapButtonGroup';

const Map = (props) => {

  // State.
  const [overlayClouds, setOverlayClouds] = useState(false);
  const [overlayAccPre, setOverlayAccPre] = useState(false);
  const [overlayPressure, setOverlayPressure] = useState(false);
  const [overlayWind, setOverlayWind] = useState(false);
  const [overlayTemp, setOverlayTemp] = useState(true);

  /************************************************************* 
  * PURPOSE:  To clear all radar overlays from the leaflet map.
  * INPUT:    None.
  * OUTPUT:   None.
  *************************************************************/
  const clearOverlays = () => {
    setOverlayClouds(false);
    setOverlayAccPre(false);
    setOverlayPressure(false);
    setOverlayWind(false);
    setOverlayTemp(false);
  }

  // Destructure props.
  const {
    latitude,
    longitude
  } = props.deviceLocation;

  return (
    <Paper>
      <MapButtonGroup
        clearOverlays={clearOverlays}
        setOverlayClouds={setOverlayClouds}
        setOverlayAccPre={setOverlayAccPre}
        setOverlayPressure={setOverlayPressure}
        setOverlayWind={setOverlayWind}
        setOverlayTemp={setOverlayTemp}
        overlayClouds={overlayClouds}
        overlayAccPre={overlayAccPre}
        overlayPressure={overlayPressure}
        overlayWind={overlayWind}
        overlayTemp={overlayTemp}
      />
      <MapContainer
        center={[latitude, longitude]}
        zoom={7}
        scrollWheelZoom={false}
        dragging={false}
        style={{width: '100%', height: '75vw', maxHeight: '600px'}}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="https://openweathermap.org/">OpenWeather</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {overlayClouds && <TileLayer
          url="https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=464d302e2871d55aec231e19fb9078f7"
        />}
        {overlayAccPre && <TileLayer
          url="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=464d302e2871d55aec231e19fb9078f7"
        />}
        {overlayPressure && <TileLayer
          url="https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=464d302e2871d55aec231e19fb9078f7"
          opacity={0.9}
        />}
        {overlayWind && <TileLayer
          url="https://tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid=464d302e2871d55aec231e19fb9078f7"
          opacity={0.75}
        />}
        {overlayTemp && <TileLayer
          url="https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=464d302e2871d55aec231e19fb9078f7"
          opacity={0.75}
        />}
      </MapContainer>
      {overlayTemp && <LegendTemp units={props.units} />}
      {overlayWind && <LegendWind units={props.units} />}
      {overlayPressure && <LegendPressure units={props.units} />}
      {overlayAccPre && <LegendPercipitation units={props.units} />}
      {overlayClouds && <LegendClouds />}
    </Paper>
  )
}

export default Map;
