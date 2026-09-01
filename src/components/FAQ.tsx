import { useState } from 'react';
import { useReveal } from '../utils/useReveal';

const faqs = [
  {
    q: 'What are your opening hours?',
    a: 'We are open every day and close at 1 AM. We recommend calling ahead for large group reservations to ensure seating availability. Popular times are evenings, especially on weekends.',
  },
  {
    q: 'Do you offer a drive-through option?',
    a: 'Yes! Mann O Salwa is one of the very few restaurants in the Ratanpur area offering a drive-through service. You can order and pick up your food without needing to park and come inside.',
  },
  {
    q: 'Can I pre-book a Raan (whole leg of lamb)?',
    a: 'Absolutely. The Raan is one of our most celebrated dishes and can be pre-booked in advance. We recommend calling us at least a day ahead to ensure it is prepared fresh for your visit.',
  },
  {
    q: 'Do you have seating for large families or groups?',
    a: 'Yes, our restaurant has spacious seating arrangements designed for families and groups. We also have a kids-friendly area. For groups of 10 or more, we suggest calling ahead to arrange seating.',
  },
  {
    q: 'What is the average cost per person?',
    a: 'Most guests spend between \u20b9400 and \u20b9600 per person, as reported by our guests. Our family and sharing platters offer excellent value for groups. Prices may vary based on your selection.',
  },
  {
    q: 'Do you have vegetarian options?',
    a: 'Yes, we do. Our menu includes vegetarian tandoori items like Pineapple Tikka, Apple Tikka, and other specialties. Please ask your server for the full vegetarian selection.',
  },
  {
    q: 'How do I make a reservation or enquiry?',
    a: 'You can call us directly at 097147 07576. You can also send a WhatsApp message and we will get back to you promptly. Walk-ins are always welcome, subject to availability.',
  },
  {
    q: 'Where are you located?',
    a: 'We are located in Ratanpur, Gujarat 387570. Our Google Maps reference code is PPR5+58 Ratanpur. You can use Google Maps to navigate directly to us.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useReveal() as React.RefObject<HTMLDivElement>;

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-surface relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="ornament" />
            <span className="text-xs font-body font-semibold tracking-[4px] uppercase text-amber-500">Quick Answers</span>
            <span className="ornament-right" />
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-bold text-stone-100 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="reveal font-body text-stone-400 text-base">
            Everything you need to know before your visit
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="reveal bg-card border border-stone-800/60 rounded-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span className="font-body font-semibold text-stone-200 text-base group-hover:text-amber-400 transition-colors pr-4">
                  {faq.q}
                </span>
                <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-stone-700 text-amber-500 transition-all duration-300 ${
                  open === idx ? 'rotate-45 bg-red-900/50 border-red-700' : 'group-hover:border-amber-700/50'
                }`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-400 ease-in-out overflow-hidden ${
                open === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="font-body text-stone-400 text-sm leading-relaxed px-6 pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <p className="text-stone-500 font-body text-sm mb-4">Still have questions? We are happy to help.</p>
          <a href="tel:+919714707576" className="btn-primary">
            Call Us: 097147 07576
          </a>
        </div>
      </div>
    </section>
  );
}
