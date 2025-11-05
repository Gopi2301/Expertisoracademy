import React, { Suspense, lazy } from 'react'

// Lazy load components for better code splitting
const Hero = lazy(() => import('../components/BecomeMentorComponents/Hero'))
const Needs = lazy(() => import('../components/BecomeMentorComponents/Needs'))
const StickyCards = lazy(() => import('../components/BecomeMentorComponents/StickyCards'))
const KeyBenefits = lazy(() => import('../components/BecomeMentorComponents/KeyBenefits'))
const StatsSection = lazy(() => import('../components/BecomeMentorComponents/StatsSection'))
const Mentors = lazy(() => import('../components/BecomeMentorComponents/Mentors'))
const HearMentors = lazy(() => import('../components/BecomeMentorComponents/HearMentors'))
const Community = lazy(() => import('../components/BecomeMentorComponents/Community'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-white text-lg">Loading...</div>
  </div>
)

const BecomeMentor = () => {
  return (
    <div>
      <Suspense fallback={<LoadingFallback />}>
        {/* <StickyCards/> */}
        <Hero />
        <Needs />
        <KeyBenefits />
        <StatsSection />
        <Mentors />
        <HearMentors/>
        <Community/>
      </Suspense>
    </div>
  )
}


export default BecomeMentor