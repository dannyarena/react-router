import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PostPage from './Pages/PostsPage';
import Navbar from './components/Navbar';
import './App.css'
import PostDetailPage from './Pages/PostDetailPage';
import { PostsProvider } from './context/PostsContext';

function App() {
  
  return (
    // sistema di routing
    <BrowserRouter>
    {/* contenitore rotte */}.

    <PostsProvider>

    <Navbar />         {/* NAVBAR SEMPRE VISIBILE */}

    <Routes>
      {/* singole rotte */}
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/posts' element={<PostPage />} />
      <Route path='/posts/:id' element={<PostDetailPage />} />
    </Routes>

    </PostsProvider>
    
    </BrowserRouter>
    
  );
}

export default App
