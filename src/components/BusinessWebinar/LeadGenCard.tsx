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
    <div className="flex items-center justify-center w-full py-10 px-4">
      <Card
        sx={{
          minWidth: 275,
          maxWidth: 900,
          background: "linear-gradient(180deg, #300000 0%, #200000 100%)",
          boxShadow: "inset 0px 0px 39px 0px rgba(255, 168, 168, 0.1)",
          color: "#fff",
          border: "1px solid #450a0a",
          borderRadius: "16px",
          padding: { xs: "16px", md: "32px" },
        }}
      >
        <CardContent>
          <h2
            className="font-clash font-bold text-white text-4xl mb-4"
            // sx={{
            //   // 
            //   fontWeight: "semi-bold",
            //   mb: 4,
            //   color: "white",
            //   lineHeight: 1,
            //   textAlign: "center",
            //   fontSize: { xs: "1.75rem", md: "2.5rem" },
            // }}
          >
            {renderTitle()}
          </h2>

          {/* Tags / Subtitle Area */}
          <div className="flex flex-col gap-4 mb-8">
            {subtitle && (
              <div className="relative">
                <span className="font-caveat brand-text text-4xl italic relative z-10 block mb-2">
                  {subtitle}
                </span>
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium bg-[#3f0d0d] text-gray-200 border border-[#5c1c1c]`}
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
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <Typography
                variant="h6"
                sx={{ color: "white", mb: 3, fontWeight: "medium" }}
              >
                {costingTitle}
              </Typography>
              <ul className="space-y-3 text-gray-300">
                {costingList?.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="min-w-1.5 min-h-1.5 rounded-full bg-gray-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side 'System' card mimic */}
            <div className="bg-black/40 rounded-xl p-8 flex flex-col items-center justify-center border border-white/10 min-h-[200px]">
              {/* Red Alert Icon */}
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 "></div>
                <span className="relative z-10 text-3xl font-bold text-black">
                  <img src="/business-webinar/icons/brightness_alert.png" alt="alert" />
                </span>
              </div>

              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: "white",
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                {systemLabel && (
                  <span className="block font-caveat brand-text text-2xl mb-1 italic">
                    {systemLabel}
                  </span>
                )}
                {renderSystemText()}
              </Typography>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            sx={{
              background:
                "linear-gradient(to left, #ff0000, #ff1d18, #ff2c28, #ff3936, #ff4442, #ff4442, #ff4442, #ff4442, #ff3936, #ff2c28, #ff1d18, #ff0000) padding-box, linear-gradient(to bottom, #FF8484, rgba(255, 255, 255, 0)) border-box",
              border: "1px solid transparent",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                background:
                  "linear-gradient(180deg, #D60000 0%, #900000 100%) padding-box, linear-gradient(to bottom, #FF8484, rgba(255, 255, 255, 0)) border-box",
              },
              padding: "16px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "1.1rem",
              boxShadow: "0px 4px 12px rgba(255, 0, 0, 0.4)",
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