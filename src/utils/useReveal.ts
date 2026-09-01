import { useEffect, useRef } from 'react';

/**
 * useReveal — IntersectionObserver hook for reveal animations.
 * Works correctly with React.lazy() loaded components that are
 * already in the viewport when they first mount.
 */
export function useReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const triggerReveals = (target: Element) => {
      target
        .querySelectorAll('.reveal, .reveal-left, .reveal-right, .stat-item')
        .forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 40);
        });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerReveals(entry.target);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '200px 0px', // Fire 200px BEFORE element enters viewport
      }
    );

    const el = sectionRef.current;
    if (el) {
      observer.observe(el);

      // ── Fallback for React.lazy(): if already in viewport on mount ──
      const rect = el.getBoundingClientRect();
      const alreadyInView = rect.top < window.innerHeight + 200;
      if (alreadyInView) {
        setTimeout(() => triggerReveals(el), 80);
      }
    }

    return () => observer.disconnect();
  }, []);

  return sectionRef;
}
