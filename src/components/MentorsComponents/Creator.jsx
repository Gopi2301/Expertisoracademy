import React from 'react'
import creatorHeroOne from '../../assets/images/cre1.svg'
import creatorHeroTwo from '../../assets/images/cre2.svg'
import separatorBorder from '../../assets/images/cre_border.svg'
import checkCircleIcon from '../../assets/images/check_circle.svg'
import errorIcon from '../../assets/images/error.svg'

const Creator = () => {
    const creator = [
        'Discover the joy of learning from anywhere! Our online platform makes education accessible and easy for all students.',
        'Learn how to turn your passions into a profitable side hustle and earn extra income!',
        'Learn with engaging videos and connect with a lively community of students for exciting educational experiences!',
        'Have your questions answered right away! We make it simple for students to get the help they need.',
        'Take action for quick results to keep students motivated!',
        'Embrace New Learnings and Experiences!" This inspires students to seek opportunities.',
    ]

    const nonCreator = [
        'Learning is very exclusive and often required to visit a place to learn things.',
        'Mostly you’ll be learning only theory, like a textbook and there is no use of it with out any outcome.',
        'Boring lectures create a tense classroom atmosphere, making it hard for students to stay engaged.',
        "Queries may take time to resolve, and it's hard to get help when you need it.",
        "Progress is slow and results are hard to see.",
        "Same old advice from 10 years ago and there may be little learning and experiences.",
    ]
    return (
        <div>
            <div className='px-3 sm:px-14 lg:px-20 pt-20'>
                <div className='text-center '>
                    <h2 className='text-[#FFFFFF]  font-clash font-semibold text-[28px] sm:text-[40px] leading-[100%] tracking-[0] text-center align-middle uppercase'>Why <span className='text-yellow '>Creator</span> mentors?</h2>
                    <p className='text-[#B8B8B8] font-inter font-normal text-[14px] sm:text-[18px] leading-[24px] tracking-[0] text-center align-middle mt-3'>Creator mentors inspire and guide others, transforming dreams into <span className='md:block'>innovative solutions that benefit all.</span></p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-stretch my-14'>
                    <div className='p-6 bg-[#161616] flex flex-col gap-5 rounded-lg h-full'>
                        <img src={creatorHeroOne} alt="" className='max-h-[280px]' />
                        <h3 className='font-clash font-semibold text-[20px] sm:text-[28px] leading-none tracking-[0] text-center uppercase'>Creator mentor</h3>
                        <img src={separatorBorder} alt="" />
                        <div className='flex flex-col gap-6'>
                            {
                                creator.map((data, index) => (
                                    <div key={`creator-${index}`} className='flex gap-4 '>
                                        <img src={checkCircleIcon} alt="" className='w-6 h-6' />
                                        <p className='font-inter font-normal text-base leading-6 align-middle'>{data}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div className='p-6 bg-[#161616] flex flex-col gap-5 rounded-lg h-full'>
                        <img src={creatorHeroTwo} alt="" className='max-h-[280px]' />
                        <h3 className='font-clash font-semibold text-[20px] sm:text-[28px] leading-none tracking-[0] text-center uppercase'>Non-Creator mentor</h3>
                        <img src={separatorBorder} alt="" />
                        <div className='flex flex-col gap-6'>
                            {
                                nonCreator.map((data, index) => (
                                    <div key={`non-creator-${index}`} className='flex gap-4 '>
                                        <img src={errorIcon} alt="" className='w-6 h-6' />
                                        <p className='font-inter font-normal text-base leading-6 align-middle'>{data}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Creator