import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
  </StrictMode>,
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import Navbar from './Navbar.jsx';
// import HomeSection from './HomeSection.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
// //createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     <Navbar/>
//   </React.StrictMode>,
//   <HomeSection/>
// )
