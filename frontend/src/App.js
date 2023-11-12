import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Admin from './admin';
import HomePage from './HomePage';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar */}
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;