import { useEffect, useRef } from 'react';

const stats = [
  { value: '265+', label: 'Google Reviews', sub: 'Verified guests', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )},
  { value: '4.5★', label: 'Google Rating', sub: 'Consistently rated', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  )},
  { value: '400+', label: 'Starting Price', sub: 'Per person (INR)', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
  )},
  { value: '1 AM', label: 'Open Late', sub: 'Every night', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )},
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-item').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-12 overflow-hidden" style={{ background: 'linear-gradient(180deg, #060A13 0%, #0B1020 60%, #060A13 100%)' }}>
      <div className="absolute top-0 left-0 right-0 gold-line-h" />
      <div className="absolute bottom-0 left-0 right-0 gold-line-h" />
      <div className="blob-gold w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="stat-item relative">
              {idx > 0 && (
                <div className="hidden md:block absolute left-0 top-4 bottom-4" style={{ width: '1px', background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.25), transparent)' }} />
              )}
              <div className="flex flex-col items-center text-center py-6 px-4">
                <div className="icon-badge mb-4 w-12 h-12 rounded-full" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
                  {stat.icon}
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1 leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-body font-semibold tracking-[2.5px] uppercase text-stone-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] font-body text-[#7A8AA0] tracking-wide mt-0.5">
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
