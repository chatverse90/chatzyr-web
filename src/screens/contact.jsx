import React from 'react';
import './contact.css'; // Import your CSS for styling
import { FaPhone, FaEnvelope, FaMapMarker, FaBiohazard, FaReact, FaAdversal, FaModx } from 'react-icons/fa'; // Import icons
import ScrollToTopButton from '../components/ScrollTop';

const ContactUs = () => {
    return (
        // <div className='container'>      
              <div className="contact-container">
              <header className='headerStyle'>
                <h1 className='headingStyle'>Contact Us</h1>
            </header>
            <div className="contact-info">
                <div className="contact-item">
                    <FaPhone className="icon" />
                    <p className="text">Phone: +13474671050</p>
                </div>
                <div className="contact-item">
                    <FaEnvelope className="icon" />
                    <p className="text">Email: chatzyr@gmail.com</p>
                </div>
                <div className="contact-item">
                    <FaModx className="icon" />
                    <p className="text">Report Email: Report.chatzyr@gmail.com</p>
                </div>
                {/* <div className="contact-item">
                    <FaMapMarker className="icon" />
                    <p className="text">47 , 47 , G thirteen  two  , Islamabad </p>
                </div> */}
            </div>
            <ScrollToTopButton></ScrollToTopButton>
        </div>
        // </div>

    );
};

export default ContactUs;
