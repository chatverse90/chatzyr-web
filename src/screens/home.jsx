import React from 'react';
import Hero from '../components/Hero';
import { CardAnim } from '../components/Features';
import Stats from '../components/Stats';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import MobileAppCTA from '../components/homecta';

const Home = () => {
    // Import your components above and use them below as needed
    // Example: <Header />, <ChatList />, <Footer />

    return (
        <div>
           <Hero></Hero>
           <CardAnim></CardAnim>
           <Stats></Stats>
           <Pricing></Pricing>
           <FAQ></FAQ>
           <MobileAppCTA></MobileAppCTA>
        </div>
    );
};

export default Home;