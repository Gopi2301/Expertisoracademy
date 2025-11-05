import { FaWhatsapp } from "react-icons/fa6";
import Lottie from "lottie-react";
import { useState, useEffect, useRef, memo } from "react";
import mob_whatsapp_icon from '../../src/mob_whatsapp_icon.json'
import desk_whatsapp_icon from '../../src/desk_whatsapp_icon.json'

const WhatsAppButton = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
     <a href="https://wa.me/9363414353" target="blank" ref={containerRef}>
      <Lottie
        animationData={mob_whatsapp_icon}
        loop={true}
        autoplay={isVisible}
        className="w-full block sm:hidden"
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
          progressiveLoad: true,
        }}
      />

      <Lottie
        animationData={desk_whatsapp_icon}
        loop={true}
        autoplay={isVisible}
        className="w-full hidden sm:block"
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
          progressiveLoad: true,
        }}
      />
      </a>
  );
});

WhatsAppButton.displayName = 'WhatsAppButton';

export default WhatsAppButton;