import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-685 mx-auto wow fadeInUp" data-wow-delay=".2s">
                        <SectionTitle
                            SubTitle="Amazing Features"
                            Title="Everything you need to connect and communicate"
                        ></SectionTitle>
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="Group Streaming"
                                        content="Stream live with friends in high-quality video and audio for immersive group experiences."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_2.svg"
                                        title="Direct Messages"
                                        content="Send secure, private messages with end-to-end encryption for one-on-one conversations."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Group Chats"
                                        content="Create and manage group conversations with real-time messaging and media sharing."
                                    ></FeatureCard>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                                    <div className="main-thumb wow bounceInUp" data-wow-delay=".6s"><img
                                        src="/assets/images/wcu/wcuThumb1_1.png" alt="thumb" /></div>
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title="Social Connections"
                                        content="Build and maintain your social network with easy friend management and discovery."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_5.svg"
                                        title="Media Sharing"
                                        content="Share photos, videos, and files instantly with your contacts and groups."
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_6.svg"
                                        title="Privacy Controls"
                                        content="Customize your privacy settings and control who can contact you or see your activity."
                                    ></FeatureCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;