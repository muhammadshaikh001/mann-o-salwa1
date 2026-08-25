import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Menu from './components/Menu';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import SEOSchema from './components/SEOSchema';
import ReserveModal from './components/ReserveModal';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#060A13' }}>
      <SEOSchema />
      <Navbar onReserve={() => setShowModal(true)} />
      <main>
        <Hero onReserve={() => setShowModal(true)} />
        <TrustBar />
        <About />
        <Menu />
        <WhyUs />
        <Gallery />
        <Reviews />
        <FAQ />
        <FinalCTA onReserve={() => setShowModal(true)} />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      {showModal && <ReserveModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

