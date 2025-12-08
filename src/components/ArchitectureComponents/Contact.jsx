import React, { useState } from 'react';
import toast from 'react-hot-toast';

import { useZohoForm } from '../../hooks/useZohoForm';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: '',
        phone: ''
    });

    // Use Zoho form hook
    const { submitToZoho, isSubmitting, scriptLoaded } = useZohoForm({
        leadSource: 'Architecture Course Landing Page'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const validateForm = () => {
        if (!formData.name.trim()) {
            toast.error('Please enter your name');
            return false;
        }
        if (!formData.email.trim()) {
            toast.error('Please enter your email');
            return false;
        }
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return false;
        }
        if (!formData.phone.trim()) {
            toast.error('Please enter your phone number');
            return false;
        }
        // Basic phone validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            toast.error('Please enter a valid 10-digit phone number');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Submit to Zoho using the hook
        const success = await submitToZoho(formData);

        // Reset form on success
        if (success) {
            setFormData({
                name: '',
                email: '',
                question: '',
                phone: ''
            });
        }
    };

    return (
        <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[328] w-full max-w-7xl mx-auto py-4 px-4 overflow-hidden">
            <div className="w-full self-stretch shrink-0 relative z-[329]">
                <div className="flex w-full max-w-[935px] flex-col gap-[16px] items-center flex-nowrap relative z-[331] mt-[4px] mx-auto">
                    <div className="flex w-fit px-4 py-3 gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#1a1e00] rounded-[9px] border-solid border border-[#635e00] relative z-[332]">
                        <div className="w-[24px] h-[24px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-02/YwPZCy8kZe.png)] bg-[length:100%_100%] bg-no-repeat relative z-[333]" />
                        <span className="h-[19px] shrink-0 basis-auto font-inter text-[16px] font-medium leading-[19px] text-[#fff200] relative text-left uppercase whitespace-nowrap z-[334]">
                            Talk to expert
                        </span>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[335]">
                        <span className="h-[49px] self-stretch shrink-0 basis-auto font-clash text-[32px] md:text-[40px] font-semibold leading-[49px] text-[#fff] tracking-[0.8px] relative text-center uppercase whitespace-nowrap z-[336]">
                            Get Personal Guidance
                        </span>
                    </div>
                </div>

                <div className="w-full relative z-[337] mt-2">
                    <div className="hidden lg:block w-full max-w-[927px] h-[391px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-02/5Dx9gHA80S.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[330]" />

                    <div className="flex flex-col lg:flex-row w-full gap-[20px] justify-center items-start flex-nowrap relative z-[337]">
                        {/* Left Image Section */}
                        <div className="flex w-full lg:w-[630px] gap-[20px] items-start self-stretch shrink-0 flex-wrap relative z-[338]">
                            <div className="h-[500px] sm:h-[600px] lg:h-[716px] grow basis-0 rounded-[8px] relative overflow-hidden z-[339] bg-[#0A0A0A] border border-neutral-800">
                                <div className="absolute inset-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-02/bDDpzfCD0O.png)] bg-cover bg-center bg-no-repeat z-[340]" />
                                <div className="absolute bottom-0 left-[12px] right-[12px] sm:left-[24px] sm:right-[24px] h-full bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-02/3W0TwD11Bj.png)] bg-contain bg-bottom bg-no-repeat z-[343]" />
                                <div className="hidden sm:block w-[90%] max-w-[597px] h-[97px] bg-[rgba(0,0,0,0.1)] rounded-[10px] absolute bottom-[18px] left-[18px] z-[344]" />
                            </div>
                        </div>

                        {/* Right Form Section */}
                        <form onSubmit={handleSubmit} className="flex p-[24px] flex-col justify-between items-start self-stretch grow shrink-0 basis-0 flex-nowrap bg-[rgba(0,0,0,0.75)] rounded-[16px] border-solid border border-[#2d2d2d] relative z-[345]">
                            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[346]">
                                <div className="w-[91px] h-[91px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-02/RLpjYqRbqf.png)] bg-[length:100%_100%] bg-no-repeat relative z-[347]" />
                                <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[348]">
                                    <span className="self-stretch shrink-0 basis-auto font-inter text-[28px] md:text-[36px] font-medium leading-[1.2] text-[#fff] relative text-left z-[349]">
                                        Have Questions? Reach out to us.
                                    </span>
                                    <span className="flex w-full justify-start items-center self-stretch shrink-0 font-inter text-[16px] font-normal leading-[19px] text-[#8a8a8a] relative text-left z-[350]">
                                        Have doubts about starting or scaling your architecture,
                                        interior, or construction firm? Ask directly.{" "}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[351] w-full mt-8">
                                {/* Name Input */}
                                <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[352]">
                                    <span className="h-[17px] self-stretch shrink-0 basis-auto font-inter text-[14px] font-normal leading-[17px] text-[#9c9c9c] relative text-left whitespace-nowrap z-[353]">
                                        Name*
                                    </span>
                                    <div className="flex h-[40px] py-[4px] pl-[12px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[rgba(29,29,29,0.8)] rounded-[4px] relative z-[354]">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            disabled={isSubmitting}
                                            className="w-full bg-transparent border-none outline-none font-inter text-[14px] font-normal text-[#fff] placeholder-[#4e4e4e] disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[356]">
                                    <span className="h-[17px] self-stretch shrink-0 basis-auto font-inter text-[14px] font-normal leading-[17px] text-[#9c9c9c] relative text-left whitespace-nowrap z-[357]">
                                        Email*
                                    </span>
                                    <div className="flex h-[40px] py-[4px] pl-[12px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[rgba(29,29,29,0.8)] rounded-[4px] relative z-[358]">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="yourname@gmail.com"
                                            disabled={isSubmitting}
                                            className="w-full bg-transparent border-none outline-none font-inter text-[14px] font-normal text-[#fff] placeholder-[#4e4e4e] disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                {/* Question Input */}
                                <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[360]">
                                    <span className="h-[17px] self-stretch shrink-0 basis-auto font-inter text-[14px] font-normal leading-[17px] text-[#9c9c9c] relative text-left whitespace-nowrap z-[361]">
                                        Your Question
                                    </span>
                                    <div className="flex h-[40px] py-[4px] pl-[12px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[rgba(29,29,29,0.8)] rounded-[4px] relative z-[362]">
                                        <input
                                            type="text"
                                            name="question"
                                            value={formData.question}
                                            onChange={handleChange}
                                            placeholder="Tell me what you're struggling with"
                                            disabled={isSubmitting}
                                            className="w-full bg-transparent border-none outline-none font-inter text-[14px] font-normal text-[#fff] placeholder-[#4e4e4e] disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[364]">
                                    <span className="h-[17px] self-stretch shrink-0 basis-auto font-inter text-[14px] font-normal leading-[17px] text-[#9c9c9c] relative text-left whitespace-nowrap z-[365]">
                                        Phone Number*
                                    </span>
                                    <div className="flex gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[366]">
                                        <div className="flex w-[85px] py-[4px] pl-[12px] gap-[4px] items-center self-stretch shrink-0 flex-nowrap bg-[rgba(29,29,29,0.8)] rounded-[4px] relative z-[367]">
                                            <div className="w-[20px] h-[15px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-02/u6epP17GUB.png)] bg-cover bg-no-repeat relative overflow-hidden z-[368]" />
                                            <span className="h-[17px] shrink-0 basis-auto font-inter text-[14px] font-normal leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[369]">
                                                +91
                                            </span>
                                            <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-12-02/E4KQFSMyth.png)] bg-[length:100%_100%] bg-no-repeat relative z-[370]" />
                                        </div>
                                        <div className="flex h-[40px] py-[4px] pl-[12px] gap-[10px] items-center grow shrink-0 basis-0 flex-nowrap bg-[rgba(29,29,29,0.8)] rounded-[4px] relative z-[371]">
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter WhatsApp Number"
                                                disabled={isSubmitting}
                                                maxLength="10"
                                                className="w-full bg-transparent border-none outline-none font-inter text-[14px] font-normal text-[#fff] placeholder-[#4e4e4e] disabled:opacity-50"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-[16px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[373] w-full mt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex py-[13.5px] px-[21.5px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#fff200] rounded-[4px] relative z-[374] hover:bg-yellow-400 transition-colors cursor-pointer border-none glow-btn disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="h-[22px] shrink-0 basis-auto font-inter text-[18px] font-semibold leading-[22px] text-[#000] relative text-left whitespace-nowrap z-[375]">
                                        {isSubmitting ? 'Submitting...' : 'Talk to an Expert'}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
