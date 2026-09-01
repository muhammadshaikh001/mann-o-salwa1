import { useRef } from 'react';
import { useReveal } from '../utils/useReveal';

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Live Tandoor Experience',
    desc: 'Watch your food being freshly grilled in our traditional clay tandoor. The smoky aroma and charred perfection are part of the Mann O Salwa experience.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Genuine Hospitality',
    desc: "Guests consistently highlight our staff's warmth and professionalism. Every visitor is treated as a guest in our home, not just a customer.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Trusted Quality',
    desc: 'A 4.5-star rating backed by 265+ genuine reviews is a testament to consistent quality in food, service, and ambiance.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Perfect for Groups & Families',
    desc: 'Spacious seating, large sharing platters, and a kids-friendly area make it the ideal venue for family celebrations and group outings.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Open Till 1 AM',
    desc: 'Late-night cravings are always welcome. We stay open until 1 AM every day, so you can dine on your schedule.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Excellent Value',
    desc: 'Premium quality food and ambiance at a very reasonable \u20b9400\u2013600 per person. Great food doesn\'t have to break the bank.',
  },
];

export default function WhyUs() {
  const sectionRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden" style={{ background: '#0B1020' }}>
      {/* Diagonal bg */}
      <div className="absolute inset-0 bg-diagonal opacity-60 pointer-events-none" />
      {/* Glow blobs */}
      <div className="blob-gold w-[400px] h-[400px] top-0 right-0 opacity-25" />
      <div className="blob-navy w-[500px] h-[500px] bottom-0 left-0 opacity-80" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <span className="ornament" />
            <span className="text-xs font-body font-bold tracking-[4px] uppercase text-[#C9A84C]">Why Guests Love Us</span>
            <span className="ornament-right" />
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 mb-4">
            The <span className="text-gradient italic">Mann O Salwa</span> Difference
          </h2>
          <p className="reveal font-body text-[#7A8AA0] max-w-xl mx-auto text-base leading-relaxed">
            It's not just food — it's the complete experience that keeps guests coming back again and again.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className="reveal card-premium group p-7"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-5">
                <div className="icon-badge">
                  {reason.icon}
                </div>
                <span className="font-heading text-5xl font-bold leading-none" style={{ color: 'rgba(201,168,76,0.08)' }}>
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-stone-100 mb-3 group-hover:text-[#F0D080] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-[#7A8AA0] leading-[1.85]">{reason.desc}</p>

              {/* Bottom gold accent */}
              <div className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
