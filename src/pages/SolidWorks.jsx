import CoursePreview from '../components/CoursePreview'
import AffiliateReview from '../components/AffilateComponents/AffiliateReview'
import PassiveIncome from '../components/AffilateComponents/PassiveIncome'
import AboutUs from '../components/HomeComponents/AboutUs'
import FreAQ from '../components/AffilateComponents/FreAQ'
import OfferBanner from '../components/OfferBanner'
import { pages } from '../constants/pages'
import Mentor from '../components/Mentor'
import DreamJob from '../components/SolidworksComponents/DreamJob'
import Hero from '../components/SolidworksComponents/Hero'
import Rating from '../components/SolidworksComponents/Rating'
import ReviewOnly from '../components/ReviewOnly'



const SolidWorks = () => {
    return (
        <div className=''>
            <Hero data={pages.solidworks.hero_section} />
            <Rating data={pages.solidworks.rating_sec} />
            <DreamJob dreamjob={pages.solidworks.dream_job} />
            <div className='pt-20 pb-24 sm:pb-20 md:pb-[120px]'>
                <CoursePreview lessons_data={pages.solidworks.lessons_comp} />
            </div>
            <Mentor data={pages.solidworks.mentor_section} />
            {/* <StudentsSay students_say={pages.marketing_affilate.students_say_video} /> */}
            <ReviewOnly review={pages.solidworks.course_review} />
            <PassiveIncome p_income={pages.solidworks.passive_income} />
            <AboutUs />
            <FreAQ data={pages.solidworks.FAQ} />
            <div className="fixed bottom-0 left-0 w-full z-[1]">
                <OfferBanner offer_detail={pages.solidworks.OfferBanner} />
            </div>
        </div>
    )
}


export default SolidWorks