import React from 'react';
import '../../App.css'
import {
  GoogleMap,
  useLoadScript,
  Marker, 
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import mapStyles from './mapStyles';


const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
}

const center = {
  lat: 43.653225,
  lng: -79.383186,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,

};

function GoogleMaps() {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey:"AIzaSyBNOyOJG_-g7kNxQ8_3Ku4eyTE-RSVsR60",                                            
    libraries,
  });

  // ProcessingInstruction.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

return (
  <div>
    <h1>IMWPD </h1>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      options={options}
      onClick={(event) => {
        console.log(event)
      }}
      ></GoogleMap>
  </div>

);
}

export default GoogleMaps;
