// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar2 from './components/Navbar2';
import { BrowserRouter as Router} from 'react-router-dom';
import React from 'react';



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

function App() {
  return (
    <Router>
        <Navbar2 />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    
    
    // <div>
    //   <Navbar />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <PrivateRoute>
    //           <HomePage />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/addcar" element={<PrivateRoute><AddCarPage /> </PrivateRoute>}/>
    //   </Routes>
    //   <Footer />
    // </div>
  );
}

export default App;
