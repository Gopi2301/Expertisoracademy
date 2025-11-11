import React from 'react'
import mentorOne from '../../assets/optimized/mentorsRun/m1.webp'
import mentorTwo from '../../assets/optimized/mentorsRun/m2.webp'
import mentorThree from '../../assets/optimized/mentorsRun/m3.webp'
import mentorFour from '../../assets/optimized/mentorsRun/m4.webp'
import Marquee from 'react-fast-marquee'


const MentorsRun = () => {
    const datas=[
        mentorOne,
        mentorTwo,
        mentorThree,
        mentorFour,
        mentorOne,
        mentorTwo,
        mentorThree,
        mentorFour,
        mentorOne,
        mentorTwo,
        mentorThree,
        mentorFour,
    ]

    return (
        <>
            <div className='pb-10 sm:pb-14 lg:pb-20'>
                <Marquee speed={80}  >
                    {datas.map((value, index) => (
                        <div key={index} className='mr-4 sm:mr-10'>
                              <img src={value} alt="" className='rounded-lg w-[160px] h-[160px] sm:w-[280px] sm:h-[280px]'/>
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    )
}

export default MentorsRun