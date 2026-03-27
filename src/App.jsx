import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Play } from 'lucide-react';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import style from './App.module.scss';
import TopPanel from './components/top-panel/TopPanel.jsx';
import WhoAreWeSection from './components/whoAreWe/WhoAreWe.jsx';
import Footer from './components/footer/Footer.jsx';
import OrganicSocialMediaPage from './pages/social-media-marketing/SocialMediaMarketing.jsx';
import PPCAdsPage from './pages/ppc/Ppc.jsx';
import BingAdsPage from './pages/paid-ads/PaidAds.jsx';
import ContactForm from './components/contactForm/ContactForm.jsx';
import WebDevelopmentPage from './pages/web-development/WebDevelopment.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  return (
    <>
    <ThemeProvider>

      <TopPanel />
      <BrowserRouter>
        <Navbar />
        <div className={style.App}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<WhoAreWeSection />} />
          </Routes>
          <Routes>
            <Route path="/social-media-marketing" element={<OrganicSocialMediaPage />} />
          </Routes>
          <Routes>
            <Route path="/ppc" element={<PPCAdsPage />} />
          </Routes>
          <Routes>
            <Route path="/paid-advertising" element={<BingAdsPage />} />
          </Routes>
          <Routes>
            <Route path="/web-development" element={<WebDevelopmentPage />} />
          </Routes>
          <Routes>
            <Route path="/contact-us" element={<ContactForm />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
