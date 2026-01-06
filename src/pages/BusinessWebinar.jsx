import React from "react";
import Hero from "../components/BusinessWebinar/Hero";
import LogoCarousel from "../components/BusinessWebinar/LogoCarousel";

const BusinessWebinar = ({ data }) => {
  return (
    <div className="w-full h-full bg-[#050400]  mx-auto">
      <Hero data={data.hero_section} />
      {/* Logo carousel */}
      <LogoCarousel />
    </div>
  );
};

export default BusinessWebinar;
