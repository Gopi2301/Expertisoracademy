import React from "react";

// Actually LeadGenCard used MUI Button, so I will stick to it for the CTA to be safe, or just use a styled button.
// The image shows a yellow button. I'll style it to match.

interface LearnSectionProps {
  title: string;
  highlightWord: string;
  subtitle: string;
  list: string[];
  cta: string;
  image: string;
}

const LearnSection: React.FC<LearnSectionProps> = ({
  title,
  highlightWord,
  subtitle,
  list,
  cta,
  image,
}) => {
  // Helper to highlight specific word in title
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(new RegExp(`(${highlightWord})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlightWord.toLowerCase() ? (
            <span key={i} className="text-[#FFE500]">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="w-full bg-red py-16 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-clash mb-4">
            {renderTitle()}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">{subtitle}</p>
        </div>

        {/* Content Section */}
        <div className="flex max-h-[400px]flex-col md:flex-row gap-12 justify-center items-center">
          {/* Left Column: Image */}
          <div className="">
            {/* Placeholder for the image if not provided, or use the provided image prop */}
            <div className="rounded-2xl overflow-hidden border border-gray-800 relative z-10">
               {/* Use the uploaded image behavior or placeholder if empty */}
               <img 
                 src={image || "https://placehold.co/600x600/1a1a1a/FFF?text=Instructor+Image"} 
                 alt="Instructor" 
                 className="w-full h-full object-contain"
               />
            </div>
          </div>

          {/* Right Column: List & CTA */}
          <div className="relative">
            {/* Vertical Line for Timeline Effect */}
            {/* Positioned absolutely relative to the container. 
                left-4 is 1rem (16px), which is exactly the center of the w-8 (32px) icon container.
                top-4 is the center of the first star (approx).
            */}
            <div className="absolute left-4 top-4 bottom-16 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#FFE500] via-gray-800 to-transparent opacity-80"></div>

            <ul className="space-y-10 relative z-10">
              {list?.map((item, index) => {
                const isActive = index === 0;
                return (
                  <li key={index} className="flex items-start gap-6 group">
                    {/* Icon/Marker Container - Fixed width to align line perfectly */}
                    <div className="relative flex-shrink-0 w-8 flex justify-center bg-black z-10">
                      {isActive ? (
                        <div className="w-8 h-8 flex items-center justify-center relative">
                           {/* Glow effect */}
                           <div className="absolute inset-0 bg-yellow-400 blur-md opacity-50 rounded-full"></div>
                           {/* Star Icon Active */}
                           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFE500" stroke="#FFE500" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </div>
                      ) : (
                        <div className="w-8 h-8 flex items-center justify-center">
                           {/* Star Icon Inactive */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#3D3D3D" stroke="#3D3D3D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                        </div>
                      )}
                    </div>

                    {/* Text */}
                    <div className={`text-xl md:text-2xl font-medium pt-0.5 ${isActive ? "text-[#FFE500]" : "text-gray-500"}`}>
                      {item}
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <div className="mt-12 pl-14">
              <button className="primary-btn-gradient hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg w-full transition-colors duration-300 transform hover:scale-[1.02]">
                {cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;