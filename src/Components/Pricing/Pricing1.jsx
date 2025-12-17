import { useState } from "react";
import PricingCard from "../Card/PricingCard";

const Pricing1 = () => {

    const [isActive, setIsActive] = useState('monthly');

    return (
        <section className="pricing-section section-padding pt-0 fix">
            <div className="container">
                <div className="section-title text-center mxw-685 mx-auto">
                    <div className="subtitle">
                        StreamSync Plans <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                    </div>
                    <h2 className="title">Choose Your Streaming Journey</h2>
                    <p className="text">Start effectively with our flexible plans. Unlocks features as you grow your community.
                    </p>
                </div>
                <div className="pricing-wrapper style1">
                    <div className="tab-section d-flex justify-content-center align-items-center">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className={`nav-item ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')} role="presentation">
                                <button className="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly"
                                    aria-selected="true">Monthly</button>
                            </li>
                            <li className={`nav-item ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')} role="presentation">
                                <button className="nav-link" id="pills-yearly-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly"
                                    aria-selected="false" tabIndex="-1">Yearly</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="pills-monthly" role="tabpanel"
                            aria-labelledby="pills-monthly-tab">
                            <div className="row gy-5">

                                <PricingCard
                                    name="Viewer"
                                    price="Free"
                                    monthly="Forever"
                                    content="Perfect for watching and chatting."
                                    FeatureList={[
                                        "Watch streams in 720p",
                                        "Join public groups",
                                        "Basic chat features",
                                        "Follow up to 50 channels",
                                        "Mobile app access",
                                    ]}
                                    btnname="Join for Free"
                                    btnurl="/pricing"
                                ></PricingCard>

                                <PricingCard
                                    name="Streamer"
                                    price="$9.99"
                                    monthly="Per Month"
                                    content="Start your own broadcasting journey."
                                    FeatureList={[
                                        "Stream in 1080p 60fps",
                                        "Create 5 private groups",
                                        "Store past streams (7 days)",
                                        "Streamer Badge",
                                        "Priority Support",
                                    ]}
                                    btnname="Start Streaming"
                                    btnurl="/pricing"
                                ></PricingCard>

                                <PricingCard
                                    name="Pro Creator"
                                    price="$24.99"
                                    monthly="Per Month"
                                    content="For serious creators and communities."
                                    FeatureList={[
                                        "4K HDR Streaming",
                                        "Unlimited Groups",
                                        "Store streams forever",
                                        "Custom Emotes & Badges",
                                        "Monetization enabled",
                                    ]}
                                    btnname="Go Pro"
                                    btnurl="/pricing"
                                ></PricingCard>

                            </div>
                        </div>
                        <div className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                            <div className="row gy-5">

                                <PricingCard
                                    name="Viewer"
                                    price="Free"
                                    monthly="Forever"
                                    content="Perfect for watching and chatting."
                                    FeatureList={[
                                        "Watch streams in 720p",
                                        "Join public groups",
                                        "Basic chat features",
                                        "Follow up to 50 channels",
                                        "Mobile app access",
                                    ]}
                                    btnname="Join for Free"
                                    btnurl="/pricing"
                                ></PricingCard>

                                <PricingCard
                                    name="Streamer"
                                    price="$99.99"
                                    monthly="Per Year"
                                    content="Start your own broadcasting journey."
                                    FeatureList={[
                                        "Stream in 1080p 60fps",
                                        "Create 5 private groups",
                                        "Store past streams (7 days)",
                                        "Streamer Badge",
                                        "Priority Support",
                                    ]}
                                    btnname="Start Streaming"
                                    btnurl="/pricing"
                                ></PricingCard>

                                <PricingCard
                                    name="Pro Creator"
                                    price="$249.99"
                                    monthly="Per Year"
                                    content="For serious creators and communities."
                                    FeatureList={[
                                        "4K HDR Streaming",
                                        "Unlimited Groups",
                                        "Store streams forever",
                                        "Custom Emotes & Badges",
                                        "Monetization enabled",
                                    ]}
                                    btnname="Go Pro"
                                    btnurl="/pricing"
                                ></PricingCard>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing1;