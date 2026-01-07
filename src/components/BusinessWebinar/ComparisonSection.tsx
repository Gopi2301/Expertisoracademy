import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface ComparisonItem {
  text: string;
  icon: string; // URL or identifier for icon
  type: "mistake" | "solution";
}

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
  // Enhanced highlighting helper
  const renderHighlightedText = (
    text: string,
    highlight: string,
    colorClass: string,
    underlineColor: string
  ) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span
              key={i}
              className={`${colorClass} relative inline-block`}
            >
              {part}
              <span
                className={`absolute bottom-1 left-0 w-full h-[2px] ${underlineColor}`}
              ></span>
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Mistakes Card (Red) */}
        <Card
          sx={{
            background:
              "linear-gradient(180deg, #2a0a0a 0%, #1a0505 100%)", // Darker red gradient
            border: "1px solid #7f1d1d",
            borderRadius: "16px",
            boxShadow: "0px 0px 40px rgba(127, 29, 29, 0.2)",
            position: "relative",
            overflow: "visible",
          }}
        >
          {/* Top colored line/glow */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #ef4444, transparent)",
              boxShadow: "0 0 15px #ef4444",
            }}
          />
          
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: 4,
                fontSize: { xs: "1.5rem", md: "1.75rem" },
              }}
            >
              {renderHighlightedText(
                mistakes.title,
                mistakes.highlight,
                "text-[#ff4d4d]",
                "bg-[#ff4d4d]"
              )}
            </Typography>

            <ul className="space-y-4">
              {mistakes.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <img
                      src="/business-webinar/dangerous.png" // Assuming this exists or using generic
                      alt="x"
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                         // Fallback if image missing
                         (e.target as HTMLImageElement).style.display='none';
                         ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display='block';
                      }}
                    />
                     {/* <span className="hidden text-red-500 font-bold text-xl">✕</span> */}
                  </div>
                  <div className="bg-white/5 text-white flex flex-row gap-1 px-4 py-3 rounded-lg w-full text-base font-medium">
                     <img src="/business-webinar/icons/dangerous.png" alt="x" className="w-6 h-6 object-contain" />
                     {item}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Solutions Card (Yellow/Gold) */}
        <Card
          sx={{
            background:
              "linear-gradient(180deg, #2a2500 0%, #1a1500 100%)", // Dark gold gradient
            border: "1px solid #854d0e",
            borderRadius: "16px",
            boxShadow: "0px 0px 40px rgba(234, 179, 8, 0.15)",
            position: "relative",
            overflow: "visible",
          }}
        >
           {/* Top colored line/glow */}
           <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, #facc15, transparent)",
              boxShadow: "0 0 15px #facc15",
            }}
          />

          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: 4,
                fontSize: { xs: "1.5rem", md: "1.75rem" },
              }}
            >
              {renderHighlightedText(
                solutions.title,
                solutions.highlight,
                "text-[#facc15]",
                "bg-[#facc15]"
              )}
            </Typography>

            <ul className="space-y-4">
              {solutions.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <img
                      src="/business-webinar/icons/check_circle.png" // Assuming this exists
                      alt="check"
                      className="w-6 h-6 object-contain"
                       onError={(e) => {
                         // Fallback if image missing
                         (e.target as HTMLImageElement).style.display='none';
                         ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display='block';
                      }}
                    />
                    {/* <span className="hidden text-yellow-400 font-bold text-xl">✓</span> */}
                  </div>
                  <div className="bg-[#362f0a] border border-[#634e08] flex flex-row gap-1 text-gray-200 px-4 py-3 rounded-lg w-full text-base font-medium">
                    <img src="/business-webinar/icons/check_circle.png" alt="check" className="w-6 h-6 object-contain" />
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button
          className="gradient-btn-dynamic"
          sx={{
             // Override to Yellow Theme for this CTA
            "--btn-bg": "linear-gradient(90deg, #FACC15 0%, #EAB308 100%)", // Yellow gradient
            "--btn-border": "linear-gradient(to bottom, #FEF08A, rgba(255, 255, 255, 0))", // Light yellow border fade
            "--btn-bg-hover": "linear-gradient(90deg, #EAB308 0%, #CA8A04 100%)",
            "--btn-shadow": "0px 4px 20px rgba(250, 204, 21, 0.4)",
            color: "black !important", // High contrast for yellow button
            fontSize: "1.2rem !important",
            px: 6,
            py: 2
          } as React.CSSProperties}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
};

export default ComparisonSection;
