import React from 'react';
import Navbar from './components/navbar';
import HomePage from './screens/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Report from './screens/report';
import Footer from './components/footer';
import Suggestion from './screens/suggestion';
import PrivacyAndTerms from './screens/pirvacyterms';
import TermsofUse from './screens/terms';
import ContactUs from './screens/contact';
import Shop from './screens/shop';
import VIPPackages from './screens/vip';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="report" element={<Report />} />
          <Route path="suggestion" element={<Suggestion />} />
          <Route path='privacyterms' element={<PrivacyAndTerms/>}/>
          <Route path='termsofuse' element={<TermsofUse/>}/>
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='vip' element={<VIPPackages/>}/>
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
