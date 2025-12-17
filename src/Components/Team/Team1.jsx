import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import data from '../../Data/team1.json';

const Team1 = () => {
    return (
<section className="team-page-section section-padding fix">
        <div className="team-page-container-wrapper style1">
            <div className="container">
                <div className="team-page-wrapper style1">
                    <div className="row gy-5">
                    {data.map((item, index)=>(
                        <div key={index} className="col-xl-4 col-md-6">
                            <div className="team-card style1">
                                <div className="team-thumb">
                                    <img src={item.img} alt="thumb" /> 
                                </div>
                                <div className="team-card-content">
                                    <h3>
                                        <Link to="/team/team-details">{item.title}</Link>
                                    </h3>
                                    <p className="designation">{item.desc}</p>
                                    <ul className="social-links">
                                    <li><Link to={item.facebook}><Facebook size={18} /></Link></li>
                            <li><Link to={item.twitter}><Twitter size={18} /></Link></li>
                            <li><Link to={item.linkedin}><Linkedin size={18} /></Link></li>
                            <li><Link to={item.pinterest}><Share2 size={18} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Team1;