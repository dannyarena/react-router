import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PostPage from './Pages/PostsPage';
import './App.css'

function App() {
  

  return (
    // sistema di routing
    <BrowserRouter>
    {/* contenitore rotte */}

    <Routes>
      {/* singole rotte */}
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>

    </BrowserRouter>
    
  );
}

export default App
