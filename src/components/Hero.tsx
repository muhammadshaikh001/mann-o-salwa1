import { useEffect, useRef } from 'react';

interface Props {
  onReserve?: () => void;
}

export default function Hero({ onReserve }: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => { logoRef.current?.classList.add('animate-fadeInScale'); logoRef.current && (logoRef.current.style.opacity = '1'); }, 100),
      setTimeout(() => { badgeRef.current?.classList.add('animate-fadeInDown'); badgeRef.current && (badgeRef.current.style.opacity = '1'); }, 400),
      setTimeout(() => { titleRef.current?.classList.add('animate-fadeInUp'); titleRef.current && (titleRef.current.style.opacity = '1'); }, 700),
      setTimeout(() => { subtitleRef.current?.classList.add('animate-fadeInUp'); subtitleRef.current && (subtitleRef.current.style.opacity = '1'); }, 1000),
      setTimeout(() => { ctaRef.current?.classList.add('animate-fadeInUp'); ctaRef.current && (ctaRef.current.style.opacity = '1'); }, 1300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Mann O Salwa restaurant ambiance"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Main dark overlay */}
        <div className="hero-overlay absolute inset-0" />
        {/* Warm golden light from bottom — simulates ambient restaurant glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 110%, rgba(201,140,30,0.28) 0%, transparent 70%)' }} />
        {/* Top dark vignette for text readability */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(6,10,19,0.55) 0%, transparent 40%, transparent 60%, rgba(6,10,19,0.65) 100%)' }} />
        {/* Side vignettes */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(6,10,19,0.5) 0%, transparent 25%, transparent 75%, rgba(6,10,19,0.4) 100%)' }} />
        {/* Subtle warm light rays from top pendants */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,140,30,0.12) 0%, transparent 60%)' }} />
      </div>

      {/* Decorative corner ornaments — top left */}
      <div className="absolute top-24 left-8 md:left-16 hidden md:block pointer-events-none">
        <div className="w-16 h-16 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-[#C9A84C] opacity-40" />
          <div className="absolute top-0 left-0 h-full w-px bg-[#C9A84C] opacity-40" />
        </div>
      </div>
      {/* Top right */}
      <div className="absolute top-24 right-8 md:right-16 hidden md:block pointer-events-none">
        <div className="w-16 h-16 relative">
          <div className="absolute top-0 right-0 w-full h-px bg-[#C9A84C] opacity-40" />
          <div className="absolute top-0 right-0 h-full w-px bg-[#C9A84C] opacity-40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Logo */}
        <div ref={logoRef} style={{ opacity: 0 }} className="mb-8 flex justify-center">
          <div className="animate-float relative w-36 h-36 rounded-full overflow-hidden" style={{ border: '2px solid rgba(201,168,76,0.65)', boxShadow: '0 0 0 8px rgba(201,168,76,0.05), 0 0 50px rgba(201,168,76,0.22), 0 20px 60px rgba(0,0,0,0.5)' }}>
            <img src="/images/mann-o-salwa-logo.png" alt="Mann O Salwa" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Location badge */}
        <div ref={badgeRef} style={{ opacity: 0 }} className="mb-6 inline-flex items-center gap-3">
          <span className="ornament" />
          <span className="text-xs font-body font-bold tracking-[4px] uppercase text-[#C9A84C]">
            Ratanpur, Gujarat
          </span>
          <span className="ornament-right" />
        </div>

        {/* Main heading */}
        <h1
          ref={titleRef}
          className="font-display font-bold leading-[1.05] mb-6"
          style={{ opacity: 0, fontSize: 'clamp(2.8rem, 7vw, 6rem)', letterSpacing: '-0.01em' }}
        >
          <span className="text-stone-100">Where Every</span>
          <br />
          <span className="text-gradient italic">Bite Tells a Story</span>
        </h1>

        {/* Tagline */}
        <p
          ref={subtitleRef}
          className="font-body text-base md:text-lg leading-[1.85] max-w-xl mx-auto mb-4"
          style={{ opacity: 0, color: 'rgba(240,232,208,0.7)' }}
        >
          Experience the artistry of tandoor-fired grills, slow-cooked gravies, and age-old recipes —
          served in a warm, welcoming setting that feels like home.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} style={{ opacity: 0 }} className="space-y-6">

          {/* Rating pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full" style={{ background: 'rgba(15,22,40,0.7)', backdropFilter: 'blur(16px)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'text-[#F0D080]' : 'text-[#C9A84C]/40'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-body font-bold text-[#F0D080]">4.5</span>
              <span className="text-[rgba(240,232,208,0.3)] text-sm">/</span>
              <span className="text-sm font-body" style={{ color: 'rgba(240,232,208,0.6)' }}>265 Google Reviews</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollTo('menu')} className="btn-primary pulse-gold">
              Explore Our Menu
            </button>
            <button onClick={onReserve} className="btn-outline">
              Reserve a Table
            </button>
          </div>

          {/* Quick info pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-body mt-2">
            {[
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Open till 1 AM' },
              { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', text: 'Dine-In & Drive-Through' },
              { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: '\u20b9400\u2013600 per person' },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(240,232,208,0.55)' }}>
                <svg className="w-3.5 h-3.5 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[4px] uppercase font-body" style={{ color: 'rgba(201,168,76,0.5)' }}>Scroll</span>
        <div className="w-px h-10 relative overflow-hidden" style={{ background: 'rgba(201,168,76,0.15)' }}>
          <div className="w-full h-1/2 absolute" style={{ background: '#C9A84C', animation: 'scrollLine 1.8s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { top: -50%; }
          100% { top: 150%; }
        }
        @keyframes animate-fadeInScale {
          from { opacity: 0; transform: scale(0.88); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInScale { animation: animate-fadeInScale 1.2s cubic-bezier(0.4,0,0.2,1) forwards; }
      `}</style>
    </section>
  );
}
