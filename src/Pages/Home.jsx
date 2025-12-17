import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Brand1 from "../Components/Brand/Brand1";
import Choose1 from "../Components/Choose/Choose1";
import Counter1 from "../Components/Counter/Counter1";
import Cta1 from "../Components/Cta/Cta1";
import Faq1 from "../Components/Faq/Faq1";
import Feature1 from "../Components/Feature/Feature1";
import Feature2 from "../Components/Feature/Feature2";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import HowWork from "../Components/HowWork/HowWork";
import Pricing1 from "../Components/Pricing/Pricing1";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>

            {/* HERO SECTION */}
            <HeroBanner1
                subtitle="<span>Welcome to</span> Chatzyr"
                title="Connect, Chat, and Stream Together"
                content="Chatzyr is a revolutionary mobile application that brings people together through social connections, direct messages, group chats, and group streams. Experience seamless communication and real-time streaming in one powerful platform."
                btnname="Download App"
                btnurl="/contact"
                btntwo="Explore Features"
                btn2url="/features"
                cusimg="/assets/images/intro/introProfileThumb1_1.png"
                cusnumber="2M+"
                cuscontent="Active Users"
                rating="4.8/5"
                ratingcon="App Store Rating"
                img="/assets/images/mocks/mock1.png"
            ></HeroBanner1>

            {/* TRUSTED BRANDS */}
            <Brand1></Brand1>

            {/* ABOUT SECTION */}
            <About1
                img1="/assets/images/about/aboutThumb1_1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About Chatzyr"
                title="Your All-in-One Social Communication Platform"
                content="Chatzyr revolutionizes how people connect and communicate. Whether you're sending direct messages, participating in group chats, or streaming live with friends, our platform provides a seamless, secure, and engaging experience for all your social interactions."
                FeatureList={[
                    "Secure direct messaging with end-to-end encryption.",
                    "Dynamic group chats with real-time synchronization.",
                    "Live group streaming with HD quality video."
                ]}
                btnname="Learn More"
                btnurl="/about"
            />

            {/* HOW IT WORKS */}
            <HowWork></HowWork>

            {/* WHY CHOOSE US */}
            <Choose1
                subtitle="Why Choose Chatzyr"
                title="Designed for Modern Social Communication"
                content="Chatzyr combines cutting-edge technology with intuitive design to deliver the best social communication experience. We prioritize user privacy, seamless connectivity, and rich features that make staying in touch effortless and enjoyable."
                FeatureList={[
                    "High-quality group streaming with low latency.",
                    "Private and public group chat options."
                ]}
                FeatureList2={[
                    "Real-time message delivery and read receipts.",
                    "Advanced privacy controls and security features."
                ]}
                btnname="Get Started"
                btnurl="/contact"
            ></Choose1>

            {/* FEATURES */}
            <Feature1></Feature1>

            {/* COUNTERS / STATS */}
            <Counter1></Counter1>

            {/* FAQ */}
            <Faq1></Faq1>

            {/* TESTIMONIALS */}
            <Testimonial></Testimonial>

            {/* ADVANCED FEATURES */}
            <Feature2></Feature2>

            {/* PRICING */}
            <Pricing1></Pricing1>

            {/* CTA SECTION */}
            <Cta1
                subtitle="Join Chatzyr Today"
                title="Start Connecting with Friends"
                content="Download Chatzyr now on iOS and Android. Experience seamless messaging, group chats, and live streaming. Join millions of users who trust Chatzyr for their social communication needs."
                btnurl1="https://play.google.com/store"
                btnurl2="https://www.apple.com/store"
                img="/assets/images/cta/ctaThumb1_1.png"
            ></Cta1>

            {/* BLOG */}
            <Blog1></Blog1>

        </div>
    );
};

export default Home;
