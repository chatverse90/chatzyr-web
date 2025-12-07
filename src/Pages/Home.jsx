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
                subtitle="<span>New!</span> Chatyzyr"
                title="Connect Instantly with Real-Time Group & Private Chats."
                content="Chatyzyr is a modern communication platform built for real-time conversations. Chat freely with friends, teams, and communities through instant messaging, voice notes, media sharing, and interactive group chats—securely and seamlessly."
                btnname="Get Started"
                btnurl="/contact"
                btntwo="Learn More"
                btn2url="/about"
                cusimg="/assets/images/intro/introProfileThumb1_1.png"
                cusnumber="2,291"
                cuscontent="Active Users"
                rating="4.8/5"
                ratingcon="User Rating"
                img="/assets/images/mocks/mock1.png"
            ></HeroBanner1>

            {/* TRUSTED BRANDS */}
            <Brand1></Brand1>

            {/* ABOUT SECTION */}
            <About1
                img1="/assets/images/about/aboutThumb1_1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="About Our App"
                title="A Modern Social Platform for Real-Time Chat & Community Engagement"
                content="Chatyzyr powers fast, secure, and engaging conversations. Whether you're creating community groups, coordinating with teammates, or simply chatting with friends, Chatyzyr makes communication seamless and enjoyable."
                FeatureList={[
                    "Instant group chat and private messaging.",
                    "Share photos, videos, documents, and voice notes.",
                    "Built on scalable and secure cloud infrastructure."
                ]}
                btnname="Discover More"
                btnurl="/about"
            />

            {/* HOW IT WORKS */}
            <HowWork></HowWork>

            {/* WHY CHOOSE US */}
            <Choose1
                subtitle="Why Choose Chatyzyr"
                title="Designed for Fast, Secure & Meaningful Conversations"
                content="Chatyzyr provides a messaging experience built around speed, simplicity, and connection. Stay in sync with your groups, collaborate instantly, and enjoy an intuitive, user-friendly chat environment."
                FeatureList={[
                    "Clean and intuitive user interface.",
                    "Optimized performance for smooth messaging."
                ]}
                FeatureList2={[
                    "Cloud-based chat sync across devices.",
                    "Strong end-to-end security and privacy."
                ]}
                btnname="Download App"
                btnurl="/about"
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
                subtitle="Get Chatyzyr Today"
                title="Download the App & Start Chatting Instantly"
                content="Experience seamless messaging, secure communication, and powerful group chat features. Start your free trial and explore the next generation of social interaction."
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
