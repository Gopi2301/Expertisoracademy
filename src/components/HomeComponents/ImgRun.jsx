import React, { memo } from 'react'
import Marquee from 'react-fast-marquee';


const ImgRun = memo(({ datas, dirc, speed, m, h }) => {
    return (
        <div className={`relative overflow-hidden ${m}`} style={{ willChange: 'transform' }}>
            <Marquee direction={dirc} speed={speed} gradient={false} className="relative" pauseOnHover={false}>
                {datas.map((value, index) => (
                    <div key={index} className="relative pr-5">
                        <img
                            src={value}
                            alt=""
                            className={`relative z-10 ${h} rounded-lg`}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
});

ImgRun.displayName = 'ImgRun';

export default ImgRun;