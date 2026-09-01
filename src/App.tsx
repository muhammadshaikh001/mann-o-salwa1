import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ReserveModal from './components/ReserveModal';
import SEOSchema from './components/SEOSchema';

// ── Lazy load below-fold components ──
// These will only be downloaded when the user scrolls near them
const About = lazy(() => import('./components/About'));
const Menu = lazy(() => import('./components/Menu'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Gallery = lazy(() => import('./components/Gallery'));
const Reviews = lazy(() => import('./components/Reviews'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingButtons = lazy(() => import('./components/FloatingButtons'));

// Lightweight skeleton fallback — matches dark background
function SectionSkeleton() {
  return (
    <div
      className="w-full py-24 flex items-center justify-center"
      style={{ minHeight: '300px', background: '#060A13' }}
      aria-hidden="true"
    >
      <div
        className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: 'rgba(201,168,76,0.3)', borderTopColor: '#C9A84C' }}
      />
    </div>
  );
}

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#060A13' }}>
      <SEOSchema />
      {/* Above-fold — loaded eagerly */}
      <Navbar onReserve={() => setShowModal(true)} />
      <main>
        <Hero onReserve={() => setShowModal(true)} />
        <TrustBar />

        {/* Below-fold — lazy loaded with suspense */}
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Menu />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <WhyUs />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Reviews />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FinalCTA onReserve={() => setShowModal(true)} />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <FloatingButtons />
      </Suspense>

      {showModal && (
        <ReserveModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
