import moneyIcon from "../../assets/images/affilate/money.svg"
import StartButton from "../StartButton"
import marketingAffiliate from '../../constants/data/marketingAffiliate'

const Hero = () => {
    return (
        <div>
            <div className='bg-black px-3 sm:px-14 lg:px-20  '>
                <div className="  mt-8 sm:mt-16 lg::mt-20 ">

                    <div className="">
                        <div className="flex justify-center">
                            <div className="flex gap-2 items-center p-2 bg-[#02020299] rounded-lg border border-white backdrop-blur-[18px]">
                                <img src={moneyIcon} alt="" />
                                <p className="text-[#FFFFFF] font-inter font-normal not-italic text-[12px] sm:text-base leading-[100%] tracking-[0%] text-center">Make <span className="text-yellow font-inter font-normal not-italic text-base leading-[100%] tracking-[0%] text-center">₹40-50K</span> per month easily</p>
                            </div>
                        </div>

                        <div className="my-5">
                            <h2 className="font-clash font-semibold not-italic text-[28px] sm:text-[36px] md:text-[40px] lg:text-[50px] leading-tight tracking-normal text-center leadin">
                                <span className="text-yellow">Earn 4x</span> More Than Your <span className="text-yellow">9-5</span> With a Side Hustle <span className="xl:block">That Works While You sleep</span>
                            </h2>
                            <p className="font-inter  font-normal not-italic text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]  tracking-[0%] text-center leading-tight mt-2">{marketingAffiliate.hero_description}</p>
                        </div>

                        <div className="hidden sm:flex justify-center">
                            {marketingAffiliate?.start_button && (
                                <StartButton data={marketingAffiliate.start_button} />
                            )}
                        </div>



                    </div>



                    {/* desktop */}
                    <div className=" hidden sm:flex justify-center">
                        <img width={"100%"} src={marketingAffiliate.hero_bg} alt="" />
                    </div>

                    {/* mobile */}
                    <div className="sm:hidden  flex justify-center">
                        <img width={"100%"} src={marketingAffiliate.hero_bg_mobile} alt="" />
                    </div>


                </div>
            </div>


            <div
                className="border-[4px] border-solid"
                style={{
                    borderImageSource: 'radial-gradient(48.58% 104146.22% at 51.42% 0%, #FFFFFF 0%, #FFE100 36.54%, #786A00 66.83%, #271800 100%)',
                    borderImageSlice: 1,
                }}
            ></div>
        </div>

    )
}

export default Hero


