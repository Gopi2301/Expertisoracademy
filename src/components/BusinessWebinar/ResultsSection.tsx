import { Box, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CSSProperties } from 'react';
import VideoPlayButton from './VideoPlayButton';

interface ResultsSectionProps {
  title: string;
  highlight: string;
  subtitle: string;
  cta: string;
  main_video_image: string;
  floating_profiles: Array<{
    src: string;
    size: number;
    style: CSSProperties;
  }>;
}

const ResultsSection = ({ 
  title, 
  highlight, 
  subtitle, 
  cta, 
  main_video_image, 
  floating_profiles 
}: ResultsSectionProps) => {

  const renderTitle = (text: string, highlightText: string) => {
    if (!text || !highlightText) return text;
    const parts = text.split(new RegExp(`(${highlightText})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightText.toLowerCase() ? (
            <span key={index} className="text-[#FFE500]">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <Box className="relative w-full py-24 overflow-hidden flex flex-col items-center bg-black">
      {/* Background Gradient */}
      <Box 
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(255, 242, 0, 0.25) 0%, #050400 65%)',
          opacity: 1,
          zIndex: 0
        }} 
      />
      
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl w-full px-4 text-center">
        <Typography
          variant="h3"
          className="text-white mb-3 font-bold max-w-[520px] text-2xl md:text-3xl lg:text-4xl leading-snug tracking-wide"
        >
          {renderTitle(title, highlight)}
        </Typography>
        <p className="text-[#b8b8b8] text-sm md:text-base max-w-[360px]">
          {subtitle}
        </p>

        {/* The Floating Container */}
        <div className="relative w-full mt-28 h-[520px] flex justify-center items-center">
          
          {/* Orbiting Lines (6 Concentric Boxes) */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-xl pointer-events-none border border-[#6e6900]"
              style={{
                width: `${64 + i * 8}%`,
                height: `${72 + i * 8}%`,
                opacity: 0.9 - i * 0.12,
                zIndex: 1
              }}
            />
          ))}

          {/* Tilted Yellow Background Card (behind main video) */}
          <Box
            className="absolute rounded-xl"
            sx={{
              width: '60%',
              maxWidth: 600,
              aspectRatio: '600 / 360',
              backgroundColor: '#FFF200',
              borderRadius: 2,
              transform: 'rotate(-4deg)',
              boxShadow: '0 0 40px rgba(0,0,0,0.6)',
              zIndex: 10
            }}
          />

          {/* Central Video/Image Card */}
          <Box
            className="relative z-20 w-[60%] max-w-[600px] aspect-video rounded-xl overflow-hidden"
            sx={{
              border: '4px solid #FFF200',
              boxShadow: '0 0 40px rgba(0,0,0,0.9)',
              transform: 'rotate(-1deg)'
            }}
          >
            <img src={main_video_image} alt="Results" className="w-full h-full object-cover" />
            <VideoPlayButton /> 
          </Box> 

          {/* Floating Profiles - Aligned to Orbit Lines */}
          {floating_profiles?.map((profile, i) => (
             <FloatingProfile 
               key={i}
               src={profile.src} 
               size={profile.size} 
               style={profile.style} 
             />
          ))}
        </div>

        <button
          className="primary-btn-gradient border border-white text-black font-semibold text-xs md:text-sm lg:text-base px-10 py-3 rounded mt-16 hover:scale-105 transition-transform"
        >
          {cta}
        </button>
      </div>
    </Box>
  );
};
    
interface FloatingProfileProps {
  src: string;
  style?: CSSProperties;
  size?: number;
}

// Sub-component for small floating cards
const FloatingProfile = ({ src, style, size = 80 }: FloatingProfileProps) => (
  <Box 
    sx={{ 
      position: 'absolute', 
      width: size, 
      height: size, 
      p: 0.5,
      background: 'linear-gradient(to bottom, #FFF200, #FFFFFF)',
      zIndex: 10,
      borderRadius: 1,
      ...style 
    }}
  >
    <img src={src} className="w-full h-full object-cover rounded shadow-md" alt="profile" />
  </Box>
);

export default ResultsSection;