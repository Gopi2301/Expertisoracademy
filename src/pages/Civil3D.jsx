import CoursePreview from '../components/CoursePreview'
import ReviewOnly from '../components/ReviewOnly'
import PassiveIncome from '../components/AffilateComponents/PassiveIncome'
import AboutUs from '../components/HomeComponents/AboutUs'
import FreAQ from '../components/AffilateComponents/FreAQ'
import OfferBanner from '../components/OfferBanner'
import { pages } from '../constants/pages'
import Mentor from '../components/Mentor'
import Hero from '../components/Civil3DComponents/Hero'
import Rating from '../components/Rating'
import CivilDemands from '../components/Civil3DComponents/CivilDemands'
import Course from '../components/ThreeDMaxComponents/Course'



const Civil3D = () => {
    return (
        <div>
            <Hero
                data={pages?.civil3d?.hero_section}
                startCTA={pages?.civil3d?.start_button}
                downloadCTA={pages?.civil3d?.download}
            />
            <Rating data={pages.civil3d.rating_sec}/>
            <CivilDemands data={pages.civil3d.civil_demands}/>
            {/* <CourseFor data={pages.civil3d.course_for}/> */}
            <div className='pb-20  lg:pb-[160px]'>
                <CoursePreview lessons_data={pages.civil3d.lessons_comp} />
            </div>
            <Mentor data={pages.civil3d.mentor_section} />
            {/* <StudentsSay students_say={pages.marketing_affilate.students_say_video} /> */}
            <Course course_data={pages.civil3d.course_section} />
            <ReviewOnly review={pages.civil3d.course_review} />
            <PassiveIncome p_income={pages.civil3d.passive_income} />
            <AboutUs />
            <FreAQ data={pages.civil3d.FAQ} />
            <div className="fixed bottom-0 left-0 w-full z-[1]">
                <OfferBanner offer_detail={pages.civil3d.OfferBanner} />
            </div>
        </div>
    )
}

export default Civil3D