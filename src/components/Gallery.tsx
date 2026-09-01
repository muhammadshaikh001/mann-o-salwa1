import { useEffect, useRef } from 'react';

const galleryImages = [
  {
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Chicken Dominoes — crispy cheesy tower with signature sauce',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Mann O Salwa outdoor garden ambiance at night',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/gallery-4.jpg',
    alt: 'Dehati Mutton in Desi Ghee — slow cooked perfection',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Paneer Tikka Dry — grilled to perfection on sizzler',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery/gallery-5.jpg',
    alt: 'Mann O Salwa grand food spread with restaurant view',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="ornament" />
            <span className="text-xs font-body font-semibold tracking-[4px] uppercase text-amber-500">Visual Feast</span>
            <span className="ornament-right" />
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-bold text-stone-100 mb-4">
            A <span className="text-gradient">Glimpse</span> Inside
          </h2>
          <p className="reveal font-body text-stone-400 max-w-lg mx-auto text-base">
            From sizzling skewers to plated perfection — a visual taste of what awaits you.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`reveal gallery-item rounded-sm overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="overlay">
                <div className="text-center">
                  <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white text-xs font-body tracking-wider">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="reveal text-center mt-8">
          <p className="text-stone-500 text-sm font-body italic">
            Visit us to see the full ambiance and live tandoor experience in person
          </p>
        </div>
      </div>
    </section>
  );
}
