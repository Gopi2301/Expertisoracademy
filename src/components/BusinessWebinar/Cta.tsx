
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
                    <div className="relative leading-none pr-4">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 64" fill="none" className="h-[80px] md:h-[110px] lg:h-[140px] w-auto">
                          <path fillRule="evenodd" clipRule="evenodd" d="M26.876 63.7308H25.0176L27.4896 52.7801H29.3479L26.876 63.7308ZM29.2953 63.7308H31.7498L31.6797 63.218C31.6797 62.9188 31.7498 62.5342 31.855 62.0642L32.1705 60.6046L32.2582 59.9801C32.2582 59.8059 32.2231 59.6645 32.153 59.5571L31.9952 59.4026C31.8199 59.2963 31.5219 59.2427 31.0836 59.2427H30.2947L29.2953 63.7308ZM34.0815 63.7308H36.4483L38.78 52.7801H34.2217C34.4672 52.8842 34.7126 53.0189 34.9055 53.1833C35.449 53.6325 35.7295 54.2363 35.7295 54.9945V55.1852L35.6243 55.8284L35.5717 56.053C35.4314 56.683 35.2035 57.1586 34.9055 57.4796C34.6074 57.7897 34.1516 58.0406 33.5029 58.2324C34.2568 58.468 34.6425 59.018 34.6425 59.9154C34.6425 60.1828 34.5899 60.5301 34.5022 60.9575L34.2042 62.2723C34.0815 62.7315 34.0289 63.0898 34.0289 63.3462L34.0815 63.7308ZM23.6502 59.018L22.6158 63.7308H20.1789L21.2308 59.018H23.6502ZM20.2315 52.7801L17.7771 63.7308H0L2.15639 53.3181C3.0505 49.1302 4.8212 45.4496 7.45094 42.2775C10.0281 39.1065 14.2707 35.7853 20.1964 32.3141C25.9994 28.9031 29.9791 26.0903 32.1355 23.877C34.1691 21.8422 35.186 19.4481 35.186 16.6956C35.186 12.866 33.2049 10.9507 29.2603 10.9507C25.491 10.9507 23.1067 13.0753 22.0899 17.3245L20.8276 23.0683H8.80088L10.2385 15.9779C12.5001 5.32633 19.0919 0 29.9791 0C33.1698 0 35.9574 0.45911 38.3767 1.37733C40.1124 2.03148 41.6376 2.91902 42.9876 4.03885C46.2835 6.73215 47.9315 10.5617 47.9315 15.5286C47.9315 20.2567 46.3186 24.5651 43.0927 28.4549C39.7968 32.2845 33.9237 36.7726 25.491 41.9192C21.1782 44.492 18.4959 46.3175 17.4089 47.3946C16.2694 48.5308 15.533 49.9082 15.1649 51.5233L14.9019 52.7801H20.2315ZM21.6691 57.0633L22.6509 52.7801H25.0702L24.0885 57.0633H21.6691ZM31.3641 54.4664L30.7329 57.2868H31.3991C32.3984 57.2868 32.977 56.8912 33.1523 56.1012L33.275 55.5884L33.3101 55.2509C33.3101 54.7283 32.9945 54.4664 32.3634 54.4664H31.3641Z" fill="url(#paint0_linear_5173_12942)"/>
                          <defs>
                            <linearGradient id="paint0_linear_5173_12942" x1="-0.175316" y1="9.87359" x2="39.0955" y2="63.7308" gradientUnits="userSpaceOnUse">
                              <stop offset="0.254808" stopColor="#FFF200"/>
                              <stop offset="0.5" stopColor="#FFFA89"/>
                              <stop offset="0.990385" stopColor="#FFF200"/>
                            </linearGradient>
                          </defs>
                        </svg>
                    </div>
                    
                    <div className="flex flex-col justify-center h-full pt-2">
                        <div className="flex items-center gap-3 mb-[-2px]">
                            <span className="text-3xl md:text-4xl font-bold italic tracking-wider bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-[#FFFFBE] via-[#FCEE21] to-[#D4C811] text-transparent bg-clip-text">LIVE</span>
                            {/* Broadcasting Icon */}
                            <svg width="40" height="24" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                                <circle cx="25" cy="15" r="5" fill="#FF0000" />
                                <path d="M18 8C16 10 16 12 16 15C16 18 16 20 18 22" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" />
                                <path d="M32 8C34 10 34 12 34 15C34 18 34 20 32 22" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" />
                                <path d="M12 4C8 8 8 12 8 15C8 18 8 22 12 26" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" />
                                <path d="M38 4C42 8 42 12 42 15C42 18 42 22 38 26" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="text-4xl md:text-5xl font-bold italic tracking-widest bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-[#FFF200] via-[#FFFA89] to-[#FFF200] text-transparent bg-clip-text">PROCLASS</span>
                    </div>
                </div>

                {/* Timer Pill */}
                <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-4 py-3 shadow-[inset_0px_0px_12px_0px_rgba(255,255,255,0.1)] backdrop-blur-md shrink-0 mt-4 md:mt-0">
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