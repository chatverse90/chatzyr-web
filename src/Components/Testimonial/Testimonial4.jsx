import Slider from 'react-slick';
import data from '../../Data/testimonial1.json'
import SectionTitle from '../Common/SectionTitle';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonial4 = () => {

    const sliderRef = useRef(null);

    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };  

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,           
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    return (
        
        <section className="testimonial-section section-padding pt-0 fix">
        <div className="container">
            <div className="testimonial-wrapper style3">
                <div className="section-title-wrapper style3">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                            <SectionTitle
                                        SubTitle="Testimonial"
                                        Title="What our clients say?"
                                    ></SectionTitle> 
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="slider-arrow-button style2 text-end wow fadeInUp" data-wow-delay=".9s">
                                <button onClick={previous} data-slider-prev="#testimonialSliderThree" className="slider-arrow arrowPrev"><ChevronLeft size={20} /></button>
                                <button onClick={next} data-slider-next="#testimonialSliderThree" className="slider-arrow arrowNext"><ChevronRight size={20} /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-area testimonialSliderThree">
                    <div className="swiper gt-slider" id="testimonialSliderThree" >
                        
                        <div className="swiper-wrapper cs_slider_gap_301">

                        <Slider ref={sliderRef} {...settings}>
                        {data.map((item, index)=>(
                            <div key={index} className="swiper-slide">
                                <div className="testimonial-card style2">
                                    <div className="testimonial-header">
                                        <div className="profile-thumb">
                                            <img src={item.img} />
                                        </div>
                                        <div className="content">
                                            <h5>{item.title}</h5>
                                            <p className="text">{item.subTitle}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-body">
                                        <ul className="star-wrapper style1">
                                            <li><Star size={16} fill="currentColor" className="text-warning" /></li>
                                            <li><Star size={16} fill="currentColor" className="text-warning" /></li>
                                            <li><Star size={16} fill="currentColor" className="text-warning" /></li>
                                            <li><Star size={16} fill="currentColor" className="text-warning" /></li>
                                            <li><Star size={16} fill="currentColor" className="text-warning" /></li>
                                        </ul>
                                        <p className="desc">{item.desc}</p>
                                    </div>
                                    <div className="quote-icon"><Quote size={24} style={{ color: 'var(--primary)' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        </Slider>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



       
    );
};

export default Testimonial4;