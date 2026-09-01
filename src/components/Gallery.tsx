import { useEffect, useRef, useState } from 'react';

// ── ALL 10 permanent gallery images ──
// Previous 5 (menu) + New 5 uploaded — images will NEVER change
const galleryImages = [
  // ── New 5 (just uploaded) ──
  {
    src: '/images/gallery/mann-salwa-platter.jpg',
    alt: 'Mann O Salwa Signature Platter — Purely Delicious Grand Feast',
    title: 'Mann O Salwa Platter',
    subtitle: 'Purely Delicious',
    tag: 'Signature',
    wide: true,   // wide card (col-span-2)
    tall: false,
  },
  {
    src: '/images/gallery/mutton-magic.jpg',
    alt: 'Mutton Magic — That Defies Gravity! A Royal Feast for Every Mood',
    title: 'Mutton Magic',
    subtitle: 'That Defies Gravity!',
    tag: 'Must Try',
    wide: false,
    tall: true,   // tall card (row-span-2)
  },
  {
    src: '/images/gallery/chicken-sitara.jpg',
    alt: 'Chicken Sitara — A Feast That Defies Gravity!',
    title: 'Chicken Sitara',
    subtitle: 'Gravity Defying • Flavour Defining',
    tag: 'Fan Favourite',
    wide: false,
    tall: true,
  },
  {
    src: '/images/gallery/kashmiri-fish.jpg',
    alt: 'Special Kashmiri Fish — One Bite, A Royal Experience!',
    title: 'Kashmiri Fish',
    subtitle: 'One Bite, A Royal Experience!',
    tag: 'Seafood Special',
    wide: false,
    tall: false,
  },
  {
    src: '/images/gallery/restaurant-outdoor.jpg',
    alt: 'Hotel Mann O Salwa — Stunning Outdoor Garden Seating at Night',
    title: 'Our Royal Ambiance',
    subtitle: 'Where Every Meal Becomes A Memory',
    tag: 'Ambiance',
    wide: true,
    tall: false,
  },

  // ── Original 5 (from previous session) ──
  {
    src: '/images/menu/royal-raan-thal.jpg',
    alt: 'Mann O Salwa Royal Raan Thal — Grand Mutton Leg Rice Platter',
    title: 'Royal Raan Thal',
    subtitle: 'Slow-roasted mutton leg with aromatic rice',
    tag: 'King of Raan',
    wide: false,
    tall: true,
  },
  {
    src: '/images/menu/mutton-ghee-roast.jpg',
    alt: 'Mutton Ghee Roast — Pure Desi Ghee & Fresh Herbs',
    title: 'Mutton Ghee Roast',
    subtitle: 'Cooked in pure desi ghee',
    tag: 'Desi Special',
    wide: false,
    tall: false,
  },
  {
    src: '/images/menu/chicken-afghani-tikka.jpg',
    alt: 'Chicken Afghani Tikka — Mild, Smoky & Irresistible',
    title: 'Chicken Afghani Tikka',
    subtitle: 'Creamy charcoal tandoori starter',
    tag: 'Tandoor Master',
    wide: false,
    tall: false,
  },
  {
    src: '/images/menu/fish-tikka.jpg',
    alt: 'Royal Fish Tikka — Gravity Defying Flavour Defining',
    title: 'Royal Fish Tikka',
    subtitle: 'Succulent fish in royal spices',
    tag: 'Seafood',
    wide: false,
    tall: false,
  },
  {
    src: '/images/menu/turkish-mutton.jpg',
    alt: 'Turkish Mutton Feast — Boneless, Authentic, Unforgettable',
    title: 'Turkish Mutton Feast',
    subtitle: 'Boneless • Authentic • Unforgettable',
    tag: '⭐ 5-Star Rated',
    wide: true,
    tall: false,
  },
];

// Tag color classes
const tagColors: Record<string, string> = {
  'Signature':       'bg-[#C9A84C] text-black',
  'Must Try':        'bg-red-700/90 text-white',
  'Fan Favourite':   'bg-[#C9A84C] text-black',
  'Seafood Special': 'bg-blue-700/90 text-white',
  'Ambiance':        'bg-emerald-700/90 text-white',
  'King of Raan':    'bg-[#C9A84C] text-black',
  'Desi Special':    'bg-amber-800/90 text-white',
  'Tandoor Master':  'bg-orange-700/90 text-white',
  'Seafood':         'bg-blue-700/90 text-white',
  '⭐ 5-Star Rated': 'bg-[#C9A84C] text-black',
};

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<{ src: string; title: string; subtitle?: string } | null>(null);
  const [filter, setFilter] = useState<'all' | 'food' | 'ambiance'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const filtered = filter === 'all'
    ? galleryImages
    : filter === 'ambiance'
      ? galleryImages.filter(img => img.tag === 'Ambiance')
      : galleryImages.filter(img => img.tag !== 'Ambiance');

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #090E1A 0%, #0B1222 50%, #060A13 100%)' }}
    >
      {/* Ambient decorative elements */}
      <div className="absolute top-0 left-0 right-0 gold-line-h" />
      <div className="blob-gold w-[500px] h-[500px] top-20 right-0 opacity-10 pointer-events-none" />
      <div className="blob-gold w-[400px] h-[400px] bottom-20 left-0 opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-diagonal opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="ornament" />
            <span className="text-xs font-body font-bold tracking-[4px] uppercase text-[#C9A84C]">Visual Feast</span>
            <span className="ornament-right" />
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 mb-4">
            A <span className="text-gradient italic">Glimpse</span> Inside
          </h2>
          <p className="reveal font-body text-stone-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From sizzling tandoor masterpieces to plated royal perfection — every dish, every moment, every memory captured.
          </p>
          <p className="reveal font-body text-[#C9A84C]/70 text-sm mt-2">
            🖼️ Click any image to view full size
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="reveal flex items-center justify-center gap-3 mb-10">
          {(['all', 'food', 'ambiance'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-xs font-body font-bold tracking-[2px] uppercase rounded-full border transition-all duration-300 ${
                filter === f
                  ? 'bg-[rgba(201,168,76,0.15)] border-[#C9A84C] text-[#F0D080] shadow-[0_0_15px_rgba(201,168,76,0.2)]'
                  : 'bg-transparent border-white/10 text-[#7A8AA0] hover:border-[#C9A84C]/40 hover:text-[#C9A84C]'
              }`}
            >
              {f === 'all' ? `🍽️ All (${galleryImages.length})` : f === 'food' ? '🔥 Food' : '🏛️ Ambiance'}
            </button>
          ))}
        </div>

        {/* ── Masonry-style Gallery Grid ── */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, idx) => (
            <div
              key={idx}
              className={`reveal gallery-item group relative overflow-hidden rounded-xl border border-white/[0.06] hover:border-[rgba(201,168,76,0.5)] transition-all duration-500 cursor-pointer break-inside-avoid ${
                img.tall ? 'h-[520px] gallery-tall' : img.wide ? 'h-[300px]' : 'h-[280px] sm:h-[300px]'
              }`}
              onClick={() => setLightbox({ src: img.src, title: img.title, subtitle: img.subtitle })}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
              />

              {/* Gradient overlay (always visible at bottom) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-400" />

              {/* Tag (top-left) */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className={`px-2.5 py-1 text-[10px] font-body font-bold tracking-wider rounded-full shadow-md ${tagColors[img.tag] || 'bg-black/70 text-white'}`}>
                  {img.tag}
                </span>
              </div>

              {/* Zoom Icon (top-right on hover) */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Title & Subtitle (bottom, always visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                <h4 className="font-heading text-base sm:text-lg font-bold text-white leading-tight drop-shadow-lg">
                  {img.title}
                </h4>
                <p className="font-body text-[11px] sm:text-xs text-[#C9A84C] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Gallery count bar ── */}
        <div className="reveal flex items-center justify-center gap-4 mt-10">
          <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35))' }} />
          <span className="text-xs font-body text-[#7A8AA0] tracking-wider">
            {filtered.length} photos • Mann O Salwa Restaurant
          </span>
          <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.35), transparent)' }} />
        </div>

        {/* ── Note ── */}
        <div className="reveal text-center mt-6">
          <p className="text-stone-500 text-sm font-body italic">
            Visit us to experience the live tandoor, open-air garden, and royal dining in person.
          </p>
        </div>

      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0A0E1A] border border-[rgba(201,168,76,0.4)] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(201,168,76,0.2)] bg-[#0C1222] shrink-0">
              <div>
                <h4 className="font-heading text-lg font-bold text-white">{lightbox.title}</h4>
                {lightbox.subtitle && (
                  <p className="text-xs font-body text-[#C9A84C]">{lightbox.subtitle}</p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-body text-stone-500 hidden sm:inline">Press ESC to close</span>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-all"
                  aria-label="Close lightbox"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="overflow-auto flex items-center justify-center bg-black/70 flex-1 p-3 sm:p-5">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[72vh] w-auto object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-[rgba(201,168,76,0.2)] bg-[#0C1222] flex items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-stone-500 font-body hidden sm:inline">
                Mann O Salwa Restaurant • The Royal Taste
              </span>
              <div className="flex items-center gap-2 ml-auto">
                <a
                  href="tel:+919714707576"
                  className="px-4 py-2 bg-[#C9A84C] text-black text-xs font-body font-bold rounded-lg uppercase tracking-wider hover:bg-[#dfb953] transition-all shadow-md"
                >
                  Reserve Table
                </a>
                <button
                  onClick={() => setLightbox(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-stone-300 text-xs font-body font-semibold rounded-lg transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
