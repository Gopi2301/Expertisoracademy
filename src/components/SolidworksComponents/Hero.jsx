import React from 'react';
import StartButton from '../StartButton';
import Download from '../Download';

const Hero = ({ data, startCTA, downloadCTA }) => {
  if (!data) return null;

  const { icon, para, features = [], car_video: videoSrc } = data;

  return (
    <section className="pb-5 pt-10 sm:pt-14 lg:pt-16">
      <div className="px-3 sm:px-14 lg:px-20">
        {icon ? (
          <div className="flex w-full justify-center">
            <div className="flex items-center gap-2 rounded-lg border border-gray-600/60 bg-[#1B1B1B99] px-3 py-2 text-center">
              {icon.threed_icon && (
                <img src={icon.threed_icon} alt="" className="h-8 w-8 sm:h-10 sm:w-10" />
              )}
              <p className="font-inter text-[12px] text-white sm:text-[16px]">
                {icon.para ?? (
                  <>
                    Learn from Industry Expert with 3+{' '}
                    <span className="block sm:inline">years of experience</span>
                  </>
                )}
              </p>
            </div>
          </div>
        ) : null}

        <div className="my-6 text-center md:my-10">
          <h1 className="font-clash text-[28px] font-semibold leading-tight text-white sm:text-[36px] lg:text-[50px]">
            Struggling to Land <span className="text-yellow">Core Mechanical Jobs</span>?{' '}
            <span className="block lg:inline">
              Master SolidWorks &amp; Land <span className="text-yellow">₹7LPA+</span> Job
            </span>
          </h1>
          {para && (
            <p className="mt-4 font-inter text-[14px] leading-tight text-[#DBDBDB] sm:text-[18px]">
              {para}
            </p>
          )}
        </div>

        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <StartButton data={startCTA} />
          <Download data={downloadCTA} />
        </div>

        {features.length > 0 && (
          <ul className="mt-6 flex flex-wrap justify-center gap-3 text-left">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 rounded-md bg-[#151515] px-3 py-2 text-white"
              >
                {feature.i && <img src={feature.i} alt="" className="h-6 w-6" />}
                <span className="font-inter text-[14px] leading-[20px] sm:text-[16px]">
                  {feature.para}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {videoSrc && (
        <div className="relative mt-8 overflow-hidden rounded-2xl px-3 sm:px-14 lg:px-20">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl border border-[#2A2A2A]"
          />
        </div>
      )}
    </section>
  );
};

export default Hero;