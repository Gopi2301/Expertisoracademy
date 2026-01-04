import React from 'react';

const WebinarDetailCard = ({ label, value, icon }) => {
  return (
    <div className="flex items-center gap-4 bg-[#212015] rounded-xl px-6 py-3 min-w-[220px]">
      <div className="bg-[#FFF200] rounded-lg p-2 flex items-center justify-center w-8 h-8">
        <img src={icon} alt={label} className="w-6 h-6 object-contain" />
      </div>
      <div className="flex flex-col">
        <span className="text-[#888888] font-inter text-sm font-normal">
          {label}
        </span>
        <span className="text-white font-inter text-sm font-bold">
          {value}
        </span>
      </div>
    </div>
  );
};

export default WebinarDetailCard;
