import React from 'react'
import threeDMax from '../../constants/data/threeDMax'
import StartButton from '../StartButton'
import Download from '../Download'
import heroVideo from '../../assets/images/3DMax/videoBg.mp4'


const Hero = () => {
  return (
    <>
      <div className='  relative w-full h-screen'>
        <video src={heroVideo} autoPlay loop muted className='w-full h-full object-cover'/>
        <div className='px-3 sm:px-14 lg:px-20 absolute top-0 flex flex-col justify-center items-center h-full w-full'>
          <div className='flex justify-center'>
            <div className='flex gap-2 p-2 bg-[#02020299] border border-[#FFFFFF] rounded-lg'>
              <img src={threeDMax.hero_section.icon.threed_icon} alt="" />
              <p>{threeDMax.hero_section.icon.para}</p>
            </div>
          </div>


          <div className='my-5 md:my-10'>
            <h2 className='font-clash font-semibold text-[28px] md:text-[35px] lg:text-[50px] leading-tight tracking-[0%] text-center'><span className='lg:block'>Confused by <span className='text-yellow'>complex 3D software</span></span> and don't know where to start?</h2>
            <p className='mt-3 lg:max-w-6xl md:mt-5 font-inter font-normal text-[14px] sm:text-[20px] leading-tight tracking-[0%] text-center text-[#DBDBDB]'>{threeDMax.hero_section.para}</p>
          </div>

          <div className='sm:flex-row flex flex-col   justify-center gap-3 w-full'>
            <StartButton data={threeDMax.start_button}/>

            <Download data={threeDMax.download}/>
          </div>



          <div className="flex justify-center sm:gap-2 flex-wrap mt-4">
            {threeDMax.hero_section.features.map((data, i) => (
              <div key={i} className="flex items-center gap-2 p-2">
                <img src={data.i} alt="" />
                <p className="font-inter font-normal text-[14px] sm:text-[16px] leading-[20px] whitespace-nowrap">
                  {data.para}
                </p>
              </div>
            ))}
          </div>




        </div>
      </div>
    </>
  )
}

export default Hero