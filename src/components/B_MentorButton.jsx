import React from 'react'
import rightArrow from '../assets/images/affilate/r_long_arrow.svg'

const B_MentorButton = () => {
    return (
        <div>
            <a
                href="#"
            >
                <div className="flex justify-center gap-1 rounded-[4px] px-[18px] py-[12px] sm:py-[14px] bg-yellow items-center w-full sm:w-[233px] sm:min-w-[233px] ">
                    <p className="text-black font-inter font-semibold text-[18px] leading-[100%]">
                        Become a Mentor
                    </p>
                    <img src={rightArrow} alt="Right arrow" />
                </div>
            </a>
        </div>)
}

export default B_MentorButton