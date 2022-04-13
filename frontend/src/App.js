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
  

  async function getAllActivities() {
    let response = await axios.get('http://127.0.0.1:8000/api/activities/');
    setEntries(response.data);
    console.log(response.data)
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
        <div className='border-box'>
        <DisplayActivities parentEntries={entries} />
       </div>
      
       
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/googleMaps' element={<GoogleMaps />} />
          <Route exact path='/restApp' element={<RestaurantApp />} />
          <Route exact path='/randomizer' element={<Randomizer />} />
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

