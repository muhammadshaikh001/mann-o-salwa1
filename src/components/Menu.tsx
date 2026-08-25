import { useEffect, useRef, useState } from 'react';

const categories = ['All', 'Starters', 'Tandoor', 'Mains', 'Specials', 'Desserts & Drinks'];

const menuItems = [
  // Starters
  {
    category: 'Starters',
    name: 'Hot and Sour Soup',
    desc: 'A classic tangy-spicy soup to warm up your palate, made with fresh vegetables and a rich broth.',
    price: '₹120',
    tag: '',
    img: 'https://images.pexels.com/photos/5409023/pexels-photo-5409023.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  {
    category: 'Starters',
    name: 'Kashmiri Fish',
    desc: 'Our signature dish — fresh fish marinated in Kashmiri spices and cooked to perfection. Guests call it unforgettable.',
    price: '₹280',
    tag: 'Signature',
    img: 'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  // Tandoor
  {
    category: 'Tandoor',
    name: 'Butter Tandoori',
    desc: 'Juicy chicken pieces marinated overnight and slow-cooked in our clay tandoor, finished with a butter glaze.',
    price: '₹320',
    tag: 'Chef\'s Pick',
    img: 'https://images.pexels.com/photos/29173119/pexels-photo-29173119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  {
    category: 'Tandoor',
    name: 'Lemon Tikka',
    desc: 'Tender chicken marinated in a citrusy spice blend — refreshingly bold and perfectly charred.',
    price: '₹290',
    tag: '',
    img: 'https://images.pexels.com/photos/29173114/pexels-photo-29173114.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  {
    category: 'Tandoor',
    name: 'Pineapple Tikka',
    desc: 'A tropical twist on the classic — sweet pineapple chunks marinated and grilled with aromatic spices.',
    price: '₹240',
    tag: 'Vegetarian',
    img: 'https://images.pexels.com/photos/36701471/pexels-photo-36701471.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  {
    category: 'Tandoor',
    name: 'Apple Tikka',
    desc: 'Unique and delightful — crisp apple pieces marinated in mildly spiced yogurt and grilled to caramelised perfection.',
    price: '₹220',
    tag: 'Vegetarian',
    img: 'https://images.pexels.com/photos/36701469/pexels-photo-36701469.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  // Mains
  {
    category: 'Mains',
    name: 'Murg Musallam',
    desc: 'A royal whole-chicken preparation slow-cooked with aromatic whole spices and a rich gravy. A true centerpiece.',
    price: '₹580',
    tag: 'Must Try',
    img: 'https://images.pexels.com/photos/30021858/pexels-photo-30021858.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  {
    category: 'Mains',
    name: 'Golden Leg',
    desc: 'Crispy golden-fried leg pieces with a secret spice rub — crunchy on the outside, succulent inside.',
    price: '₹340',
    tag: '',
    img: 'https://images.pexels.com/photos/29699526/pexels-photo-29699526.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  {
    category: 'Mains',
    name: 'Chicken Chizza',
    desc: 'A creative crowd-pleaser — crispy chicken base layered with cheese, veggies, and our house sauce.',
    price: '₹350',
    tag: 'Popular',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  // Specials
  {
    category: 'Specials',
    name: 'Mann O Salwa Platter',
    desc: 'Our iconic sharing platter — an assortment of tandoori grills, tikkas, and kebabs for the whole table.',
    price: '₹980',
    tag: 'Best Value',
    img: 'https://images.pexels.com/photos/29173111/pexels-photo-29173111.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  {
    category: 'Specials',
    name: 'Family Platter',
    desc: 'Generously portioned family feast with mixed grills, mains, and breads — perfect for 4 to 6 people.',
    price: '₹1,400',
    tag: 'Family Favourite',
    img: 'https://images.pexels.com/photos/18698236/pexels-photo-18698236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
  // Desserts & Drinks
  {
    category: 'Desserts & Drinks',
    name: 'Sitaphal Cream',
    desc: 'A local Gujarati favourite — smooth custard apple cream, chilled and served in a glass. Seasonal and delightful.',
    price: '₹140',
    tag: 'Seasonal',
    img: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400',
  },
];

const tagColors: Record<string, string> = {
  'Signature': 'bg-red-900/80 text-amber-300 border-red-700',
  "Chef's Pick": 'bg-amber-900/80 text-amber-300 border-amber-700',
  'Vegetarian': 'bg-green-900/80 text-green-300 border-green-700',
  'Must Try': 'bg-red-900/80 text-amber-300 border-red-700',
  'Popular': 'bg-amber-800/80 text-amber-200 border-amber-600',
  'Best Value': 'bg-amber-900/80 text-amber-300 border-amber-700',
  'Family Favourite': 'bg-stone-700/80 text-stone-200 border-stone-500',
  'Seasonal': 'bg-green-900/80 text-green-300 border-green-700',
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(m => m.category === activeCategory);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #060A13 0%, #0B1020 100%)' }}>
      {/* Gold separator */}
      <div className="absolute top-0 left-0 right-0 gold-line-h" />
      {/* Glow blobs */}
      <div className="blob-gold w-[450px] h-[450px] top-0 left-1/2 -translate-x-1/2 opacity-20" />
      <div className="absolute inset-0 bg-diagonal opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-5">
            <span className="ornament" />
            <span className="text-xs font-body font-bold tracking-[4px] uppercase text-[#C9A84C]">Our Kitchen</span>
            <span className="ornament-right" />
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-stone-100 mb-4">
            Menu <span className="text-gradient italic">Highlights</span>
          </h2>
          <p className="reveal font-body text-[#7A8AA0] max-w-xl mx-auto text-base leading-relaxed">
            A curated selection of our most-loved dishes. Ask your server for daily specials or the full menu.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-[10px] font-body font-bold tracking-[2.5px] uppercase rounded-sm border transition-all duration-300
                ${activeCategory === cat
                  ? 'bg-[rgba(201,168,76,0.12)] border-[rgba(201,168,76,0.55)] text-[#F0D080] shadow-[0_0_20px_rgba(201,168,76,0.1)]'
                  : 'bg-transparent border-[rgba(255,255,255,0.08)] text-[#7A8AA0] hover:border-[rgba(201,168,76,0.3)] hover:text-[#C9A84C]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.name} className="reveal card-premium group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover menu-img"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,10,19,0.8) 0%, transparent 60%)' }} />
                {item.tag && (
                  <span className={`absolute top-3 left-3 text-[9px] font-body font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-sm border backdrop-blur-sm ${tagColors[item.tag] || 'bg-stone-800/80 text-stone-300 border-stone-600'}`}>
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold text-stone-100 leading-snug group-hover:text-[#F0D080] transition-colors duration-300">{item.name}</h3>
                  <span className="font-heading text-lg font-bold text-gradient ml-2 shrink-0">{item.price}</span>
                </div>
                <p className="font-body text-sm text-[#7A8AA0] leading-relaxed">{item.desc}</p>
                <div className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-14">
          <p className="font-body text-[#7A8AA0] mb-5 text-sm">
            Full menu available at the restaurant — including daily specials &amp; seasonal items
          </p>
          <a href="tel:+919714707576" className="btn-outline">
            Call to Ask About Today's Specials
          </a>
        </div>
      </div>
    </section>
  );
}
