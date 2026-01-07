import React from "react";
import Hero from "../components/BusinessWebinar/Hero";
import LogoCarousel from "../components/BusinessWebinar/LogoCarousel";
import LeadGenCard from "../components/BusinessWebinar/LeadGenCard";
import ComparisonSection from "../components/BusinessWebinar/ComparisonSection";
const BusinessWebinar = ({ data }) => {
  return (
    <div className="w-full h-full bg-[#050400]">
      <Hero data={data.hero_section} />
      {/* Logo carousel */}
      <LogoCarousel />
      {/* Why not Card */}
      <LeadGenCard
        title={data.lead_gen_card.title}
        cta={data.lead_gen_card.cta}
        highlightWord={data.lead_gen_card.highlight_word}
        subtitle={data.lead_gen_card.subtitle}
        tags={data.lead_gen_card.tags}
        costingTitle={data.lead_gen_card.costingTitle}
        costingList={data.lead_gen_card.costingList}
        systemLabel={data.lead_gen_card.systemLabel}
        systemText={data.lead_gen_card.systemText}
        systemHighlight={data.lead_gen_card.systemHighlight}
      />
      {/* comparison */}
      <ComparisonSection {...data.comparison_section} />
    </div>
  );
};

export default BusinessWebinar;
