import "../init.css";
import "../index.css";
import "@fontsource/inter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionIntro from '../initiativeComponents/SectionIntro';
import Section2 from '../initiativeComponents/Section2';
import Section3 from '../initiativeComponents/Section3';
import FullStack from '../initiativeComponents/FullStack';
import Section4 from '../initiativeComponents/Section4';
import Section5 from '../initiativeComponents/Section5';
import Section6 from '../initiativeComponents/Section6';
import Section7 from '../initiativeComponents/Section7';
import Aboutus from '../initiativeComponents/AboutUs';
import StudReview from '../initiativeComponents/StudReview';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../initiativeComponents/Footer';

function Initiative() {
  console.log("Initiative page load");
  const [searchParams] = useSearchParams();

  // FIX: Define 'allParams' here so the entire component, including the return statement, can access it.
  const allParams = Object.fromEntries([...searchParams]);

  // This useEffect can now be used just for logging when the params change.
  useEffect(() => {
    console.log('URL Parameters:', allParams);
  }, [allParams]); // Dependency changed to allParams for correctness

  return (
    <div>
      {/* Now the 'allParams' variable exists and can be passed as a prop */}
      <SectionIntro urlParams={allParams} />
      <Section2 urlParams={allParams} />
      <FullStack urlParams={allParams} />
      <Section3 urlParams={allParams} />
      <Section4 urlParams={allParams} />
      <Section5 urlParams={allParams} />
      <Section6 urlParams={allParams} />
      <Section7 urlParams={allParams} />
      <StudReview urlParams={allParams} />
      <Aboutus urlParams={allParams} />
      <Footer urlParams={allParams} />
      {/* <Whatsapp urlParams={allParams} /> */}
    </div>
  );
}

export default Initiative;