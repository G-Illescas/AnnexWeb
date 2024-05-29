import React from 'react';
import './App.css';
import HomePage from './Pages/Home'; 
import Navbar from './Pages/Navbar'; 
import Collections from './Pages/Collection'; 
import SignIn from './Pages/SignIn'; 
import NewCollection from './Pages/NewCollection'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/collections" element={<Collections />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/new-collection" element={<NewCollection />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
