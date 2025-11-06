import bgDownload from '../../assets/images/bg_download.png';
import googlePlayBadge from '../../assets/images/gplay.svg';
import mobilePhoneImage from '../../assets/images/mobile_phone.svg';


const DownloadSection = () => {
    return (
        <div className='px-3 sm:px-14 lg:px-20'>
            <div
                className="w-full  bg-cover bg-center flex items-center justify-center px-6 pt-8 rounded-2xl"
                style={{ backgroundImage: `url(${bgDownload})` }}
            >
                <div className=" w-full flex flex-col md:flex-row  justify-between gap-10">

                    <div className="flex-1 text-left text-white flex flex-col justify-center ">
                        <h2 className="text-3xl  lg:text-4xl  xl:text-5xl font-bold leading-tight">
                            <span className="text-yellow lg:block">LEARN</span> <span>ANYWHERE ANYTIME</span>
                        </h2>

                        <p className="text-gray-300 mt-4 max-w-md">
                            Download our mobile app and access 100+ creator-led courses, live webinars, and personalized mentorship – all from your pocket.
                        </p>
                        <div >
                            <a href="https://play.google.com/store/apps/details?id=triggerupacademy.com ">
                            <img src={googlePlayBadge} alt="" className='my-6' />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center items-end">
                        <img src={mobilePhoneImage} alt="Phone" className="w-64 md:w-96 drop-shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;