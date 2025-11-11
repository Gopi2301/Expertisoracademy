import React from 'react';
import StartButton from '../StartButton';
import Download from '../Download';
import civilHeroBackground from '../../assets/images/civil3D/civil3D_hero_bg.svg';

const Hero = ({ data, startCTA, downloadCTA }) => {
  if (!data) return null;

  const { icon, para, features = [] } = data;

  return (
    <section className="relative overflow-hidden bg-black">
      <img
        src={civilHeroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative px-3 pb-16 pt-16 sm:px-14 lg:px-20 lg:pt-20">
        {icon ? (
          <div className="flex justify-center">
            <div className="flex items-center gap-2 rounded-lg border border-gray-600/50 bg-[#1B1B1B99] px-3 py-2">
              {icon.threed_icon && (
                <img src={icon.threed_icon} alt="" className="h-8 w-8 sm:h-10 sm:w-10" />
              )}
              <p className="font-inter text-[12px] text-white sm:text-[16px]">
                {icon.para}
              </p>
            </div>
          </div>
        ) : null}

        <div className="mt-6 text-center md:mt-10">
          <h1 className="font-clash text-[28px] font-semibold leading-tight text-white sm:text-[36px] lg:text-[50px]">
            <span className="text-yellow">Struggling</span> to Build a Core{' '}
            <span className="text-yellow">Civil Career</span>?{' '}
            <span className="block lg:inline">
              Master Civil 3D and Land <span className="text-yellow">₹10LPA+</span> Job
            </span>
          </h1>
          {para && (
            <p className="mt-4 font-inter text-[14px] leading-tight text-[#DBDBDB] sm:text-[18px]">
              {para}
            </p>
          )}
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <StartButton data={startCTA} />
          <Download data={downloadCTA} />
        </div>

        {features.length > 0 && (
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
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
    </section>
  );
};

export default Hero;
