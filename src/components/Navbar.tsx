import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

interface Props {
  onReserve?: () => void;
}

export default function Navbar({ onReserve }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('section[id]').forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled py-3' : 'py-5'
      }`}
      style={!scrolled ? { background: 'linear-gradient(to bottom, rgba(6,10,19,0.7) 0%, transparent 100%)', backdropFilter: 'blur(0px)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A84C]/60 group-hover:border-[#F0D080] transition-all duration-300 shadow-lg shadow-black/40 group-hover:shadow-[#C9A84C]/20">
            <img
              src="/images/mann-o-salwa-logo.png"
              alt="Mann O Salwa Logo"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div>
            <span className="font-heading text-xl font-semibold tracking-wide text-gradient leading-none">
              Mann O Salwa
            </span>
            <p className="text-[10px] tracking-[3px] text-[#C9A84C]/70 uppercase font-body font-light leading-none mt-0.5">
              Taste That Feels Royal
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`text-xs font-body font-semibold tracking-[2px] uppercase transition-colors duration-200 relative group
                ${activeSection === link.href.slice(1)
                  ? 'text-[#F0D080]'
                  : 'text-stone-300 hover:text-[#C9A84C]'
                }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300
                ${activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}
              />
            </a>
          ))}
          <button
              onClick={onReserve}
              className="btn-primary text-xs py-2.5 px-5"
            >
              Reserve Now
            </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#070B14]/98 border-t border-[#C9A84C]/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-xs font-body font-semibold tracking-[2px] uppercase text-stone-300 hover:text-[#F0D080] transition-colors py-2 border-b border-[#1E2E50]/60"
            >
              {link.label}
            </a>
          ))}
          <button
              onClick={() => { setIsOpen(false); onReserve?.(); }}
              className="btn-primary text-center mt-2"
            >
              Reserve Now
            </button>
        </div>
      </div>
    </nav>
  );
}
