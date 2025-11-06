import React from 'react'
import starOutline from '../../assets/images/star_outline.svg';
import studentOutline from '../../assets/images/stud_outline.svg';
import bookOutline from '../../assets/images/book_outline.svg';
import instructorImage from '../../assets/images/inst_sathish.svg';
import instituteLogo from '../../assets/images/ins_ex_logo.svg';
import instagramLogo from '../../assets/images/insta.svg';
import xLogo from '../../assets/images/x.svg';
import youtubeLogo from '../../assets/images/youtube.svg';
import linkedinLogo from '../../assets/images/linkedin.svg';
import linkIcon from '../../assets/images/link_icon.svg';

import { FaInstagram, FaXTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa6';
import { LuExternalLink } from "react-icons/lu";

const Instructor = () => {
    const inst = [
        { img: starOutline, name: '4.7 Ratings' },
        { img: studentOutline, name: '1025 Students' },
        { img: bookOutline, name: '4 Courses' }
    ]

    const sm = [
        { logo: instagramLogo, name: 'Instagram', link_i: linkIcon, link: "https://www.instagram.com" },
        { logo: xLogo, name: 'X (Twitter)', link_i: linkIcon, link: "https://twitter.com" },
        { logo: youtubeLogo, name: 'YouTube', link_i: linkIcon, link: "https://www.youtube.com" },
        { logo: linkedinLogo, name: 'LinkedIn', link_i: linkIcon, link: "https://www.linkedin.com" },
    ]

    const para=[
        'A college broken kid with unstable internet and a passion for tech education at the age of 21, I founded Expertisor Academy to transform traditional education making it core, accessible, and fun to learn directly from top tech creator mentors.',

        "Today, we've helped hundreds of students build industry-ready skills and land their dream IT jobs.Let's connect to discuss technology, career growth, or how we can create a meaningful impact together!",

        "At just 21 years old, I was a college student facing the challenges of a broken home and unreliable internet. Despite these obstacles, my passion for technology and education drove me to take a leap of faith and establish Expertisor Academy."
    ]

    //       const socials = [
    //     {
    //       name: "Instagram",
    //       icon: <FaInstagram className="text-pink-500" />,
    //       link: "https://www.instagram.com",
    //     },
    //     {
    //       name: "X (Twitter)",
    //       icon: <FaXTwitter />,
    //       link: "https://twitter.com",
    //     },
    //     {
    //       name: "YouTube",
    //       icon: <FaYoutube className="text-red-600" />,
    //       link: "https://www.youtube.com",
    //     },
    //     {
    //       name: "LinkedIn",
    //       icon: <FaLinkedin className="text-blue-600" />,
    //       link: "https://www.linkedin.com",
    //     },
    //   ];

    return (
        <div>
            <div className='p-4 bg-[#0C0C0C] my-6 sm:my-10 rounded-lg'>
                <h2 className='text-white font-inter font-semibold text-[20px] leading-[28px] tracking-[0] align-middle'>Meet your Instructor</h2>
                <div className='mt-4 flex justify-between'>
                    <div className='flex gap-5 '>
                        <div className='flex items-start'>
                            <img src={instructorImage} alt="" />
                        </div>
                        <div>
                            <h4 className='text-yellow font-inter font-semibold text-[16px] leading-[17.5px] tracking-[0] align-middle'>Sathesh PC</h4>
                            <p className='text-[#8A8A8A] mt-2 font-inter font-normal text-[14px] leading-[17.5px] tracking-[0] align-middle'>(Instructor, Java Specialist, YouTuber)</p>
                            <div className='flex flex-col gap-3 pl-1 my-3'>
                                {
                                    inst.map((value, i) => (
                                        <div key={i} className='flex gap-2'>
                                            <img src={value.img} alt="" />
                                            <p className='text-[#ffff] font-inter font-normal text-[14px] leading-[17.5px] tracking-[0] align-middle'>{value.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:block'>
                        <img src={instituteLogo} alt="" className='border-[8px] rounded-2xl border-[#181818] mr-14' />
                    </div>
                </div>

                {/* <div className='my-7'>
                     <h5 className='mb-1 text-white font-inter font-normal text-[14px] leading-[17.5px] tracking-[0] align-middle'>Follow your Instructor on:</h5>
                     <div className='flex gap-2'>

                     </div>

                </div> */}

                <div className="text-white my-7">
                    <p className="mb-3 font-inter font-normal text-[14px] leading-[17.5px] tracking-[0] align-middle">Follow your Instructor on:</p>

                    <div className="md:flex gap-2 hidden ">
                        {sm.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 justify-between bg-[#2a2a2a] hover:bg-[#333] px-3 py-2 rounded-md transition"
                            >
                                <img src={social.logo} alt="" />
                                <p className="text-sm">{social.name}</p>
                                <img src={social.link_i} alt="" />
                            </a>
                        ))}
                    </div>

                    <div className="flex gap-2  md:hidden">
                        {sm.slice(0,2).map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 justify-between bg-[#2a2a2a] hover:bg-[#333] px-3 py-2 rounded-md transition"
                            >
                                <img src={social.logo} alt="" />
                                <p className="text-sm">{social.name}</p>
                                <img src={social.link_i} alt="" />
                            </a>
                        ))}
                    </div>


                    <div className="flex gap-2  md:hidden mt-2">
                        {sm.slice(2,5).map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 justify-between bg-[#2a2a2a] hover:bg-[#333] px-3 py-2 rounded-md transition"
                            >
                                <img src={social.logo} alt="" />
                                <p className="text-sm">{social.name}</p>
                                <img src={social.link_i} alt="" />
                            </a>
                        ))}
                    </div>


                </div>

                
                <div className='mt-3 flex flex-col gap-5 text-white'>
                    {para.map((data,i)=>(
                        <p key={i} className='font-inter font-normal text-[16px] leading-[20px] align-middle'>{data}</p>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Instructor