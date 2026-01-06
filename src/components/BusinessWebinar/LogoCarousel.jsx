import React from "react";
import ImgRun from "../HomeComponents/ImgRun";

const LogoCarousel = () => {
  const logos = Array.from(
    { length: 22 },
    (_, i) => `/business-webinar/business-webinar-client-logo-${i + 1}.svg`
  );

  return (
    <div className="w-full py-10">
      <p className=" text-center text-[#8A8A8A] uppercase ">as seen in</p>
      <ImgRun
        datas={logos}
        dirc="left"
        speed="40"
        m="py-10"
        h="h-12 md:h-14 w-auto object-contain transition-all duration-300 mx-6"
      />
    </div>
  );
};

export default LogoCarousel;
