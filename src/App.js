// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Home from './pages/Home'
import Info from './pages/Info'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:productId" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
