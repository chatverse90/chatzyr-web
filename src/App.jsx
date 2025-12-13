import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import NewsPopup from './components/NewsPopup';
import VideoPopup from './components/VideoPopup';
import './App.css';
import Home from './screens/home';
import ChatZyrNews from './screens/News';
import Contact from './screens/contact';
import NewsBlogPage from './screens/blog';
import AddNewsPage from './screens/addnewspage';

function App() {
  return (
    <Router>
      <div className="App">
        <NewsPopup />
        {/* <VideoPopup videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" /> */}
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<ChatZyrNews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<NewsBlogPage />} />
            <Route path='/addnews' element={ <AddNewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;