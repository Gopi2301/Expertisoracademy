import React from 'react'
import studworkBackground from '../../assets/images/studwork.png'
import companyLogo1 from '../../assets/images/studetsworkat/c1.svg'
import companyLogo2 from '../../assets/images/studetsworkat/c2.svg'
import companyLogo3 from '../../assets/images/studetsworkat/c3.svg'
import companyLogo4 from '../../assets/images/studetsworkat/c4.svg'
import companyLogo5 from '../../assets/images/studetsworkat/c5.svg'
import companyLogo6 from '../../assets/images/studetsworkat/c6.svg'
import companyLogo7 from '../../assets/images/studetsworkat/c7.svg'
import companyLogo8 from '../../assets/images/studetsworkat/c8.svg'
import Marquee from 'react-fast-marquee'


const StudWorksAt = () => {

  const comp=[
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo6,
    companyLogo7,
    companyLogo8,
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo6,
    companyLogo7,
    companyLogo8,
  ]

  return (
    // <div className='my-32 w-full'   style={{
    // backgroundImage: `url(${assets.studwork})`,
    // backgroundRepeat: 'no-repeat',         // or 'no-repeat', 'repeat-x', etc.
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',}}>
    //   <div className='py-20'>
    //       <h6 className='mt-4'>Where do our students works at</h6>
    //   </div>
    // </div>

    //     <div
    //   className="w-full  my-32"
    //   style={{
    //     backgroundImage: `url(${assets.studwork})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //   }}
    // >
    //   <h2 className="text-white text-center text-xl font-medium ">
    //     Where do our students work at
    //   </h2>

    //   <div className="flex flex-wrap justify-center items-center gap-8 ">
    //     <img src={assets.ex_logo} alt="Virtua" className="h-10 object-contain" />

    //   </div>
    // </div>


    <div>
      <div className=" my-20" style={{
    backgroundImage: `url(${studworkBackground})`,
    backgroundRepeat: 'no-repeat',         // or 'no-repeat', 'repeat-x', etc.
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    }}>
        <h4 className='py-6 xl:py-8 text-white text-center text-[20px] leading-[24px] font-medium'>Where do our students works at</h4>
        <div className='pb-7'>
          <Marquee speed={60} pauseOnHover={false} style={{ willChange: 'transform' }}>
            {comp.map((value, index) => (
              <div key={index} className='mr-20 '>
                  <img src={value} alt="" loading="lazy" decoding="async" />
              </div>
            ))}
          </Marquee>
        </div>

      </div>

    </div>

  )
}

export default StudWorksAt