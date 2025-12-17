import { Link } from "react-router-dom";
import { Flame } from 'lucide-react';

const Feature2 = () => {
    return (
        
        <section className="feature-section section-padding fix">
            <div className="container">
                <div className="feature-wrapper style1">
                    <div className="row gy-5 gx-134">
                        <div className="col-xl-6 order-2 order-xl-1">
                            <div className="feature-content">
                                <div className="section-title">
                                    <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                                        Advanced Features <Flame size={18} className="d-inline" style={{ color: 'var(--primary)' }} />
                                    </div>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".4s">Powerful tools to enhance your communication experience</h2>
                                    <p className="section-desc wow fadeInUp" data-wow-delay=".6s">Chatzyr's advanced features are designed to make every interaction seamless and enjoyable. From intelligent message organization to real-time notifications and rich media support, we provide everything you need to stay connected and engaged with your social circles.</p>
                                </div>
                                <Link className="theme-btn wow fadeInUp" data-wow-delay=".2s" to="/contact">Download Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none">
                                        <g clipPath="url(#clip0_91_29)">
                                            <path
                                                d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_91_29">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 order-1 order-xl-2">
                            <div className="feature-box-wrapper">
                                <div className="feature-box style1 child1">
                                    <div className="feature-box-header wow fadeInUp" data-wow-delay=".2s">
                                        <div className="content">
                                            <h5>Real-time Messaging</h5>
                                            <p className="text">Instant Delivery</p>
                                        </div>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35"
                                                viewBox="0 0 34 35" fill="none">
                                                <circle cx="17" cy="17.5" r="16" stroke="#F1F1F1" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="feature-box-footer wow fadeInUp" data-wow-delay=".4s">
                                        <div className="content">
                                            <span className="day">Today</span>
                                            <span className="time">07:02 AM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box style1 child2">
                                    <div className="feature-box-header wow fadeInUp" data-wow-delay=".6s">
                                        <div className="content">
                                            <h5>Group Management</h5>
                                            <p className="text">Easy Control</p>
                                        </div>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35"
                                                viewBox="0 0 34 35" fill="none">
                                                <circle cx="17" cy="17.5" r="16" stroke="#F1F1F1" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="feature-box-footer wow fadeInUp" data-wow-delay=".6s">
                                        <div className="content">
                                            <span className="day">Today</span>
                                            <span className="time">07:02 AM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="feature-box-header">
                                        <div className="content">
                                            <h5>Live Streaming</h5>
                                            <p className="text">HD Quality</p>
                                        </div>
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35"
                                                viewBox="0 0 34 35" fill="none">
                                                <circle cx="17" cy="17.5" r="16" stroke="#F1F1F1" strokeWidth="2" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="feature-box-footer">
                                        <div className="content">
                                            <span className="day">Today</span>
                                            <span className="time">07:02 AM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature2;