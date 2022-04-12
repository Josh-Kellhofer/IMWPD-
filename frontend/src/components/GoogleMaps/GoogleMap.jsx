import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker, 
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";


import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
}

const center = {
  lat: 43.653225,
  lng: -79.383186,
};

function Google() {

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: ProcessingInstruction.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

return <div>
  <GoogleMap mapContainerStyle={mapContainerStyle}></GoogleMap>
  </div>;

};

export default Google;