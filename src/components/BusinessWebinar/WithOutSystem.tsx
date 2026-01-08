import React from 'react';

interface WithOutSystemProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  image?: string;
  cta?: string;
}

const WithOutSystem: React.FC<WithOutSystemProps> = ({
  title,
  highlight,
  subtitle,
  image,
  cta,
}) => {
  return (
    <div className="w-full py-16 px-4 flex flex-col items-center justify-center bg-black relative z-10">
        
      {/* Title Section */}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
        {title && highlight && title.includes(highlight) ? (
          <>
            <span className="text-[#FFEA00]">{highlight}</span>
            {title.replace(highlight, "")}
          </>
        ) : (
          title
        )}
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-sm md:text-lg mb-12 text-center max-w-2xl font-light">
        {subtitle}
      </p>

      {/* Image Container with CTA Overlay */}
      <div className="relative w-full max-w-5xl group">
        
        {/* The Card/Image Background */}
        <div className="w-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
             {image ? (
                <img
                  src={image}
                  alt="With vs Without System"
                  className="w-full h-auto object-cover opacity-90"
                />
             ) : (
                 <div className="w-full h-96 bg-gray-900 flex items-center justify-center text-gray-600">
                     Image Placeholder
                 </div>
             )}

             {/* Fade gradient at bottom */}
             <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
        </div>

        {/* CTA Button - Absolute positioned at bottom center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-max z-20">
          <button className="primary-btn-gradient hover:scale-105 transition-all duration-300 text-black font-bold py-3 md:py-4 px-8 md:px-12 rounded shadow-[0_0_20px_rgba(255,234,0,0.5)] cursor-pointer">
            {cta}
          </button>
        </div>

      </div>

    </div>
  );
};

export default WithOutSystem;