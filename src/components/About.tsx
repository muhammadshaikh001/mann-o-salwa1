import { useRef } from 'react';
import { useReveal } from '../utils/useReveal';

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    title: 'Tandoor Mastery',
    desc: 'Our clay tandoor is the heart of the kitchen — fired to perfection for every order.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Fresh Every Day',
    desc: 'Ingredients sourced fresh daily to ensure every dish bursts with authentic flavor.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Family Seating',
    desc: 'Comfortable, clean, and spacious seating designed for families and groups.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Drive-Through',
    desc: 'One of the few restaurants in Ratanpur offering a convenient drive-through option.',
  },
];

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section id="about" ref={sectionRef} className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #060A13 0%, #0B1020 50%, #060A13 100%)' }}>
      {/* Bg blobs */}
      <div className="blob-gold w-[500px] h-[500px] -top-20 -right-40 opacity-30" />
      <div className="blob-navy w-[600px] h-[600px] bottom-0 -left-40 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image Side */}
          <div className="reveal-left relative">
            <div className="relative rounded-sm overflow-hidden aspect-[4/5]" style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.12)' }}>
              <img
                src="/images/about-bg.jpg"
                alt="Mann O Salwa restaurant interior ambiance"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,10,19,0.7) 0%, transparent 50%)' }} />
            </div>

            {/* Gold corner accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              <div className="absolute top-0 left-0 h-full w-px" style={{ background: 'linear-gradient(180deg, #C9A84C, transparent)' }} />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-px" style={{ background: 'linear-gradient(270deg, #C9A84C, transparent)' }} />
              <div className="absolute bottom-0 right-0 h-full w-px" style={{ background: 'linear-gradient(0deg, #C9A84C, transparent)' }} />
            </div>

            {/* Floating Rating Badge */}
            <div className="absolute -bottom-8 right-0 sm:-left-8 sm:right-auto" style={{ background: 'linear-gradient(135deg, #0F1628, #131D34)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '4px', padding: '20px 24px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
              <div className="text-center">
                <div className="font-heading text-4xl font-bold text-gradient">4.5</div>
                <div className="flex justify-center gap-0.5 my-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'text-[#C9A84C]' : 'text-[#C9A84C]/40'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-[10px] font-body tracking-[2px] uppercase text-[#7A8AA0]">265 Reviews</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="reveal flex items-center gap-3 mb-5">
              <span className="ornament" />
              <span className="text-xs font-body font-bold tracking-[4px] uppercase text-[#C9A84C]">Our Story</span>
              <span className="ornament-right" />
            </div>

            <h2 className="reveal font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 leading-[1.1] mb-6">
              A Place Where <span className="text-gradient italic">Flavour</span><br />Meets Heart
            </h2>

            <p className="reveal font-body text-[#7A8AA0] text-base leading-[1.9] mb-4">
              Nestled in Ratanpur, Gujarat, Mann O Salwa is a destination restaurant that brings together
              the rich traditions of Indian grilling and the warmth of family dining.
            </p>
            <p className="reveal font-body text-[#7A8AA0] text-base leading-[1.9] mb-8">
              From our celebrated <strong className="text-[#C9A84C] font-semibold">Kashmiri Fish</strong> and
              slow-cooked <strong className="text-[#C9A84C] font-semibold">Raan</strong> to golden tandoori specials and indulgent desserts —
              every dish is crafted with care and recipes that honour the depth of Indian culinary heritage.
            </p>

            <div className="reveal divider-gold mb-8" />

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.title} className="reveal group flex gap-3 p-4 card-premium cursor-default">
                  <div className="icon-badge w-10 h-10 rounded shrink-0 mt-0.5">
                    {h.icon}
                  </div>
                  <div>
                    <div className="font-heading text-sm font-semibold text-stone-200 mb-1 tracking-wide">{h.title}</div>
                    <div className="text-xs font-body text-[#7A8AA0] leading-relaxed">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
