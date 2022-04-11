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

// Component Imports
// import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from './components/DisplayPages/Home';

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";

function App() {

  const [entries, setEntries] = useState([]);

  async function getAllActivities() {
    let response = await axios.get('http://127.0.0.1:8000/api/activities/');
    setEntries(response.data);
    console.log(response.data)
  }

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
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/addcar" element={<PrivateRoute><AddCarPage /> </PrivateRoute>}/>
//       </Routes>
//       <Footer />
//     </div>
  );
}

export default App;
