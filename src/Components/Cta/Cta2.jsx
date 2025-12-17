import { Link } from "react-router-dom";

const Cta2 = () => {
    return (
        <section className="service-section-3">
        <div className="container">
            <div className="service-thumb section-padding pb-0 img-custom-anim-left wow fadeInLeft" data-wow-delay=".3s">
                <img src="/assets/images/services/servicesThumb1_1.jpg" alt="thumb" />
            </div>
        </div>
        <div className="service-container-wrapper style3  section-padding fix">
            <div className="container">
                <div className="service-wrapper style3">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Experience the Future of Social Communication
                    </h2>
                    <p className="text wow fadeInUp" data-wow-delay=".5s">Chatzyr offers a comprehensive suite of communication tools designed to keep you connected with friends, family, and communities. From private direct messages to dynamic group chats and live streaming, our platform provides everything you need for modern social interaction. Join millions of users who trust Chatzyr for secure, fast, and engaging communication experiences.</p>

                    <Link to="/contact"> <span className="theme-btn wow fadeInUp" data-wow-delay=".3s"> Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <g clipPath="url(#clip0_199_944)">
                                    <path
                                        d="M11.6123 3.61183L10.8996 4.32455L14.0711 7.49604H0.000488281V8.50399H14.0711L10.8996 11.6754L11.6123 12.3882L16.0005 7.99998L11.6123 3.61183Z"
                                        fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_199_944">
                                        <rect width="16" height="16" fill="white" transform="translate(0.000488281)">
                                        </rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Cta2;