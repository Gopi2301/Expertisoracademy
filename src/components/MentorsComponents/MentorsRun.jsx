import React from 'react'
import mentorOne from '../../assets/images/mentors/m1.svg'
import mentorTwo from '../../assets/images/mentors/m2.svg'
import mentorThree from '../../assets/images/mentors/m3.svg'
import mentorFour from '../../assets/images/mentors/m4.svg'
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