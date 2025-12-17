import BreadCumb from "../Components/Common/BreadCumb";
import Feature1 from "../Components/Feature/Feature1";
import Feature2 from "../Components/Feature/Feature2";
import Feature3 from "../Components/Feature/Feature3";
import Choose1 from "../Components/Choose/Choose1";
import Counter1 from "../Components/Counter/Counter1";

const FeaturesPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Features"
            ></BreadCumb>
            <Feature1></Feature1>
            <Feature2></Feature2>
            <Choose1
                subtitle="Why Choose Chatzyr"
                title="Powerful Features for Modern Communication"
                content="Chatzyr combines cutting-edge technology with intuitive design to deliver the best social communication experience. Our platform is built for creators, communities, and individuals who want to connect authentically."
                FeatureList={[
                    "End-to-end encryption for all messages and streams.",
                    "Cross-platform compatibility on iOS, Android, and Web."
                ]}
                FeatureList2={[
                    "Real-time notifications and activity updates.",
                    "Advanced moderation tools for safe communities."
                ]}
                btnname="Get Started"
                btnurl="/contact"
            ></Choose1>
            <Counter1></Counter1>
        </div>
    );
};

export default FeaturesPage;

