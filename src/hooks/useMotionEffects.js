import { useEffect } from 'react';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const useMotionEffects = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
    const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;
      const viewportCenter = window.innerHeight / 2;

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const speed = Number(item.dataset.parallax) || 0.06;
        const offset = clamp((viewportCenter - itemCenter) * speed, -56, 56);

        item.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
      });
    };

    const requestUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);
};

export default useMotionEffects;
