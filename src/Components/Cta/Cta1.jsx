import { Link } from "react-router-dom";
import { Flame } from 'lucide-react';

const Cta1 = ({subtitle,title,content,btnurl1,btnurl2,img}) => {
    return (
        <section className="cta-section">
            <div className="cta-container-wrapper style1">
                <div className="container">
                    <div className="cta-wrapper style1  section-padding fix">
                        <div className="container">
                            <div className="row gy-5">
                                <div className="col-xl-8 order-2 order-xl-1">
                                    <div className="cta-content">
                                        <div className="section-title">
                                            <div className="subtitle text-white bg2 wow fadeInUp" data-wow-delay=".2s">
                                                {subtitle} <Flame size={18} className="d-inline" style={{ color: 'var(--primary)' }} />
                                            </div>
                                            <h2 className="title text-white wow fadeInUp" data-wow-delay=".4s">{title}</h2>
                                            <p className="section-desc text-white mxw-651 wow fadeInUp" data-wow-delay=".6s">
                                                {content}</p>
                                        </div>
                                        <Link className="playstore" to={btnurl1}><img
                                                src="/assets/images/cta/ctaplayStore1_1.png" alt="img" /></Link>
                                        <Link to={btnurl2}><img
                                                src="/assets/images/cta/ctaAppleStore1_1.png" alt="img" /></Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 order-1 order-xl-2">
                                    <div className="cta-thumb wow fadeInUp" data-wow-delay=".2s">
                                        <img src={img} alt="thumb" />
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

export default Cta1;