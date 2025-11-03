import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const BundleCourse = ({ width, course }) => {

    return (
        <Link to={`${course.page_link}`}>
            <div className='h-full'>

                {/* Image */}
                {/* bg-[#1D1D1D] */}
                <div className=' h-full flex flex-col p-3 bg-black  rounded-lg text-white text-left cursor-pointer border border-[#7B6E3E] bg-[radial-gradient(circle_at_bottom_center,#705900_0%,rgba(0,0,0,0.3)_38%),radial-gradient(circle_at_top_right,#705900_0%,rgba(0,0,0,0.3)_36%)] bg-blend-screen' style={{ width }}>

                    <div>
                        <img src={course.img} alt="AWS" className="w-full rounded-md" />
                    </div>

{/* justify-between */}
                    <div className='flex flex-col  gap-[6px] mt-2 h-full'>
                        <div className='flex justify-between items-center'>
                            <p className='py-[6.5px] px-[8px] bg-[#00DC281A] text-[#00DC28] rounded-[4px] font-inter font-medium text-[12px] leading-[100%] tracking-[0] align-middle'>{course.level}</p>
                            <div className='flex gap-1 items-center'>
                                <img src={course.star_i} alt="" className='' />
                                <p className='text-white'>{course.rating} <span>({course.rating_persons})</span></p>
                            </div>
                        </div>
                        {/* Title */}
                        <h3 className="font-semibold text-[16px] leading-[20px] ">{course.domain}</h3>

                        {/* Course Info */}
                        <div className=" flex items-center text-[#8A8A8A] text-[13px] space-x-3">
                            {
                                course.bundle_tot_courses && (<div className="flex items-center space-x-1">
                                    <img src={course.bundle_i} alt="" />
                                    <span className='font-normal text-[14px] leading-[20px] align-middle'>{course.bundle_tot_courses} </span>
                                </div>)
                            }
                            {
                                course.indi_lang_i && (<div className="flex items-center space-x-1">
                                    <img src={course.indi_lang_i} alt="" />
                                    <span className='font-normal text-[14px] leading-[20px] align-middle'>{course.lang_detail} </span>
                                </div>)
                            }
                            <div className="flex items-center space-x-1">
                                <img src={course.schedule_i} alt="" />
                                <span className='font-normal text-[14px] leading-[20px] align-middle'>{course.hours}</span>
                            </div>
                        </div>

                        {/* Instructors */}
                        <div className=" flex items-center  gap-1">
                            {/* Avatars */}
                            <div className="">
                                <img src={course.ment_icon} alt="" />
                            </div>
                            {/* Names */}
                            <p className=" font-inter font-normal text-[14px]  leading-[20px] align-middle flex items-center gap-1">
                                <span className={`truncate ${course.bundle_i && 'max-w-[110px]'}  block`}>{course.mentors}</span>
                                <span>{course.more_count}</span>
                            </p>
                        </div>

                        {/* Description */}
                        <p className="  font-inter font-normal text-[14px] leading-[20px] align-middle line-clamp-2">
                            {course.para}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BundleCourse














// import React from 'react'
// import { assets } from '../../assets/assets'


// const BundleCourse = ({ width }) => {
//     return (
//         <>
//             <div className='h-full'>

//                 <div className={`${width ? null : "bg-[#121212] text-white rounded-lg p-3 space-y-2 mt-6 sm:mt-10 lg:mt-5"} `} style={{ width }}>
//                     {/* Header */}
//                     {/* <h2 className="font-inter font-semibold text-[16px] leading-[24px] align-middle">Bundle Course</h2> */}

//                     {/* Image */}
//                     <div className='p-3 bg-[#1D1D1D] space-y-4 rounded-lg text-white'>
//                         <div className="rounded-xl overflow-hidden">
//                             <img
//                                 src={assets.awscard} // Replace with actual image
//                                 alt="AWS"
//                                 className="w-full h-auto object-cover"
//                             />
//                         </div>

//                         {/* Badges */}
//                         <div className="flex gap-2 mt-2">
//                             <span className="bg-[#ffe100] flex gap-1 items-center text-black font-semibold text-[12px] leading-[14px] text-center align-middle uppercase px-1 py-[2px] rounded-md">
//                                 <img src={assets.top_rated} alt="" /> TOP RATED
//                             </span>
//                             <span className="bg-[linear-gradient(94.6deg,_#000000_2.3%,_#2D2B00_99.99%)] flex gap-1 items-center text-yellow font-inter font-semibold text-[12px] leading-[14px] text-center align-middle uppercase px-2 py-[2px] rounded-md">
//                                 <img src={assets.crown} alt="" /> PREMIUM
//                             </span>
//                         </div>

//                         {/* Title */}
//                         <h3 className="font-semibold text-[16px] leading-[20px] align-middle">
//                             Complete Data Science Mastery Courses Bundle Package
//                         </h3>

//                         {/* Course Info */}
//                         <div className="flex items-center text-[#8A8A8A] text-[13px] space-x-3">
//                             <div className="flex items-center space-x-1">
//                                 <img src={assets.book} alt="" />
//                                 <span className='font-normal text-[14px] leading-[20px] align-middle'>4 Courses</span>
//                             </div>
//                             <div className="flex items-center space-x-1">
//                                 <img src={assets.schedule} alt="" />
//                                 <span className='font-normal text-[14px] leading-[20px] align-middle'>70h15m</span>
//                             </div>
//                         </div>

//                         {/* Instructors */}
//                         <div className="flex items-center mt-2 gap-1">
//                             {/* Avatars */}
//                             <div className="">
//                                 <img src={assets.ment_icon} alt="" />
//                             </div>
//                             {/* Names */}
//                             <p className="text-[#8A8A8A] font-inter font-normal text-[9px] xl:text-[13px] leading-[20px] align-middle">
//                                 Sathesh PC,Raghulan,+3 more
//                             </p>
//                         </div>

//                         {/* Description */}
//                         <p className=" text-[#8A8A8A] font-inter font-normal text-[14px] leading-[20px] align-middle">
//                             Pandas and NumPy, SQL, TensorFlow, PyTorch, Tableau and Matplotlib courses included.
//                         </p>

//                         {/* Learn More Button */}
//                         <button className="font-medium text-[14px] leading-[100%] align-middle w-full mt-2 border border-[#8A8A8A] text-white  py-3 rounded-md hover:bg-gray-800 transition">
//                             Learn More
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BundleCourse