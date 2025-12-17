import About4 from "../Components/About/About4";
import Choose2 from "../Components/Choose/Choose2";
import Choose4 from "../Components/Choose/Choose4";
import BreadCumb from "../Components/Common/BreadCumb";
import HowWork from "../Components/HowWork/HowWork";
import Testimonial4 from "../Components/Testimonial/Testimonial4";

const AboutPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="About Us"
            ></BreadCumb>
            <About4
                img1="/assets/images/about/aboutThumb1_1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About Chatzyr"
                title="Revolutionizing Social Communication"
                content="Chatzyr was created with a vision to transform how people connect and communicate in the digital age. We are a dedicated team of developers, designers, and communication experts committed to building the most intuitive, secure, and feature-rich social platform. Our mission is to bring people closer together through seamless messaging, engaging group chats, and immersive live streaming experiences."
                FeatureList={[
                    "Advanced messaging technology with real-time synchronization.",
                    "User-centric design focused on privacy and security.",
                    "Global infrastructure ensuring fast and reliable connections.",
                ]}
                btnname="Contact Us"
                btnurl="/contact"
            ></About4>
            <Choose2
                img1="/assets/images/wcu/wcuThumb2_1.png"
                img2="/assets/images/wcu/wcuThumb2_2.png"
                img3="/assets/images/wcu/wcuThumb2_3.png"
                subtitle="Our Mission & Values"
                title="Building Connections That Matter"
                content="At Chatzyr, we believe that technology should enhance human connections, not replace them. Our platform is designed to make communication effortless, secure, and enjoyable for everyone, from individual users to large communities."
                boximg1="/assets/images/icon/wcuIcon2_1.svg"
                boxtitle1="Privacy First"
                boxcontent1="Your conversations and data are protected with industry-leading encryption and privacy controls."
                boximg2="/assets/images/icon/wcuIcon2_2.svg"
                boxtitle2="Innovation Driven"
                boxcontent2="We continuously evolve our platform with new features based on user feedback and emerging technologies."
            ></Choose2>
            <HowWork></HowWork>
            <Choose4></Choose4>
            <Testimonial4></Testimonial4>
        </div>
    );
};

export default AboutPage;