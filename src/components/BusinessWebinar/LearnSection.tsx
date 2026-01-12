import Card from "@mui/material/Card";
import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

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

  const items = [
    {
      text: "Architects, Interior designers, Construction professionals planning to Start & Scale their own firm",
      type: "success",
      fullWidth: true,
    },
    { text: "Firm owners stuck at the same revenue level", type: "success" },
    { text: "People unwilling to change how they work", type: "error" },
    { text: "People looking for shortcuts", type: "error" },
  ];

  return (
    <div className="w-full  text-white">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center my-12">
          <h2 className="text-4xl md:text-5xl font-semibold font-clash mb-4">
            {renderTitle()}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">{subtitle}</p>
        </div>

        {/* Content Section */}
        <div className="flex max-h-[400px]flex-col md:flex-row gap-12 justify-center items-center mx-1 md:mx-0">
          {/* Left Column: Image */}
          <div className="">
            {/* Placeholder for the image if not provided, or use the provided image prop */}
            <div className="rounded-2xl overflow-hidden border border-gray-800 relative z-10">
              {/* Use the uploaded image behavior or placeholder if empty */}
              <img
                src={
                  image ||
                  "https://placehold.co/600x600/1a1a1a/FFF?text=Instructor+Image"
                }
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
            {/* Refactored Layout: List and Line wrapper */}
            <div className="relative">
              {/* Centered vertical line
                  - Centered in w-12 (48px) column -> left-6 (24px).
                  - Width 2px.
                  - top-[48px]: Starts below the active star (which is h-12).
                  - bottom-[50px]: Stops roughly above the last item content/star.
              */}
              <div className="absolute left-6 top-[40px] bottom-[50px] w-[2px] -translate-x-1/2 flex flex-col items-center pointer-events-none">
                 <div className="w-full h-[60px] shrink-0 bg-gradient-to-b from-[#fff200] from-10% to-transparent" />
                 <div className="w-full flex-1 bg-[#242424]" />
              </div>

              <ul className="space-y-8 relative z-10">
                {list?.map((item, index) => {
                  const isActive = index === 0;
                  const activeStar = "/business-webinar/glowing_star.svg";
                  const inactiveStar = "/business-webinar/Star.svg";
                  return (
                    <li key={index} className="flex items-start gap-4 min-h-[40px]">
                      {/* Icon Column: Fixed width w-12 (48px) to house the big star */}
                      <div className="relative shrink-0 w-12 flex justify-center pt-1">
                         {/* Stars: Active is bigger (w-12), Inactive is smaller (w-7) */}
                        <img
                          src={isActive ? activeStar : inactiveStar}
                          alt="star"
                          className={`block object-contain ${isActive ? 'w-10 h-10 -mt-1' : 'w-6 h-6'}`}
                          style={isActive ? { filter: 'drop-shadow(0 0 15px #fff200cc)' } : {}}
                        />
                      </div>
                      
                      <span
                        className={
                          isActive
                            ? "font-inter font-medium text-[20px] bg-gradient-to-b from-[#fff200] from-1/6 to-white to-11/12 bg-clip-text text-transparent pt-1"
                            : "font-inter font-medium text-[20px] text-[#5c5c5c] pt-1"
                        }
                        style={isActive ? { WebkitTextFillColor: 'transparent', fontWeight: 500, letterSpacing: 0 } : { fontWeight: 500, letterSpacing: 0 }}
                      >
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Figma-style CTA Button - Moved outside relative wrapper */}
            <div className="mt-12 pl-16">
              <button
                className="border border-solid border-white px-10 py-[13.5px] rounded-[4px] font-semibold text-[14px] text-black w-full"
                style={{
                  backgroundImage:
                    'linear-gradient(93.9deg, rgba(255, 242, 0, 1) 0%, rgba(255, 248, 118, 1) 29.8%, rgba(255, 242, 0, 1) 54.7%, rgba(255, 248, 118, 1) 78.4%, rgba(255, 242, 0, 1) 100%)',
                  boxShadow: '0 2px 8px 0 rgba(255, 242, 0, 0.10)',
                }}
              >
                I Want to Learn This Live
              </button>
            </div>
          </div>
        </div>
        {/* For whom */}
        <div className="relative mt-20 py-20 bg-[url('/business-webinar/background-people.png')] bg-cover bg-center bg-no-repeat flex flex-col gap-6 items-center justify-center overflow-hidden">
          {/* 1. The Gradient Overlay: Sitting between BG image and Content */}
          <div className="absolute inset-0 bottom-gradient z-0 opacity-90 pointer-events-none" />

          {/* 2. Content Wrapper: Higher Z-index to stay above the overlay */}
          <div className="relative z-10 flex flex-col items-center gap-6 w-full px-4">
            <h3 className="text-4xl font-semibold font-clash mb-4 tracking-[-0.04em] leading-[100%] text-white text-center">
              Who this is <span className="text-[#FFE500]">for</span> and{" "}
              <span className="text-[#FF0000]">Not for?</span>
            </h3>

            <Box
              className="gold-bottom-gradient"
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 4,
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                justifyContent: "center",
                maxWidth: 900,
                width: "100%",
              }}
            >
              {items.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    gap: 2,
                    bgcolor: "rgba(255, 255, 255, 0.05)", // Darker fill for the tags to pop against the gold
                    borderRadius: 2,
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    flex: {
                      xs: "1 1 100%",
                      sm: item.fullWidth ? "1 1 100%" : "1 1 auto",
                    },
                  }}
                >
                  {item.type === "success" ? (
                    <CheckCircleIcon sx={{ color: "#FFE500" }} />
                  ) : (
                    <CancelIcon sx={{ color: "#FF0000" }} />
                  )}
                  <Typography
                    sx={{ color: "#fff", fontSize: "0.95rem", fontWeight: 400 }}
                  >
                    {item.text}
                  </Typography>
                </Card>
              ))}
            </Box>

            <button className="primary-btn-gradient hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-md w-full max-w-[384px] transition-all duration-300 transform hover:scale-[1.02] shadow-xl mt-4">
              Yes, I've Been Doing this Wrong
            </button>
          </div>
        </div>
        {/* cta */}
      </div>
    </div>
  );
};

export default LearnSection;
