import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="How It Works"
                            Title="Get Started with Real-Time Chat in Minutes"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape">
                            <img src="/assets/images/shape/workProcessShape1_1.png" alt="shape" />
                        </div>

                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="step">STEP - 01</div>
                                    <div className="title">Download the App</div>
                                    <div className="text">Install ChatZYR on your device to start connecting instantly.</div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="step">STEP - 02</div>
                                    <div className="title">Create Your Account</div>
                                    <div className="text">Set up your profile and join or create chat groups effortlessly.</div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="step">STEP - 03</div>
                                    <div className="title">Start Chatting</div>
                                    <div className="text">Enjoy real-time messaging, media sharing, and seamless group conversations.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;
