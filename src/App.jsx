import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import './App.css'

function App() {
  

  return (
    // sistema di routing
    <BrowserRouter>
    {/* contenitore rotte */}
    <Routes>
      {/* singole rotte */}
      <Route path='/' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App
