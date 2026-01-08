import { Box, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { CSSProperties } from 'react';

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
    <Box className="relative w-full py-20 overflow-hidden flex flex-col items-center bg-black">
      {/* Background Gradient & Orbit Lines */}
      <Box 
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, #4A3F00 0%, #050400 70%)', // From Figma
          opacity: 0.6,
          zIndex: 0
        }} 
      />
      
      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl w-full px-4 text-center">
        <Typography variant="h3" className="font-clash text-white mb-2 font-bold font-weight-bold max-w-[500px] text-lg md:text-2xl lg:text-3xl">
          {renderTitle(title, highlight)}
        </Typography>
        <p className="text-gray-400 ">{subtitle}</p>

        {/* The Floating Container */}
        <div className="relative w-full mt-40 h-[500px] flex justify-center items-center">
          
          {/* Orbiting Lines (6 Concentric Boxes) */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute border border-[#FFE500] rounded-2xl pointer-events-none"
              style={{
                width: `${68 + (i * 10)}%`,  // Slightly wider expansion
                height: `${75 + (i * 10)}%`, // Consistent expansion
                opacity: 0.6 - (i * 0.08), 
                zIndex: 1
              }}
            />
          ))}

          {/* Central Video/Image Card */}
          <Box className="relative z-20 w-[60%] h-[60%] aspect-video rounded-2xl overflow-hidden border-4 border-[#FFE500] shadow-2xl">
            <img src={main_video_image} alt="Results" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#FFE500] rounded-full p-4 cursor-pointer hover:scale-110 transition-transform">
                <PlayArrowIcon sx={{ fontSize: 40 }} />
              </div>
            </div>
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

        <button className='primary-btn-gradient text-black font-bold py-4 px-10 rounded-lg mt-20 hover:scale-105 transition-all'>
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
    //   background: 'linear-gradient(to bottom, #FFE500, #FFFFFF)',
      zIndex: 10,
      borderRadius: 1,
      ...style 
    }}
  >
    <img src={src} className="w-full h-full object-cover rounded shadow-md" alt="profile" />
  </Box>
);

export default ResultsSection;