import { Box, Typography, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const ResultsSection = () => {
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
          <span className="text-[#FFE500]">Real Results</span> From Professionals Like You
        </Typography>
        <p className="text-gray-400 ">Your win can be the Next one!</p>

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
            <img src="/business-webinar/result_author.png" alt="Results" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#FFE500] rounded-full p-4 cursor-pointer hover:scale-110 transition-transform">
                <PlayArrowIcon sx={{ fontSize: 40 }} />
              </div>
            </div>
          </Box>

          {/* Floating Profiles - Aligned to Orbit Lines */}
          {/* Box 1 (Index 1) */}
          <FloatingProfile src="/business-webinar/happyClients/client_1.png" size={90} style={{ bottom: '450px', left: '220px' }} /> 

          {/* Box 2 (Index 2) */}
          <FloatingProfile src="/business-webinar/happyClients/client_2.png" size={70} style={{ bottom: '10px', right: '280px' }} />

          {/* Box 3 (Index 3) */}
          <FloatingProfile src="/business-webinar/happyClients/client_3.png" size={60} style={{ top: '200px', right: '0px' }} />

           {/* Box 0 (Index 0) */}
          <FloatingProfile src="/business-webinar/happyClients/client_4.png" size={50} style={{ bottom: '100px', left: '160px' }} />

          {/* New Profiles */}
          {/* Box 4 (Index 4) - Top Rightish */}
          <FloatingProfile src="/business-webinar/happyClients/client_5.png" size={85} style={{ top: '40px', right: '150px' }} />

          {/* Box 5 (Index 5) - Bottom Leftish */}
          <FloatingProfile src="/business-webinar/happyClients/client_6.png" size={75} style={{ bottom: '50px', left: '50px' }} />

          {/* Box 2 (Index 2) - Top Leftish */}
          <FloatingProfile src="/business-webinar/happyClients/client_7.png" size={55} style={{ top: '120px', left: '80px' }} />

          {/* Box 5 (Index 5) - Middle Right */}
          <FloatingProfile src="/business-webinar/happyClients/client_8.png" size={65} style={{ bottom: '200px', right: '50px' }} />

           {/* Box 3 (Index 3) - Top Centerish */}
          <FloatingProfile src="/business-webinar/happyClients/client_9.png" size={95} style={{ top: '-20px', left: '400px' }} />

          {/* Box 4 (Index 4) - Bottom Centerish */}
          <FloatingProfile src="/business-webinar/happyClients/client_10.png" size={45} style={{ bottom: '-30px', left: '500px' }} />
        </div>

        <button className='primary-btn-gradient text-black font-bold py-4 px-10 rounded-lg mt-20 hover:scale-105 transition-all'>
          Yes, I Want Results Like This
        </button>
      </div>
    </Box>
  );
};

// Sub-component for small floating cards
const FloatingProfile = ({ src, style, size = 80 }) => (
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