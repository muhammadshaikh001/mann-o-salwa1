import { useReveal } from '../utils/useReveal';

interface Props {
  onReserve?: () => void;
}

export default function FinalCTA({ onReserve }: Props) {
  const sectionRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37113985/pexels-photo-37113985.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=1920"
          alt="Chef grilling at Mann O Salwa"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/95" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="reveal flex items-center justify-center gap-3 mb-6">
          <span className="ornament" />
          <span className="text-xs font-body font-semibold tracking-[4px] uppercase text-amber-500">Come Dine With Us</span>
          <span className="ornament-right" />
        </div>

        <h2 className="reveal font-heading text-4xl md:text-6xl font-bold text-stone-100 leading-tight mb-6">
          Your Next <span className="text-gradient">Favourite Meal</span><br />
          is Waiting
        </h2>

        <p className="reveal font-body text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          From sizzling tandoori grills to rich family platters — Mann O Salwa is where every occasion 
          becomes a memory. Open till 1 AM, every day, right here in Ratanpur.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="tel:+919714707576" className="btn-primary pulse-gold inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call 097147 07576
          </a>
          <button onClick={onReserve} className="btn-outline">
            Reserve a Table
          </button>
        </div>

        <div className="reveal divider-gold max-w-xs mx-auto mb-8" />

        <div className="reveal flex flex-wrap justify-center gap-8 text-sm font-body text-stone-400">
          <div className="flex items-center gap-2">
            <span className="text-amber-500">📍</span>
            Ratanpur, Gujarat 387570
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500">🕐</span>
            Open till 1 AM Daily
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-500">⭐</span>
            4.5 on Google · 265 Reviews
          </div>
        </div>
      </div>
    </section>
  );
}
