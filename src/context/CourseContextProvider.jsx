import React, { createContext, useState, useRef } from 'react'
import allBundleImage from '../assets/images/all_bundle.jpg';
import starIcon from '../assets/images/star.svg';
import bookIcon from '../assets/images/book.svg';
import scheduleIcon from '../assets/images/schedule.svg';
import mentorIcon from '../assets/optimized/becomeMentor/ment_icon.webp';
import affiliateCardImage from '../assets/images/affilate/affilate_card_img.svg';
import languageIcon from '../assets/images/lang_i.svg';
import sridharMentorIcon from '../assets/images/sridhar_ment_i.svg';
import threeDsMaxCard from '../assets/images/courses_card/threeDsmax.svg';
import raghulanMentorIcon from '../assets/optimized/courses/raghulan_ment_i.webp';
import solidworksCard from '../assets/images/courses_card/solidworks.svg';
import elavarasanMentorIcon from '../assets/optimized/courses/elavarasan_ment_i.webp';
import civil3dCard from '../assets/images/courses_card/civil3D.svg';



export const CourseContext = createContext()


const CourseContextProvider = (props) => {



    const courses = [
        {
            page_link: "/techbundle",
            img: allBundleImage,
            type: "bundle course",
            level: "All levels",
            star_i: starIcon,
            rating: 4.9,
            rating_persons: 7941,
            domain: "All-in-One Tech Career Bundle",
            // bundle
            bundle_i: bookIcon,
            bundle_tot_courses: "4 Courses",
            more_count: "+6more",
            // -----
            schedule_i: scheduleIcon,
            hours: "70h15m",
            ment_icon: mentorIcon,
            mentors: "Code Javid,Raghulann,sathesh",
            para: " Full Stack, Cloud (AWS & Azure), Linux Admin, Prompt Engineering, Data Science, VMware",
            language: "tamil",
            category: "technology",
        },


        // individual course
        {
            page_link: "/reels-affiliate-marketing-tamil",
            img: affiliateCardImage,
            type: "individual course",
            level: "All levels",
            star_i: starIcon,
            rating: 4.8,
            rating_persons: 3649,
            domain: "Learn Reels Affiliate Marketing",
            // individual course
            indi_lang_i: languageIcon,
            lang_detail: "tamil",
            // -------
            schedule_i: scheduleIcon,
            hours: "8h10m",
            ment_icon: sridharMentorIcon,
            mentors: "Sridhar S",
            para: " Amazon, Flipkart, Meesho, Secret Platform and more",
            language: "tamil",
            category: "Business",
        },

        // 3DMax
        {
            page_link: "/3dsmax-tamil",
            img: threeDsMaxCard,
            type: "individual course",
            level: "Beginner",
            star_i: starIcon,
            rating: 4.9,
            rating_persons: 4217,
            domain: "3DS Max Mastery Program",
            // individual course
            indi_lang_i: languageIcon,
            lang_detail: "Tamil",
            // -------
            schedule_i: scheduleIcon,
            hours: "15h",
            ment_icon: raghulanMentorIcon,
            mentors: "Raghulan Gowthaman",
            para: " Modeling, Texturing, Animation, Rendering and more.",
            language: "Tamil",
            category: "Civil",
        },

        // Amazon
        // {
        //     page_link: "/amazon-seller-tamil-course",
        //     img: assets.amazon,
        //     type: "individual course",
        //     level: "All levels",
        //     star_i: assets.star_i,
        //     rating: 4.9,
        //     rating_persons: 2376,
        //     domain: "Amazon Business Profit Blueprint",
        //     // individual course
        //     indi_lang_i: assets.lang_i,
        //     lang_detail: "Tamil",
        //     // -------
        //     schedule_i: assets.schedule,
        //     hours: "6h",
        //     ment_icon: assets.swaminathan_ment_i,
        //     mentors: "Swaminathan yuvaraj",
        //     para: " Amazon Ads,Scaling Strategies,Listing Optimization,Product Research",
        //     language: "Tamil",
        //     category: "Bussiness",
        // },


        // solidworks
        {
            page_link: "/solidworks-tamil",
            img: solidworksCard,
            type: "individual course",
            level: "All levels",
            star_i: starIcon,
            rating: 4.8,
            rating_persons: 963,
            domain: "SolidWorks Design Mastery",
            // individual course
            indi_lang_i: languageIcon,
            lang_detail: "Tamil",
            // -------
            schedule_i: scheduleIcon,
            hours: "12h",
            ment_icon: elavarasanMentorIcon,
            mentors: "Elavarasan S",
            para: "3D Modeling, Assembly, Simulation, Sheet Metal, Drafting",
            language: "Tamil",
            category: "Mechanical",
        },


        // civil3D
        {
            page_link: "/civil3d-tamil",
            img: civil3dCard,
            type: "individual course",
            level: "All levels",
            star_i: starIcon,
            rating: 4.9,
            rating_persons: 3485,
            domain: "AutoCAD Civil 3D",
            // individual course
            indi_lang_i: languageIcon,
            lang_detail: "Tamil",
            // -------
            schedule_i: scheduleIcon,
            hours: "12h",
            ment_icon: raghulanMentorIcon,
            mentors: "Raghulan Gowthaman",
            para: "Site Design, Surveying Tools, Transportation Design, Land Development 3D Visualization",
            language: "Tamil",
            category: "Civil",
        },




    ]


    const categories = [
        "Technology",
        "Business",
        "Civil",
        "Mechanical",
        "Medical",
        "Electrical",
    ];

    const languages = [
        "English",
        "Tamil",
        "Telugu",
        "Hindi",
        "Malayalam",
        "French",
    ]

    const mentors = [
        "Davis Philips",
        "Ann Vaccaro",
        "Angel Gouse",
        "Giana Herwitz",
        "Lindsey Workman"
    ]

    const typeOfCourse = [
        "All",
        "Bundle course",
        "Individual course",
    ]

    const [selectedCategories, setSelectedCategories] = useState([].map(item => item.toLowerCase()));
    const [courseType, setCourseType] = useState("all")


    const handleCheckboxChange = (category) => {
        const lowerCategory = category.toLowerCase();
        setSelectedCategories((prev) =>
            prev.includes(lowerCategory)
                ? prev.filter((item) => item !== lowerCategory)
                : [...prev, lowerCategory]
        );
    };


    // scroll
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -310, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 310, behavior: 'smooth' });
    };



    const value = { courses, selectedCategories, setSelectedCategories, handleCheckboxChange, categories, languages, mentors, scrollRef, scrollLeft, scrollRight, typeOfCourse,courseType,setCourseType }
    return (
        <CourseContext.Provider value={value}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider