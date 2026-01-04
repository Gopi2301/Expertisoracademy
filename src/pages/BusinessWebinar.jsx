import React from 'react'
import Hero from '../components/BusinessWebinar/Hero'

const BusinessWebinar = ({data}) => {
  return (
    <div className='w-full h-full bg-[#050400]  mx-auto'>
        <Hero data={data.hero_section} />

          {/* <Rating data={pages.civil3d.rating_sec}/>
            <CivilDemands data={pages.civil3d.civil_demands}/>
           
            <div className='pb-20  lg:pb-[160px]'>
                <CoursePreview lessons_data={pages.civil3d.lessons_comp} />
            </div>
            <Mentor data={pages.civil3d.mentor_section} />
          
            <Course course_data={pages.civil3d.course_section} />
            <ReviewOnly review={pages.civil3d.course_review} />
            <PassiveIncome p_income={pages.civil3d.passive_income} />
            <AboutUs />
            <FreAQ data={pages.civil3d.FAQ} />
            <div className="fixed bottom-0 left-0 w-full z-[1]">
                <OfferBanner offer_detail={pages.civil3d.OfferBanner} />
            </div> */}
    </div>
  )
}

export default BusinessWebinar