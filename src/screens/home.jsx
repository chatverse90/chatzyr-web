import React, { useState, useEffect } from 'react';
import '../components/animatedText.css';
import ScrollToTopButton from '../components/ScrollTop';
import '../screens/home.css'

function HomePage() {
  const images = [
    'https://raw.githubusercontent.com/chatverse90/chatverse-images/main/c4.jpg',
    'https://raw.githubusercontent.com/chatverse90/chatverse-images/main/c5.jpg',
    'https://raw.githubusercontent.com/chatverse90/chatverse-images/main/c6.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <>
      {/* <Navbar /> */}
      {/* <div className='container'> */}
      <div className='header'>
        {/* <p className="animated-text">Welcome To CHATZYR website</p> */}
      </div>
      <div className='main'>
        <main className='content'>
          <div className='bullets'>
            <div className='bullet2'>
              <div className='bullet-item'>
                <div className='bullet-icon'>
                  <h3 class="custom-h3" >LIVE AVATAR CHAT 24/7</h3>
                </div>
                <p class="custom-h3" >Chat Now with 1,000′s of other people from around the world.</p>
              </div>
              <div className='bullet-item'>
                <h3 class="custom-h3" >PRIVATE MESSAGES</h3>
                <p class="custom-h3" >Send private messages, and chat in private with whomever you choose.</p>
              </div>
              <div className='bullet-item'>
                <h3 class="custom-h3" >MESSAGE BOARDS</h3>
                <p class="custom-h3" >Start new discussions using our Message Boards.</p>
              </div>
            </div>
            <div className="image-slider">
              <div className="tablet-frame">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={index === currentImageIndex ? 'active' : ''}
                  />
                ))}
              </div>
            </div>
            {/* <ul> */}
            <div className='bullet2'>
              <div className='bullet-item'>
                <h3 class="custom-h3" >PROFILES</h3>
                <p class="custom-h3" >Create and customize your profile. Show the world what you are all about.</p>
              </div>
              <div className='bullet-item'>
                <h3 class="custom-h3" >NEW FRIENDS</h3>
                <p class="custom-h3" >Make new friends who share similar interests.</p>
              </div>
              <div className='bullet-item'>
                <h3 class="custom-h3" >PRIVACY</h3>
                <p class="custom-h3" >Change your privacy level. You choose who you want to chat with, and who can chat with you.</p>
              </div>
            </div>
            {/* </ul> */}
          </div>

          </main>
        {/* <div className='down'> */}
        <h1 class="custom-h4" >DOWNLOAD NOW!</h1>
        {/* </div> */}
      </div>
      <div className='download'>

        {/* <div> */}
        <a className="download-image" href="https://shorturl.at/pBDEP">       
        <img
          src="https://raw.githubusercontent.com/chatverse90/chatverse-images/main/playstore.png"
          alt="Sample Image"
          className="download-image"
        />
        </a>
        <a className="download-image" href="https://shorturl.at/pBDEP">
        <img
          src="https://raw.githubusercontent.com/chatverse90/chatverse-images/main/appstore.png"
          alt="Sample Image"
          className="download-image"
        />
        </a>
        {/* </div> */}
      </div>
      
      <ScrollToTopButton />
      {/* </div> */}
    </>
  );
}

export default HomePage;
