import React from 'react';
import { getStoredUtmParams, appendUtmParamsToUrl } from '../utils/utmUtils';

const GRAPHY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc0CBZ7_pgSvGR_TD0dVyMxxEMuQXK5sGggZGEIaAHCf5j2hQ/viewform?usp=header';

const JoinNowButton = ({ children, className }) => {
  const handleRedirect = () => {
    const utmParams = getStoredUtmParams();
    const finalUrl = appendUtmParamsToUrl(GRAPHY_URL, utmParams);
    window.location.href = finalUrl;
    console.log(finalUrl);
  };

  return (
    <button onClick={handleRedirect} className={className}>
      {children}
    </button>
  );
};

export default JoinNowButton;