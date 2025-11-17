import React, { useState, useRef, useEffect, useCallback } from 'react';
import './VideoPopup.css';

const VideoPopup = ({ videoUrl = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
    // Pause video when closing
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  // Play video when popup opens
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    // Prevent body scroll when popup is open
    document.body.style.overflow = 'hidden';
  };

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleClose]);

  // Don't render if no video URL is provided
  if (!videoUrl) {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <button 
        className="video-popup-floating-btn"
        onClick={handleOpen}
        aria-label="Watch video"
      >
        <svg 
          className="video-popup-play-icon" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>

      {/* Video Popup */}
      {isOpen && (
        <div 
          className="video-popup-overlay" 
          onClick={handleClose}
        >
          <div 
            className="video-popup-container" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="video-popup-close" 
              onClick={handleClose}
              aria-label="Close video"
            >
              <svg 
                className="video-popup-close-icon" 
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

            {/* Video Player */}
            <div className="video-popup-video-wrapper">
              <video
                ref={videoRef}
                className="video-popup-video"
                src={videoUrl}
                loop
                playsInline
                controls
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;

