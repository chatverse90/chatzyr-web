import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsPopup.css';

const NewsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Latest news data - using the first item from News.jsx as the latest
  const latestNews = {
    id: 1,
    title: "Breaking: Major Tech Announcement Shakes Industry",
    category: "Technology",
    image: "https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg",
    date: "2 hours ago",
    route: '/blog'
  };

  useEffect(() => {
    // Show popup when website first opens (once per browser session)
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem('newsPopupShown');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('newsPopupShown', 'true');
      }, 500); // Small delay for better UX

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReadMore = () => {
    navigate(latestNews.route);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="news-popup-overlay" onClick={handleClose}>
      <div className="news-popup-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className="news-popup-close" 
          onClick={handleClose}
          aria-label="Close popup"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Popup Content */}
        <div className="news-popup-content">
          {/* Header */}
          <div className="news-popup-header">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-red-600">LATEST NEWS</span>
            </div>
            <h2 className="news-popup-title">Stay Updated</h2>
          </div>

          {/* News Item */}
          <div className="news-popup-card">
            <div className="news-popup-image-container">
              <img 
                src={latestNews.image} 
                alt={latestNews.title}
                className="news-popup-image"
              />
              <div className="news-popup-overlay-gradient"></div>
              
              {/* Category Badge */}
              <div className="news-popup-badge">
                <span className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold border border-white/30 shadow-lg">
                  <div className="w-2 h-2 rounded-full mr-2 bg-red-500"></div>
                  {latestNews.category}
                </span>
              </div>

              {/* Date */}
              <div className="news-popup-date">
                <div className="bg-black/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                  {latestNews.date}
                </div>
              </div>
            </div>

            {/* News Content */}
            <div className="news-popup-text-content">
              <h3 className="news-popup-news-title">
                {latestNews.title}
              </h3>
              
              {/* Action Buttons */}
              <div className="news-popup-actions">
                <button 
                  onClick={handleReadMore}
                  className="news-popup-read-btn"
                >
                  Read Article
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </button>
                <button 
                  onClick={handleClose}
                  className="news-popup-close-btn"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPopup;

