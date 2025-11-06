import React from 'react'
import htmlIcon from '../../assets/images/html.svg';
import javascriptIcon from '../../assets/images/js.svg';
import reactIcon from '../../assets/images/react.svg';
import nodeIcon from '../../assets/images/node.svg';
import expressIcon from '../../assets/images/express.svg';
import githubIcon from '../../assets/images/github_im.svg';


const Skill = () => {

    const skills = [
        { name: 'HTML', img: htmlIcon, bg: 'bg-[#3A1400]' },
        { name: 'Javascript', img: javascriptIcon, bg: 'bg-[#3A2C00]' },
        { name: 'React-JS', img: reactIcon, bg: 'bg-[#00283A]' },
        { name: 'Node-JS', img: nodeIcon, bg: 'bg-[#003A1A]' },
        { name: 'Express-JS', img: expressIcon, bg: 'bg-[#3A0034]' },
        { name: 'Github', img: githubIcon, bg: 'bg-[#3A3A3A]' },
    ];

    return (
        <div>
            <div className='bg-[#0C0C0C] p-4 rounded-lg mt-6 sm:mt-10'>
                <h3 className='font-inter text-white font-semibold text-[20px] leading-[28px] tracking-[0] align-middle'>Skills</h3>
                <div className='mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4'>
                    {skills.map((skill, index) => (
                        <div key={index} className={`${skill.bg} py-4 rounded-lg`}>
                            <div className='flex justify-center'>
                                <img  src={skill.img} alt="" className='w-[92px] h-[92px]'/>
                            </div>
                            <p className=' text-white font-medium text-[14px] leading-[22px] tracking-[0] text-center'>{skill.name}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skill