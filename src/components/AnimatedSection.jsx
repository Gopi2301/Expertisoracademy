import React from 'react';
import { motion } from 'framer-motion';
import { useAnimatedInView } from '../hooks/useAnimatedInView';
import { fadeInUp, reducedMotion } from '../utils/animationVariants';

/**
 * AnimatedSection - Scroll-triggered animation wrapper component
 * 
 * @param {React.ReactNode} children - Content to animate
 * @param {Object} variant - Animation variant (default: fadeInUp)
 * @param {number} delay - Animation delay in seconds
 * @param {string} className - Additional CSS classes
 * @param {Object} options - Intersection Observer options
 */
const AnimatedSection = ({
  children,
  variant = fadeInUp,
  delay = 0,
  className = '',
  options = {},
  ...props
}) => {
  const { ref, inView, prefersReducedMotion } = useAnimatedInView(options);

  // Use reduced motion variant if user prefers reduced motion
  const animationVariant = prefersReducedMotion ? reducedMotion : variant;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariant}
      transition={{
        ...animationVariant.visible.transition,
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

