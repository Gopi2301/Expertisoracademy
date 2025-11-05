import React, { useState, useEffect, useRef, memo } from 'react';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import {
  getRecommendedAnimationQuality,
  shouldReduceAnimations,
  getDeviceCapabilities,
} from '../utils/deviceCapabilities';

/**
 * AdaptiveLottie - Smart Lottie wrapper that adjusts quality based on device capabilities
 * 
 * @param {Object} animationData - Lottie animation JSON data
 * @param {string} className - CSS classes
 * @param {boolean} autoplay - Whether to autoplay (default: true)
 * @param {boolean} loop - Whether to loop (default: true)
 * @param {Object} rendererSettings - Custom renderer settings
 * @param {Object} options - Additional options
 */
const AdaptiveLottie = memo(({
  animationData,
  className = '',
  autoplay = true,
  loop = true,
  rendererSettings = {},
  options = {},
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldPause, setShouldPause] = useState(false);
  const lottieRef = useRef(null);
  const prefersReducedMotion = shouldReduceAnimations();

  // Intersection Observer for viewport visibility
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: false,
  });

  // Get device capabilities
  const deviceCapabilities = getDeviceCapabilities();
  const recommendedQuality = getRecommendedAnimationQuality();

  useEffect(() => {
    setIsVisible(inView);
    setShouldPause(!inView);
  }, [inView]);

  // Pause when page is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setShouldPause(true);
      } else if (isVisible) {
        setShouldPause(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVisible]);

  // Control animation playback
  useEffect(() => {
    if (!lottieRef.current) return;

    if (shouldPause || prefersReducedMotion) {
      lottieRef.current.pause();
    } else if (autoplay && isVisible) {
      lottieRef.current.play();
    }
  }, [shouldPause, prefersReducedMotion, autoplay, isVisible]);

  // Optimized renderer settings based on device
  const optimizedRendererSettings = {
    preserveAspectRatio: 'xMidYMid slice',
    progressiveLoad: true,
    renderer: 'svg',
    rendererSettings: {
      viewBoxOnly: deviceCapabilities.performanceLevel === 'low',
      hideOnTransparent: true,
      className: 'lottie-animation',
      ...rendererSettings,
    },
  };

  // Don't render if reduced motion is preferred
  if (prefersReducedMotion && !options.alwaysRender) {
    return null;
  }

  return (
    <div ref={ref} className={className} style={{ contain: 'layout style paint' }}>
      {isVisible && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          autoplay={autoplay && !shouldPause && !prefersReducedMotion}
          loop={loop}
          rendererSettings={optimizedRendererSettings.rendererSettings}
          style={{
            width: '100%',
            height: '100%',
            willChange: 'opacity',
          }}
          {...props}
        />
      )}
    </div>
  );
});

AdaptiveLottie.displayName = 'AdaptiveLottie';

export default AdaptiveLottie;

