import Card from "@mui/material/Card";
import React from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/what_you_will_learn.json";
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
        <div className="flex max-h-[400px] flex-col md:flex-row gap-12 justify-center items-center mx-1 md:mx-0">
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
            <div className="relative w-full max-w-[500px]">
              <Lottie animationData={animationData} loop={true} />
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
