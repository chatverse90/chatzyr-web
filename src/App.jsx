import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { CardAnim } from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NewsPopup from './components/NewsPopup';
import VideoPopup from './components/VideoPopup';
import './App.css';
import Home from './screens/Home';
import ChatZyrNews from './screens/News';
import Contact from './screens/Contact';
import NewsBlogPage from './screens/blog';

function App() {
  return (
    <Router>
      <div className="App">
        <NewsPopup />
        <VideoPopup videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<ChatZyrNews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<NewsBlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;