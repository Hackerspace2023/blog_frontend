import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //router setup
import App from './App.jsx'
import React from 'react';
import './index.css';  // Or the path to your main CSS file
import Login from './pages/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* route for login page */}
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  </StrictMode>,
)
