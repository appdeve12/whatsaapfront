// import React from 'react'
// import Header from './components/layout/Header'
// import Dashboard from "./components/layout/Dashboard"
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {


//   return (
//     <>

//  <Header/>
//  <Dashboard/>
 
// </>
//   )
// }

// export default App







// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/container/Login/Login';
// import Register from './components/Register';
import Dashboard from "./components/layout/Dashboard"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
       <Route path="/home" element={<Dashboard />} />
   
      </Routes>
    </Router>
  );
}

export default App;
