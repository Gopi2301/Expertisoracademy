import React from 'react';

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* Animated spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-yellow/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-yellow rounded-full animate-spin"></div>
        </div>
        {/* Loading text */}
        <p className="text-white/70 font-inter text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;

