import { useState, useEffect } from 'react';

interface Props {
  onClose: () => void;
}

const WHATSAPP_NUMBER = '919714707576';

export default function ReserveModal({ onClose }: Props) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);

    // Build WhatsApp message
    const msg = [
      `*New Table Reservation - Mann O Salwa*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.date   ? `*Date:* ${form.date}` : '',
      form.time   ? `*Time:* ${form.time}` : '',
      form.guests ? `*Guests:* ${form.guests}` : '',
      form.message ? `*Special Request:* ${form.message}` : '',
    ].filter(Boolean).join('\n');

    const wsUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(wsUrl, '_blank');
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(4, 7, 14, 0.88)', backdropFilter: 'blur(12px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-sm"
        style={{
          background: 'linear-gradient(145deg, #0F1628 0%, #111D34 100%)',
          border: '1px solid rgba(201,168,76,0.25)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.1)',
        }}
      >
        {/* Gold top accent */}
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="ornament" />
                <span className="text-[10px] font-body font-bold tracking-[3px] uppercase text-[#C9A84C]">Mann O Salwa</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-stone-100">
                Reserve Your <span className="text-gradient italic">Table</span>
              </h2>
              <p className="font-body text-xs text-[#7A8AA0] mt-1">
                Fill the form — we'll confirm via WhatsApp instantly
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 shrink-0 w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#7A8AA0' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {submitted ? (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)' }}>
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-stone-100 mb-2">Reservation Sent!</h3>
              <p className="font-body text-sm text-[#7A8AA0] mb-1">
                WhatsApp opened with your details.
              </p>
              <p className="font-body text-xs text-[#C9A84C] mb-6">
                We'll confirm your table shortly on <strong>097147 07576</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', date: '', time: '', guests: '', message: '' }); }}
                  className="btn-outline text-xs"
                >
                  New Reservation
                </button>
                <button onClick={onClose} className="btn-primary text-xs">
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-body font-bold tracking-[2px] uppercase mb-2" style={{ color: '#7A8AA0' }}>
                    Your Name <span className="text-[#C9A84C]">*</span>
                  </label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    required placeholder="Full Name"
                    className="w-full rounded-sm px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                    style={{ background: 'rgba(6,10,19,0.8)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0E8D0' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-body font-bold tracking-[2px] uppercase mb-2" style={{ color: '#7A8AA0' }}>
                    Phone <span className="text-[#C9A84C]">*</span>
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    required placeholder="+91 00000 00000"
                    className="w-full rounded-sm px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                    style={{ background: 'rgba(6,10,19,0.8)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0E8D0' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-body font-bold tracking-[2px] uppercase mb-2" style={{ color: '#7A8AA0' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date" name="date" value={form.date} onChange={handleChange}
                    className="w-full rounded-sm px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                    style={{ background: 'rgba(6,10,19,0.8)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0E8D0', colorScheme: 'dark' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-body font-bold tracking-[2px] uppercase mb-2" style={{ color: '#7A8AA0' }}>
                    Preferred Time
                  </label>
                  <select
                    name="time" value={form.time} onChange={handleChange}
                    className="w-full rounded-sm px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                    style={{ background: 'rgba(6,10,19,0.8)', border: '1px solid rgba(255,255,255,0.08)', color: form.time ? '#F0E8D0' : '#5A6A80' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  >
                    <option value="">Select time</option>
                    <option>12:00 PM – 2:00 PM (Lunch)</option>
                    <option>7:00 PM – 9:00 PM (Dinner)</option>
                    <option>9:00 PM – 11:00 PM (Late Dinner)</option>
                    <option>11:00 PM – 1:00 AM (Late Night)</option>
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-[10px] font-body font-bold tracking-[2px] uppercase mb-2" style={{ color: '#7A8AA0' }}>
                  Number of Guests
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {['1–2', '3–4', '5–8', '9–15', '16+'].map((g) => (
                    <button
                      key={g} type="button"
                      onClick={() => setForm({ ...form, guests: g })}
                      className="py-2.5 rounded-sm font-body text-xs font-semibold transition-all duration-200"
                      style={{
                        background: form.guests === g ? 'rgba(201,168,76,0.15)' : 'rgba(6,10,19,0.8)',
                        border: `1px solid ${form.guests === g ? 'rgba(201,168,76,0.6)' : 'rgba(255,255,255,0.08)'}`,
                        color: form.guests === g ? '#F0D080' : '#7A8AA0',
                      }}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Request */}
              <div>
                <label className="block text-[10px] font-body font-bold tracking-[2px] uppercase mb-2" style={{ color: '#7A8AA0' }}>
                  Special Request
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  rows={3} placeholder="Special dishes, occasion, dietary requirements..."
                  className="w-full rounded-sm px-4 py-3 font-body text-sm outline-none transition-all duration-200 resize-none"
                  style={{ background: 'rgba(6,10,19,0.8)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0E8D0' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              {/* Submit */}
              <button
                type="submit" disabled={loading || !form.name || !form.phone}
                className="btn-primary w-full flex items-center justify-center gap-2.5"
                style={{ opacity: !form.name || !form.phone ? 0.5 : 1 }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending to WhatsApp...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Confirm via WhatsApp
                  </>
                )}
              </button>

              <p className="text-center font-body text-[10px] tracking-wide" style={{ color: '#3A4A5A' }}>
                Or call directly:{' '}
                <a href="tel:+919714707576" className="transition-colors" style={{ color: '#C9A84C' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#F0D080')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#C9A84C')}>
                  097147 07576
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
