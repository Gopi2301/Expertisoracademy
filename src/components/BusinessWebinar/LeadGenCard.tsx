import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface LeadGenCardProps {
  title: string;
  highlightWord: string;
  subtitle?: string;
  cta: string;
  tags: {
    label: string;
    type: "error" | "warning" | "neutral";
  }[];
  // New props for dynamic content
  costingTitle: string;
  costingList: string[];
  systemLabel: string;
  systemText: string;
  systemHighlight: string;
  onCtaClick?: () => void;
}

const LeadGenCard = ({
  title,
  highlightWord,
  subtitle,
  tags,
  cta,
  costingTitle,
  costingList,
  systemLabel,
  systemText,
  systemHighlight,
  onCtaClick,
}: LeadGenCardProps) => {
  // Highlighting logic for Title (Red Highlight)
  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(new RegExp(`(${highlightWord})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlightWord.toLowerCase() ? (
            <span key={i} className="text-[#FF0000] font-bold">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  // Highlighting logic/Strike-through for System Text
  // e.g. "This is a talent problem." -> "talent" should be strictly struck through
  const renderSystemText = () => {
    if (!systemHighlight) return systemText;
    const parts = systemText.split(new RegExp(`(${systemHighlight})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === systemHighlight.toLowerCase() ? (
            <span
              key={i}
              className="line-through text-gray-500 decoration-red-600 decoration-2"
            >
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
    <div className="flex items-center justify-center w-full py-6 md:py-10 px-4">
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 900,
          background: "linear-gradient(180deg, #300000 0%, #200000 100%)",
          boxShadow: "inset 0px 0px 39px 0px rgba(255, 168, 168, 0.1)",
          color: "#fff",
          border: "1px solid #450a0a",
          borderRadius: { xs: "24px", md: "32px" },
          padding: { xs: "24px", md: "48px" },
        }}
      >
        <CardContent>
          <h2
            className="font-clash font-semibold text-white text-[36px] leading-normal tracking-[1.44px] mb-6 md:mb-8 text-center"
          >
            {renderTitle()}
          </h2>

          {/* Tags / Subtitle Area */}
          <div className="flex flex-col gap-4 mb-8 items-center md:items-start">
            {subtitle && (
              <div className="relative">
                <span className="font-caveat brand-text text-3xl md:text-4xl italic relative z-10 block mb-2">
                  {subtitle}
                </span>
                {/* Optional: Add Arrow Graphic if available */}
                 <div className="hidden md:block absolute -right-20 top-1/2 -translate-y-1/2">
                   <img src="/business-webinar/white_arrow.svg" className="w-16 opacity-80" />
                 </div>
              </div>
            )}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 md:py-3 rounded-lg text-sm font-medium bg-[#3f0d0d] text-gray-200 border border-[#5c1c1c]`}
                >
                  {tag.type === "error" && (
                    <span className="flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-bold">
                      <img src="/business-webinar/icons/dangerous.png" alt="alert" />
                    </span>
                  )}
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Main Content Columns */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div>
              <Typography
                variant="h6"
                sx={{ 
                  color: "white", 
                  mb: 3, 
                  fontWeight: "medium",
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  textAlign: { xs: "center", md: "left" }
                }}
              >
                {costingTitle}
              </Typography>
              <ul className="space-y-3 text-gray-300">
                {costingList?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="min-w-1.5 min-h-1.5 mt-2 rounded-full bg-gray-500 shrink-0"></span>
                    <span className="text-base md:text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side 'System' card mimic */}
            <div className="bg-black/40 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center border border-white/10 min-h-[180px] md:min-h-[200px]">
              {/* Red Alert Icon */}
              <div className="relative w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 "></div>
                <span className="relative z-10 text-3xl font-bold text-black">
                  <img src="/business-webinar/icons/brightness_alert.png" alt="alert" className="w-full h-full object-contain" />
                </span>
              </div>

              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "white",
                  textAlign: "center",
                  lineHeight: 1.4,
                  fontSize: { xs: "1rem", md: "1.25rem" }
                }}
              >
                {systemLabel && (
                  <span className="block font-caveat brand-text text-xl md:text-2xl mb-1 italic">
                    {systemLabel}
                  </span>
                )}
                {renderSystemText()}
              </Typography>
            </div>
          </div>
        </CardContent>
        <CardActions sx={{ p: 0, mt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            className="gradient-btn-dynamic"
            onClick={onCtaClick}
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              py: { xs: 1.5, md: 2 },
            }}
          >
            {cta}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default LeadGenCard;