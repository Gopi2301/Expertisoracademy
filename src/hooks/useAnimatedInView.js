import { useInView } from 'react-intersection-observer';

/**
 * Check if user prefers reduced motion
 */
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Custom hook for scroll-triggered animations
 * Combines Intersection Observer with reduced motion preferences
 */
export const useAnimatedInView = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true, rootMargin = '0px 0px -100px 0px' } = options;
  const reducedMotion = prefersReducedMotion();

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return {
    ref,
    inView: reducedMotion ? true : inView, // Skip animation if reduced motion
    prefersReducedMotion: reducedMotion,
  };
};

