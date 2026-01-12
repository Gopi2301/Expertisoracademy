import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface ComparisonSectionProps {
  mistakes: {
    title: string;
    highlight: string;
    items: string[];
  };
  solutions: {
    title: string;
    highlight: string;
    items: string[];
  };
  cta: string;
}

const ComparisonSection = ({
  mistakes,
  solutions,
  cta,
}: ComparisonSectionProps) => {
  // Helper to render the "Hand-Drawn" style underline
  const renderHighlightedText = (
    text: string,
    highlight: string,
    colorClass: string,
    underlineAssetPath: string // Path to your SVG/PNG underline
  ) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span
              key={i}
              className={`${colorClass} relative inline-block z-10 px-1`}
            >
              {part}
              {/* The Image Asset Underline */}
              <img
                src={underlineAssetPath}
                alt=""
                className="absolute -bottom-2 left-0 w-full h-auto min-h-[8px] -z-10 object-contain pointer-events-none"
                style={{
                  // Adjusting scale to make it slightly wider than the word
                  transform: "scaleX(1.1)",
                }}
              />
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="md:mt-24 bottom-gradient">
      <h3
        style={{
          color: "#FFF",
          textAlign: "center",
          fontFamily: '"Clash Display Variable"',
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          letterSpacing: "1.44px",
        }}
      >
        How Most Firms Try to Fix This (And
        <span className="text-[#FF0000]"> Why It Backfires</span>)
      </h3>
      <div className="w-full max-w-6xl mx-auto px-4 py-12 font-sans">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Mistakes Card (Red/Dark Theme) */}
          <Card
            sx={{
              borderRadius: "8px",
              border: "1px solid #4A0000",
              background:
                "radial-gradient(170.97% 65.56% at 84.73% 100%, #5C0000 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(91.79% 96.12% at 5.63% 100%, #2D0000 0%, rgba(0, 0, 0, 0.00) 100%), #150000",
              backgroundBlendMode: "screen, screen, normal",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "400",
                  mb: 5,
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  lineHeight: 1.3,
                }}
              >
                {renderHighlightedText(
                  mistakes.title,
                  mistakes.highlight,
                  "text-[#ff4d4d]",
                  "/business-webinar/icons/red_underline.svg"
                )}
              </Typography>

              <ul className="flex flex-col gap-3">
                {mistakes.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3 px-4 py-3 rounded-xl w-fit text-gray-200 text-base font-medium"
                  >
                    <img
                      src="/business-webinar/icons/dangerous.png"
                      alt="x"
                      className="w-5 h-5 object-contain"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solutions Card (Yellow/Dark Theme) */}
          <Card
            sx={{
              borderRadius: "8px",
              border: "1px solid #4A3A00",
              background:
                "radial-gradient(170.97% 55% at 84.73% 100%, #B18800 0%, rgba(0, 0, 0, 0.00) 100%), radial-gradient(91.79% 85% at 5.63% 100%, #A38200 0%, rgba(0, 0, 0, 0.00) 100%), #151100",
              backgroundBlendMode: "screen, screen, normal",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontWeight: "400",
                  mb: 5,
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  lineHeight: 1.5,
                }}
              >
                {renderHighlightedText(
                  solutions.title,
                  solutions.highlight,
                  "text-[#facc15]",
                  "/business-webinar/icons/yellow_underline.svg"
                )}
              </Typography>

              <ul className="flex flex-col gap-3">
                {solutions.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3 px-4 py-3 rounded-xl w-fit text-gray-200 text-base font-medium"
                  >
                    <img
                      src="/business-webinar/icons/check_circle.png"
                      alt="check"
                      className="w-5 h-5 object-contain"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="contained"
            sx={{
              // 1. Multi-stepped horizontal gradient (Yellow to Light Yellow to Yellow)
              background:
                "linear-gradient(to right, #fff200, #FFF876, #FFF200, #FFF876, #fff200)",

              color: "#000",
              fontWeight: "800",
              fontSize: "1.1rem",
              px: 6,
              py: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              border: "1px solid rgba(255, 255, 255, 0.5)", // Bright edge highlight

              // 2. Spreaded Glow Effect
              // The first shadow is a tight glow, the second is a wide spread
              boxShadow: `
        0px 0px 15px 1px rgba(255, 242, 0, .2), 
        0px 0px 40px 5px rgba(255, 242, 0, .2),
        inset 0px 1px 1px rgba(255, 255, 255, 0.8)
      `,

              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

              "&:hover": {
                // Subtle shift in glow intensity on hover
                boxShadow: `
          0px 0px 25px 2px rgba(255, 242, 0, 0.2), 
          0px 0px 60px 8px rgba(255, 242, 0, 0.2)
        `,
                transform: "scale(1.02)",
                filter: "brightness(1.05)",
              },
            }}
          >
            {cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
