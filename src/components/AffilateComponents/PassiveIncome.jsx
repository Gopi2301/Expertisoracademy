import React from 'react'
import StartButton from '../StartButton'
import Heading from '../Heading'



const PassiveIncome = ({ p_income }) => {
    return (
        <>
            <div>
                <div   className="px-3 sm:px-14 lg:px-20 py-10 md:py-20 bg-cover bg-center"
  style={{
    backgroundImage: p_income.bg
      ? `linear-gradient(180deg, rgba(18,10,0,0.8) 0%, rgba(70,48,0,0.8) 100%), url(${p_income.bg})`
      : "none",
    backgroundColor: p_income.bg ? "transparent" : "black",
  }}
>
                    <div>
                        <Heading
                            head={p_income.head}
                            highlights={p_income.highlights}
                            {...(p_income.p1 ? { p1: p_income.p1 } : {})}
                            {...(p_income.p2 ? { p2: p_income.p2 } : {})}
                        />

                        <div className='mt-10 lg:mt-20 md:grid grid-cols-2 gap-6 flex flex-col md:items-center'>

                            {/* card */}
                            <div className='flex md:justify-end'>
                                <div className='flex flex-col gap-3 lg:gap-4 p-6 bg-[#000000BF] border border-[#2D2D2D] rounded-2xl'>
                                    <div className='flex gap-1 items-end'>
                                        <h5 className='font-inter font-bold text-[40px] leading-[100%] tracking-[0] text-yellow'>{p_income.card?.price}</h5>
                                        <h6 className='font-inter font-normal text-[18px] leading-[100%] tracking-[0] line-through text-[#A7A7A7]'>{p_income.card?.original_price}</h6>
                                    </div>

                                    <h3 className='font-clash font-semibold text-[24px] sm:text-[28px] leading-tight tracking-[0] text-[#FFFFFF]'>{p_income.card?.name}</h3>

                                    <div className=' lg:flex gap-1 items-center'>
                                        <div className='flex gap-1 items-center'>
                                            <img src={p_income.card?.token_img} alt="" />
                                            <p className='font-inter font-normal text-[16px] leading-[100%] tracking-[0] text-[#FFFFFF]'>Coupon Code</p>
                                        </div>
                                        <div className='inline-flex gap-1 border border-dashed border-[#ffff] [border-dasharray:5_2] items-center p-1 mt-2 lg:mt-0'>
                                            <p className='font-inter font-semibold text-[14px] leading-[16px] tracking-[10%] align-middle text-[#FFFFFF]'>{p_income.card?.coupon_code}</p>
                                            <p className='text-yellow bg-[#FFF2001A] font-inter font-normal text-[12px] leading-[16px] tracking-[0%] align-middle py-[2px] px-2'>{p_income.card?.discount_percent}</p>
                                        </div>
                                    </div>

                                    <div className='flex gap-1 items-center mb-2'>
                                        <img src={p_income.card?.time} alt="" />
                                        <p className='text-[#fffff] font-inter font-normal text-[14px] leading-[16px] align-middle tracking-[0]'>Code expires in <span className='text-[#FF4343]'>{p_income.card?.expires_in}</span></p>
                                    </div>


                                    <StartButton data={p_income.start_button}/>
                                </div>
                            </div>

                            <div>
                                <h5 className='font-inter font-semibold text-[18px] leading-[100%] tracking-[0] text-[#FFFFFF] mb-5'>{p_income.what_you_get?.head}</h5>
                                <div className='flex flex-col gap-2'>
                                    {p_income.what_you_get?.benefit?.map((data, i) => (
                                        <div key={i} className='flex gap-2'>
                                            <img src={p_income.what_you_get?.tick_img} alt="" />
                                            <p>{data}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PassiveIncome