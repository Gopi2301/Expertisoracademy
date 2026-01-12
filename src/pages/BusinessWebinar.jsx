import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/BusinessWebinar/Hero";
import LogoCarousel from "../components/BusinessWebinar/LogoCarousel";
import LeadGenCard from "../components/BusinessWebinar/LeadGenCard";
import ComparisonSection from "../components/BusinessWebinar/ComparisonSection";
import LearnSection from "../components/BusinessWebinar/LearnSection";
import ResultsSection from "../components/BusinessWebinar/ResultsSection";
import AboutAuthor from "../components/BusinessWebinar/AboutAuthor";
import WithOutSystem from "../components/BusinessWebinar/WithOutSystem";
import Cta from "../components/BusinessWebinar/Cta";
import FAQ from "../components/BusinessWebinar/FAQ";
import Footer from "../components/Footer";

const BusinessWebinar = ({ data }) => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate("/business-webinar-onboarding");
  };

  return (
    <div className="w-full h-full bg-[#050400] font-clash">
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
        onCtaClick={handleCtaClick}
      />
      {/* comparison */}
      <ComparisonSection {...data.comparison_section} />
      {/* LearnSection */}
      <LearnSection {...data.learn_section} />
      {/* ResultsSection */}
      <ResultsSection {...data.results_section} />
      {/* about author */}
      <AboutAuthor {...data.about_author} />
      {/* with & without System */}
      <WithOutSystem {...data.without_system} />

      {/* Cta */}
      <Cta {...data.cta} onCtaClick={handleCtaClick} />
      {/* FAQ */}
      <FAQ {...data.faq} />
      <Footer />
    </div>
  );
};

export default BusinessWebinar;
