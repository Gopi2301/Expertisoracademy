import React from 'react'
import Heading from '../Heading'
import { pages } from '../../constants/pages'
import keyBenefitsImage from '../../assets/images/BecomeMentor/key_ben_mentors.svg';


const KeyBenefits = () => {
  return (
    <div className='py-[80px] md:py-[160px] px-3 sm:px-14 lg:px-20'>
      <Heading head={pages.become_mentors.key_benefits.title} highlights={pages.become_mentors.key_benefits.highlights} p1={pages.become_mentors.key_benefits.p1} />

      <div className='mt-10 md:mt-14'>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className='flex justify-center items-center'>
            <img src={keyBenefitsImage} className='lg:w-full' alt="" />
          </div>

          {/* Right column - sticky cards */}
          <div className="flex flex-col gap-5">
            {pages.become_mentors.key_benefits.joining_benefits.map((data, i) => (
              <div
                key={i}
                className="sticky top-[100px] p-5 xl:p-9 border border-[#323232] 
              bg-black bg-[radial-gradient(126.8%_86.25%_at_50%_100%,#4E3E00_0%,rgba(0,0,0,0.3)_66.08%)] 
              bg-blend-screen rounded-lg"
              >
                <img src={data.icon} alt="" />
                <h5 className="mt-[18px] mb-2 font-clash font-semibold text-[28px] leading-tight">
                  {data.title}
                </h5>
                <p className="font-inter font-normal text-[16px] leading-[20px] text-[#BABABA]">
                  {data.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyBenefits