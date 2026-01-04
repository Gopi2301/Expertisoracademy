import React from 'react';

const FeatureBadge = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 bg-[#2D2D2D] border border-[rgba(255,242,0,0.2)] rounded-full px-3 py-1">
      <img src={icon} alt="" className="w-5 h-5" />
      <span className="text-[#CFCFCF] font-inter text-sm font-normal">
        {text}
      </span>
    </div>
  );
};

export default FeatureBadge;
