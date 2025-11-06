import React from 'react'
import Hero from '../components/AffilateComponents/Hero'
import System from '../components/AffilateComponents/System'
import Works from '../components/AffilateComponents/Works'
import Mentor from '../components/Mentor'
import StudentsSay from '../components/HomeComponents/StudentsSay'
import AboutUs from '../components/HomeComponents/AboutUs'
import PassiveIncome from '../components/AffilateComponents/PassiveIncome'
import FreAQ from '../components/AffilateComponents/FreAQ'
import AffiliateReview from '../components/AffilateComponents/AffiliateReview'
import OfferBanner from '../components/OfferBanner'
import CoursePreview from '../components/CoursePreview'
import marketingAffiliate from '../constants/data/marketingAffiliate'


const AffilateMarketing = () => {
  return (
    <div>
      <Hero />
      <System />
      <Works works={marketingAffiliate.works} />
      <div className='pb-24 sm:pb-20 md:pb-[120px]'>
      <CoursePreview lessons_data={marketingAffiliate.lessons_comp} />
      </div>
      <Mentor data={marketingAffiliate.mentor_section}/>
      {/* <StudentsSay students_say={marketingAffiliate.students_say_video} /> */}
      <AffiliateReview review={marketingAffiliate.affiliate_review} />
      <PassiveIncome p_income={marketingAffiliate.passive_income} />
      <AboutUs />
      <FreAQ data={marketingAffiliate.FAQ} />
      <div className="fixed bottom-0 left-0 w-full z-[1]">
        <OfferBanner offer_detail={marketingAffiliate.OfferBanner} />
      </div>
    </div>
  )
}

export default AffilateMarketing