import React from 'react';
import { getStoredUtmParams, appendUtmParamsToUrl } from '../utils/utmUtils';

const GRAPHY_URL = 'https://learn.expertisoracademy.in/courses/MasterTech-Creator-Mentorship-Program-67ec2a9a57589948c89aa275';

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