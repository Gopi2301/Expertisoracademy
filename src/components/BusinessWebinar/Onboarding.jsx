import React, { useState } from "react";
import OnboardingFormView from "./OnboardingFormView";
import OnboardingConfirmation from "./OnboardingConfirmation";

const Onboarding = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  return (
    <div className="onboarding-root">
      {/* Background overlay */}
      <div className="onboarding-bg"></div>

      {showConfirmation ? (
        <OnboardingConfirmation />
      ) : (
        <OnboardingFormView onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Onboarding;
