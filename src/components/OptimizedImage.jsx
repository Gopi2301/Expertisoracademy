import { useState, useEffect, useRef, memo } from 'react';

/**
 * OptimizedImage component that supports WebP with fallback
 * Automatically uses WebP if supported, falls back to original format
 */
const OptimizedImage = memo(({ 
  src, 
  webpSrc, 
  alt, 
  className, 
  loading = 'lazy',
  decoding = 'async',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  const webpSupported = useRef(null);

  // Check WebP support once
  useEffect(() => {
    if (webpSupported.current === null) {
      const webp = new Image();
      webp.onload = webp.onerror = () => {
        webpSupported.current = webp.height === 2;
      };
      webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading !== 'lazy' || !imgRef.current) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
      observer.disconnect();
    };
  }, [loading]);

  // Set source based on WebP support
  useEffect(() => {
    if (!isInView) return;

    if (webpSupported.current === true && webpSrc) {
      setImgSrc(webpSrc);
    } else {
      setImgSrc(src);
    }
  }, [isInView, src, webpSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to original if WebP fails
    if (imgSrc === webpSrc && src) {
      setImgSrc(src);
    }
  };

  return (
    <img
      ref={imgRef}
      src={isInView ? imgSrc : undefined}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        ...props.style,
      }}
      {...props}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;

