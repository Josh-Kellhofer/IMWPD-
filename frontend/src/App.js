// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar2 from './components/Navbar2';
import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DisplayActivities from "./components/DisplayActivities/DisplayActivities";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import Home from "./components/DisplayPages/Home";
import RestaurantApp from "./components/DisplayPages/RestaurantApp";
import Randomizer from "./components/DisplayPages/Randomizer";


// Component Imports
// import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ArrayShuffler from './components/ArrayShuffler/ArrayShuffler'
import RandomActivities from "./components/RandomActivities/RandomActivities";




// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import GoogleMaps from "./components/DisplayPages/GoogleMaps";



function App() {

     
  const [entries, setEntries] = useState([]);

  // const [type, setType] = useState('');
  // const [priceLevel, setPriceLevel] = useState('');
  // const [open, setOpen] = useState('');
  // const [geom, setGeom] = useState('');
  // const [reviews, setReviews] = useState('')
  const [geolocation, setGeolocation] = useState(null);
  const [locationReceived, setLocationReceived] = useState(false);

  const [restaurant, setRestaurant] = useState('');

  useEffect(() => {
    console.log("useEffect")
    if(geolocation){
      console.log("geolocationdefined")
      getRestaurants()
    }
      
  }, [locationReceived])

 
 navigator.geolocation.getCurrentPosition(function(position) {
console.log(position)


setGeolocation({lat: position.coords.latitude, lng: position.coords.longitude})
if (locationReceived==false){
  setLocationReceived(true)
}
  }, function(error){
    console.log(error)
  }, {timeout: 1000} )

  
  async function getRestaurants() {
    
  let response =await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geolocation.lat}%2C${geolocation.lng}&radius=7000&type=restaurant&open_now=true&key=AIzaSyBNOyOJG_-g7kNxQ8_3Ku4eyTE-RSVsR60`);
  console.log("Nearby Restaurants", response.data)
  setRestaurant(response.data)
  // setType(response.data.types)
  // console.log("Set Type", type)
  // setPriceLevel(response.data.price_level)
  // console.log("Price Level", priceLevel)
  // setOpen(response.data.opening_hours.open_now)
  // console.log("Open", open)
  // setGeom(response.data.geometry.location)
  // console.log("Location", geom)
  // setReviews(response.data.)
  }


  async function getAllActivities() {
    let response = await axios.get('http://127.0.0.1:8000/api/activities/');
    setEntries(response.data);
    
  }

  // async function getRandomActivities() {
  //   let randomActivity = await axios.get('http://127.0.0.1:8000/api/activities/');

  // }

  useEffect(() => {
    getAllActivities();
  }, [])

  return (
    
    <div>
    <Router>
        <Navbar2 />
       
       
        <Routes>
          <Route exact path='/' element={<Home />} />
          
          <Route exact path='/googleMaps' element={<GoogleMaps />} />
          {/* <Route exact path='/restApp' element={<RestaurantApp />} /> */}
          <Route exact path='/randomizer' element={<DisplayActivities parentEntries={entries} />} />
          {/* <Route exact path='/get-started' element={<GetStarted />} /> */}
          <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/addcar" element={<PrivateRoute><AddCarPage /> </PrivateRoute>}/>
        </Routes>
       
        <Footer />
      </Router>
      </div>
   
    
    
//     <div>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <HomePage />
//             </PrivateRoute>
//           }
//         />
//        
//       </Routes>
//       <Footer />
//     </div>
  );
}

export default App;

