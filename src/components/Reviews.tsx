import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'Pathan Arshad Khan',
    role: 'Local Guide · 35 reviews',
    rating: 5,
    date: '2 months ago',
    text: 'I tried several dishes here, and every item was excellent. The Kulhad Tandoori was absolutely delicious, nalli good for mutton lover, and the Kashmiri Fish was amazing — so good! I have never tasted fish like that before.',
    highlight: 'Kashmiri Fish',
    avatar: 'P',
  },
  {
    name: 'Tosif Shaikh',
    role: 'Local Guide · 12 reviews',
    rating: 5,
    date: '2 months ago',
    text: 'Its my first experience to have a raan and trust this is the most memorable experience from booking it from home till eating it. Exceptional service from start to finish.',
    highlight: 'Raan',
    avatar: 'T',
  },
  {
    name: 'Minhaj Vohra',
    role: '3 reviews',
    rating: 5,
    date: '4 months ago',
    text: 'Food Quality And Quantity Are Good. Very Nice Service And Atmosphere Are Awesome. Would highly recommend visiting if you are in Ratanpur.',
    highlight: 'Ambiance',
    avatar: 'M',
  },
  {
    name: 'Sakina Mansuri',
    role: 'Local Guest',
    rating: 5,
    date: '3 months ago',
    text: 'Mann o Salwa is really good place with nice sitting arrangements and tasty food. Staff who was serving was really well mannered and accomplished in his work.',
    highlight: 'Service',
    avatar: 'S',
  },
  {
    name: 'Rizwan Ahmed',
    role: 'Regular Guest',
    rating: 5,
    date: '1 month ago',
    text: 'Food, service, atmosphere and rate — all are fantastic. This is our family go-to restaurant now. The family platter is absolutely worth it for groups.',
    highlight: 'Family Platter',
    avatar: 'R',
  },
  {
    name: 'Fatema Patel',
    role: '7 reviews',
    rating: 4,
    date: '5 months ago',
    text: 'Tried the pineapple tikka and butter tandoori — both were incredible. Clean restaurant, pleasant ambiance, and the food comes fresh and hot. Will be back.',
    highlight: 'Tikka',
    avatar: 'F',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-stone-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const avatarColors = ['bg-red-900', 'bg-amber-900', 'bg-stone-700', 'bg-red-800', 'bg-amber-800', 'bg-stone-800'];

  return (
    <section id="reviews" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0F0A05' }}>
      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-900 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <span className="ornament" />
            <span className="text-xs font-body font-semibold tracking-[4px] uppercase text-amber-500">Guest Voices</span>
            <span className="ornament-right" />
          </div>
          <h2 className="reveal font-heading text-4xl md:text-5xl font-bold text-stone-100 mb-4">
            What Our Guests <span className="text-gradient">Are Saying</span>
          </h2>
          <div className="reveal flex items-center justify-center gap-4 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < 4 ? 'text-amber-400' : 'text-amber-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-heading text-2xl font-bold text-gradient">4.5</span>
            <span className="text-stone-400 font-body text-sm">based on 265+ Google Reviews</span>
          </div>
        </div>

        {/* Featured Review Carousel */}
        <div className="reveal relative max-w-3xl mx-auto mb-14">
          <div className="bg-card border border-amber-900/30 rounded-sm p-8 md:p-12 relative">
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-8xl text-red-900/30 font-heading leading-none select-none">"</div>
            <div className="relative z-10">
              <StarRating count={reviews[current].rating} />
              <p className="font-body text-stone-200 text-lg leading-relaxed mt-4 mb-6 italic">
                "{reviews[current].text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${avatarColors[current]} flex items-center justify-center text-amber-300 font-heading font-bold text-lg`}>
                    {reviews[current].avatar}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-stone-200">{reviews[current].name}</div>
                    <div className="text-xs text-stone-500 font-body">{reviews[current].role} · {reviews[current].date}</div>
                  </div>
                </div>
                <span className="text-xs font-body font-bold tracking-[2px] uppercase px-3 py-1.5 bg-amber-900/30 text-amber-400 border border-amber-800/30 rounded-sm">
                  {reviews[current].highlight}
                </span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2 bg-amber-500' : 'w-2 h-2 bg-stone-600 hover:bg-stone-500'
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {reviews.map((review, idx) => (
            <div
              key={review.name}
              className="reveal card-hover bg-card border border-stone-800/60 rounded-sm p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating count={review.rating} />
                <span className="text-xs text-stone-500 font-body">{review.date}</span>
              </div>
              <p className="font-body text-stone-400 text-sm leading-relaxed mb-4 line-clamp-3">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${avatarColors[idx]} flex items-center justify-center text-amber-300 font-heading font-bold`}>
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-body font-semibold text-stone-300">{review.name}</div>
                  <div className="text-xs text-stone-600 font-body">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="reveal text-center">
          <p className="text-stone-400 font-body text-sm mb-4">
            Read all 265+ reviews or share your own experience on Google
          </p>
          <a
            href="https://maps.google.com/?q=Mann+O+Salwa+Ratanpur+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Write a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}
