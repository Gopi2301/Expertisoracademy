import React, { useState, useEffect, useRef, memo } from "react";
import Lottie from "lottie-react";
// Lazy load large Lottie JSON files to reduce initial bundle size
const mentors_run = () => import("../../../src/mentors_run.json").then(m => m.default);
const mentors_mobile = () => import("../../../src/mentors_mobile.json").then(m => m.default);
import StartButton from "../StartButton";
import { pages } from "../../constants/pages";

const Community = memo(() => {
    const [isVisible, setIsVisible] = useState(false);
    const [mentorsRunData, setMentorsRunData] = useState(null);
    const [mentorsMobileData, setMentorsMobileData] = useState(null);
    const containerRef = useRef(null);

    // Lazy load Lottie JSON files when component mounts
    useEffect(() => {
        mentors_run().then(setMentorsRunData);
        mentors_mobile().then(setMentorsMobileData);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin: '100px',
                threshold: 0.1,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <div className="relative w-full" ref={containerRef}>
            {/* Fullscreen Lottie Background */}
            {isVisible && mentorsRunData && mentorsMobileData && (
                <>
                    <Lottie
                        animationData={mentorsRunData}
                        loop
                        autoplay={isVisible}
                        className="w-full xl:h-[500px] roundd-lg sm:block hidden"
                        rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice',
                            progressiveLoad: true,
                        }}
                    />

                    {/* mobile below md */}
                    <Lottie
                        animationData={mentorsMobileData}
                        loop
                        autoplay={isVisible}
                        className="block sm:hidden w-full object-contain"
                        rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice',
                            progressiveLoad: true,
                        }}
                    />
                </>
            )}
            {/* </div> */}



            {/* Left Content */}
            <div className="absolute top-0 z-20 px-3 sm:pl-8 lg:pl-20 py-16 flex flex-col gap-3 justify-start sm:justify-center w-full md:max-w-3xl lg:max-w-4xl h-full">
                <h3 className="text-[28px] sm:text-[20px] md:text-[26px] lg:text-[36px] font-bold uppercase  leading-snug bg-gradient-to-r from-white to-[#FFFF9C] bg-clip-text text-transparent">
                    Join a vibrant mentor community <br /> and unleash your potential!
                </h3>
                <p className="text-[14px] md:text-[16px] text-gray-300 text-sm sm:text-base leading-relaxed">
                    Connect with passionate educators, creators, and professionals from
                    around the world. Grow your network, share your knowledge, and make a
                    real impact together.
                </p>

                <div className="sm:w-1/2">
                    <StartButton data={pages?.become_mentors.start_button} />
                </div>
            </div>


        </div>
    );
});

Community.displayName = 'Community';

export default Community;


