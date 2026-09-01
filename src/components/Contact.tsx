import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../utils/useReveal';

export default function Contact() {
  const sectionRef = useReveal() as React.RefObject<HTMLDivElement>;
  const [form, setForm] = useState({ name: '', phone: '', date: '', guests: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);

    const msg = [
      `*New Table Reservation - Mann O Salwa*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.date    ? `*Date:* ${form.date}` : '',
      form.guests  ? `*Guests:* ${form.guests}` : '',
      form.message ? `*Special Request:* ${form.message}` : '',
    ].filter(Boolean).join('\n');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/919714707576?text=${encodeURIComponent(msg)}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 relative overflow-hidden" style={{ background: '#060A13' }}>
      <div className="absolute top-0 left-0 right-0 gold-line-h" />
      <div className="blob-gold w-[400px] h-[400px] top-0 right-0 opacity-20" />
      <div className="blob-navy w-[500px] h-[500px] bottom-0 left-0 opacity-60" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <span className="ornament" />
            <span className="text-xs font-body font-bold tracking-[4px] uppercase text-[#C9A84C]">Find Us</span>
            <span className="ornament-right" />
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 mb-4">
            Visit or <span className="text-gradient italic">Reserve</span>
          </h2>
          <p className="reveal font-body text-[#7A8AA0] max-w-lg mx-auto text-base">
            Walk in any time or call ahead for group reservations. We look forward to welcoming you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="reveal-left">
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 p-5 card-premium card-hover">
                <div className="icon-badge shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-stone-200 mb-1">Location</div>
                  <div className="font-body text-stone-400 text-sm leading-relaxed">
                    Ratanpur, Gujarat 387570<br />
                    <span className="text-stone-500 text-xs">PPR5+58 Ratanpur, Gujarat</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=PPR5%2B58+Ratanpur+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-500 hover:text-amber-300 transition-colors mt-1 inline-block font-body"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 card-premium card-hover">
                <div className="icon-badge shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-stone-200 mb-1">Phone</div>
                  <a href="tel:+919714707576" className="font-body text-amber-400 hover:text-amber-300 transition-colors font-semibold text-lg">
                    097147 07576
                  </a>
                  <div className="text-xs text-stone-500 font-body mt-0.5">Tap to call directly</div>
                </div>
              </div>

              <div className="flex gap-4 p-5 card-premium card-hover">
                <div className="icon-badge shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-body font-semibold text-stone-200 mb-1">Hours</div>
                  <div className="font-body text-stone-400 text-sm">
                    Open daily — Closes at <strong className="text-amber-400">1:00 AM</strong>
                  </div>
                  <div className="text-xs text-stone-500 font-body mt-0.5">Open for Dine-In & Drive-Through</div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-sm overflow-hidden h-56 relative" style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
              <iframe
                title="Mann O Salwa Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.0!2d72.7083!3d22.7404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ0JzE0LjUiTiA3MsKwNDInMzAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919714707576?text=Hi%2C%20I%27d%20like%20to%20make%20a%20reservation%20at%20Mann%20O%20Salwa"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-3 w-full py-3.5 bg-green-800/30 hover:bg-green-800/50 border border-green-700/40 hover:border-green-600/60 rounded-sm transition-all text-green-400 font-body font-semibold text-sm tracking-wide"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us for Reservations
            </a>
          </div>

          {/* Reservation Form Card */}
          <div className="reveal-right">
            <div className="card-premium p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="ornament" />
                <span className="text-[10px] font-body font-bold tracking-[3px] uppercase text-[#C9A84C]">Reservation</span>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-stone-100 mb-2">
                Reserve Your Table
              </h3>
              <p className="font-body text-[#7A8AA0] text-sm mb-6">
                Fill in the form and we will send your request via WhatsApp instantly.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-xl text-stone-100 mb-2">Thank You!</h4>
                  <p className="font-body text-stone-400 text-sm">
                    Your reservation request has been received. We will call you to confirm shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', date: '', guests: '', message: '' }); }}
                    className="mt-6 btn-outline text-sm"
                  >
                    Make Another Reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body font-semibold tracking-[2px] uppercase text-stone-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="w-full bg-stone-950 border border-stone-700 focus:border-amber-700 rounded-sm px-4 py-3 text-stone-200 font-body text-sm outline-none transition-colors placeholder-stone-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold tracking-[2px] uppercase text-stone-400 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 00000 00000"
                        className="w-full bg-stone-950 border border-stone-700 focus:border-amber-700 rounded-sm px-4 py-3 text-stone-200 font-body text-sm outline-none transition-colors placeholder-stone-600"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body font-semibold tracking-[2px] uppercase text-stone-400 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full bg-stone-950 border border-stone-700 focus:border-amber-700 rounded-sm px-4 py-3 text-stone-200 font-body text-sm outline-none transition-colors"
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold tracking-[2px] uppercase text-stone-400 mb-2">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full bg-stone-950 border border-stone-700 focus:border-amber-700 rounded-sm px-4 py-3 text-stone-200 font-body text-sm outline-none transition-colors"
                      >
                        <option value="">Select guests</option>
                        <option>1–2</option>
                        <option>3–4</option>
                        <option>5–8</option>
                        <option>9–15</option>
                        <option>16+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold tracking-[2px] uppercase text-stone-400 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any special dishes, dietary requirements, or occasion details..."
                      className="w-full bg-stone-950 border border-stone-700 focus:border-amber-700 rounded-sm px-4 py-3 text-stone-200 font-body text-sm outline-none transition-colors placeholder-stone-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Confirm Reservation'
                    )}
                  </button>

                  <p className="text-xs text-stone-600 font-body text-center">
                    Or call directly: <a href="tel:+919714707576" className="text-amber-600 hover:text-amber-400">097147 07576</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
