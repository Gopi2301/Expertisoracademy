import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const BundleCourse = ({ width, course, onClick }) => {
    const card = (
        <div className='h-full'>

            {/* Image */}
            <div className=' h-full flex flex-col p-3 bg-black  rounded-lg text-white text-left cursor-pointer border border-[#7B6E3E] bg-[radial-gradient(circle_at_bottom_center,#705900_0%,rgba(0,0,0,0.3)_38%),radial-gradient(circle_at_top_right,#705900_0%,rgba(0,0,0,0.3)_36%)] bg-blend-screen' style={{ width }}>

                <div>
                    <img src={course.img} alt={course.domain || "course"} className="w-full rounded-md" />
                </div>

                <div className='flex flex-col  gap-[6px] mt-2 h-full'>
                    <div className='flex justify-between items-center'>
                        <p className='py-[6.5px] px-[8px] bg-[#00DC281A] text-[#00DC28] rounded-[4px] font-inter font-medium text-[12px] leading-[100%] tracking-[0] align-middle'>{course.level}</p>
                        <div className='flex gap-1 items-center'>
                            <img src={course.star_i} alt="" className='' />
                            <p className='text-white'>{course.rating} <span>({course.rating_persons})</span></p>
                        </div>
                    </div>

                    <h3 className="font-semibold text-[16px] leading-[20px] ">{course.domain}</h3>

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
                        {
                            course.hours &&
                            <div className="flex items-center space-x-1">
                                <img src={course.schedule_i} alt="" />
                                <span className='font-normal text-[14px] leading-[20px] align-middle'>{course.hours}</span>
                            </div>
                        }

                    </div>

                    <div className=" flex items-center  gap-1">
                        <div className="">
                            <img className='h-7 w-7 rounded-full object-contain' src={course.ment_icon} alt="" />
                        </div>
                        <p className=" font-inter font-normal text-[14px]  leading-[20px] align-middle flex items-center gap-1">
                            <span className={`truncate ${course.bundle_i && 'max-w-[110px]'}  block`}>{course.mentors}</span>
                            <span>{course.more_count}</span>
                        </p>
                    </div>

                    <p className="  font-inter font-normal text-[14px] leading-[20px] align-middle line-clamp-2">
                        {course.para}
                    </p>
                </div>
            </div>
        </div>
    )

    // if parent passed onClick, render a div with handler (keeps layout exact)
    if (onClick) {
        return (
            <div
                onClick={onClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onClick() }}
            >
                {card}
            </div>
        )
    }

    // default behaviour (unchanged)
    return (
        <Link to={`${course.page_link}`}>
            {card}
        </Link>
    )
}

export default BundleCourse






