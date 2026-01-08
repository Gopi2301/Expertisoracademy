
import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";

interface CtaProps {
  title: string;
  titleHighlight: string;
  label: string;
  subtitle: string;
  subtitleHighlight: string;
  buttonText: string;
  disclaimer: string;
  image: string;
}

const Cta = ({
  title,
  titleHighlight,
  label,
  subtitle,
  subtitleHighlight,
  buttonText,
  disclaimer,
  image,
}: CtaProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 10,
    minutes: 30,
    seconds: 15,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
            // Reset or stop
           return { days: 4, hours: 10, minutes: 30, seconds: 15 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  const HighlightText = ({ text, highlight }: { text: string; highlight: string }) => {
    if (!highlight) return <>{text}</>;
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-[#FCEE21]">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="w-full pt-20 pb-0 px-5 md:px-20 relative overflow-hidden" style={{ background: "linear-gradient(to top, #A38200 5%, #00000000 50%)" }}>
      {/* Background Gradient Effect - approximated from image */}
      <div className="absolute inset-0  opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                <HighlightText text={title} highlight={titleHighlight} />
            </h2>

            <div className="font-clash flex flex-wrap lg:flex-nowrap items-center gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                    <div className="relative leading-none">
                       <span className="text-[80px] md:text-[100px] lg:text-[120px] font-black italic bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-[#FFF200] via-[#FFFA89] to-[#FFF200] text-transparent bg-clip-text" style={{ fontFamily: 'sans-serif' }}>2</span>
                       <span className="absolute bottom-4 right-1 text-2xl md:text-3xl font-bold italic text-[#FCEE21] tracking-tighter transform -skew-x-12">HR</span>
                    </div>
                    
                    <div className="flex flex-col justify-center h-full pt-2">
                        <div className="flex items-center gap-3 mb-[-5px]">
                            <span className="text-3xl md:text-4xl font-black italic tracking-wider bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-[#FFFFBE] via-[#FCEE21] to-[#D4C811] text-transparent bg-clip-text transform -skew-x-12">LIVE</span>
                            {/* Broadcasting Icon */}
                            <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                                <circle cx="25" cy="15" r="5" fill="#FF0000" />
                                <path d="M18 8C16 10 16 12 16 15C16 18 16 20 18 22" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" />
                                <path d="M32 8C34 10 34 12 34 15C34 18 34 20 32 22" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" />
                                <path d="M12 4C8 8 8 12 8 15C8 18 8 22 12 26" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" />
                                <path d="M38 4C42 8 42 12 42 15C42 18 42 22 38 26" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="text-4xl md:text-5xl font-black italic tracking-widest bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-[#FFF200] via-[#FFFA89] to-[#FFF200] text-transparent bg-clip-text transform -skew-x-12">PROCLASS</span>
                    </div>
                </div>

                {/* Timer Pill */}
                <div className="flex items-center gap-2 bg-white/5 rounded-full p-[10px] shadow-[inset_0px_0px_12px_0px_rgba(255,255,255,0.15)] backdrop-blur-sm shrink-0">
                    <div className="text-[#FCEE21]">
                        {/* Clock Icon SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                             <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                    </div>
                    <div className="text-white font-mono text-sm md:text-base">
                        <span className="text-white mr-2">Ends in</span>
                        <span className="text-red-500 font-bold">{formatTime(timeLeft.days)}d</span> :{" "}
                        <span className="text-red-500 font-bold">{formatTime(timeLeft.hours)}h</span> :{" "}
                        <span className="text-red-500 font-bold">{formatTime(timeLeft.minutes)}m</span> :{" "}
                        <span className="text-red-500 font-bold">{formatTime(timeLeft.seconds)}s</span>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <p className="text-xl text-gray-300">
                     <HighlightText text={subtitle} highlight={subtitleHighlight} />
                </p>

                <button className="bg-[#FCEE21] hover:bg-[#e6d81e] text-black font-bold font-inter text-lg px-8 py-4 rounded-lg transform transition hover:scale-105 duration-200">
                    {buttonText}
                </button>

                 <p className="text-sm text-yellow-500/80 italic">
                    {disclaimer}
                </p>
            </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end lg:self-end">
             <div className="relative">
                {/* Image Decoration - Circuit background effect could go here behind image if needed, for now just the image */}
                 <img 
                    src={image} 
                    alt="Speaker" 
                    className="w-full max-w-[600px] object-contain relative z-10"
                 />
             </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;