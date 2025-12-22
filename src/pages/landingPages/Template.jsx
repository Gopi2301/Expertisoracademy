import Hero from '../../components/TemplateComponents/Hero';
import Mentor from '../../components/Mentor';
import AboutUs from '../../components/HomeComponents/AboutUs';
import FreAQ from '../../components/AffilateComponents/FreAQ';
import PassiveIncome from '../../components/TemplateComponents/PassiveIncome';
import CoursePreview from '../../components/CoursePreview';
import ReviewOnly from '../../components/ReviewOnly';
import Rating from '../../components/SolidworksComponents/Rating';
import CivilDemands from '../../components/Civil3DComponents/CivilDemands';
import StudentsSay from '../../components/HomeComponents/StudentsSay';
import ApplyModal from '../../components/TemplateComponents/ApplyModel';
import { useFormContext } from '../../context/FormContext';
import OfferBanner from '../../components/TemplateComponents/OfferBanner';



const Template = ({ data }) => {

    const {showApplyModal, setShowApplyModal}=useFormContext()

    const {
        hero_section,
        rating_sec,
        demands,
        lessons_comp,
        mentor_section,
        students_say_video,
        course_review,
        passive_income,
        FAQ,
        OfferBanner: offerBannerData
    } = data;

    return (
        <>
            {/* HERO SECTION */}
            <Hero data={hero_section} />

            <Rating data={rating_sec} />

            <CivilDemands data={demands} />

            {/* COURSE PREVIEW SECTION */}
            <div className='pb-24 sm:pb-20 md:pb-[120px]'>
                <CoursePreview lessons_data={lessons_comp} />
            </div>

            {/* MENTOR SECTION */}
            <Mentor data={mentor_section} />

            <StudentsSay students_say={students_say_video} />


            {/* COURSE REVIEW SECTION */}
            <ReviewOnly review={course_review} />

            {/* PASSIVE INCOME SECTION */}
            <PassiveIncome p_income={passive_income} />

            {/* ABOUT US SECTION */}
            <AboutUs />

            {/* FREQUENTLY ASKED QUESTIONS */}
            <FreAQ data={FAQ} />

            {/* FIXED OFFER BANNER */}
            <div className="fixed bottom-0 left-0 w-full z-[1]">
                <OfferBanner offer_detail={offerBannerData} />
            </div>

            {/* Modal */}
            <ApplyModal
                open={showApplyModal}
                onClose={() => setShowApplyModal(false)}
            />
        </>
    );
};

export default Template;
