import { X } from "lucide-react";
import { assets } from "../../assets/assets";
import { useFormContext } from "../../context/FormContext";


const ApplyModal = ({ open, onClose }) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 pt-5 mt-16">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className="relative z-10 w-full max-w-[360px] sm:max-w-[380px]
                   rounded-xl bg-black border border-white/10 p-4 sm:p-5 text-white"
            >

                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h2 className=" font-semibold text-[13px] md:text-[15px] leading-tight uppercase">
                            <span className="text-yellow">Struggling</span> to figure it out alone?
                        </h2>

                        <div className="text-[#8A8A8A]">
                            <span className="text-[11px] ">Get Expert</span>
                            <span className="relative inline-flex items-center mt-1 px-3 py-1">

                                {/* SVG Outline */}
                                <img
                                    src={assets.outer_line}
                                    alt=""
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                />

                                {/* Text */}
                                <span className="relative z-10 text-[11px] ">
                                    <span className="">1:1 Guidance</span>
                                </span>

                            </span>
                        </div>


                    </div>

                    <button
                        onClick={onClose}
                        className="w-7 h-7 rounded-full border border-white/20
                       flex items-center justify-center hover:bg-white/10"
                    >
                        <X size={14} />
                    </button>
                </div>

                {/* Form */}
                <form className="mt-4 space-y-3">

                    {/* Input */}
                    {[
                        { label: "Name*", placeholder: "Your Name", type: "text" },
                        { label: "Email*", placeholder: "yourname@gmail.com", type: "email" },
                    ].map((f, i) => (
                        <div key={i}>
                            <label className="text-xs text-white/70">{f.label}</label>
                            <input
                                type={f.type}
                                placeholder={f.placeholder}
                                className="mt-1 w-full bg-[#141414] border border-white/10
                           rounded-md px-3 py-2.5 text-sm outline-none
                           placeholder:text-white/30"
                            />
                        </div>
                    ))}

                    {/* Phone */}
                    <div>
                        <label className="text-xs text-white/70">Phone Number*</label>
                        <div className="mt-1 flex gap-2">
                            <div className="flex items-center gap-1 px-2 bg-[#141414]
                              border border-white/10 rounded-md text-xs">
                                🇮🇳 +91
                            </div>
                            <input
                                type="tel"
                                placeholder="Enter WhatsApp Number"
                                className="flex-1 bg-[#141414] border border-white/10
                           rounded-md px-3 py-2.5 text-sm outline-none
                           placeholder:text-white/30"
                            />
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <label className="text-xs text-white/70">
                            Educational qualification
                        </label>
                        <input
                            placeholder="Bachelor of Engineering"
                            className="mt-1 w-full bg-[#141414] border border-white/10
                         rounded-md px-3 py-2.5 text-sm outline-none
                         placeholder:text-white/30"
                        />
                    </div>

                    {/* Profile */}
                    <div>
                        <label className="text-xs text-white/70">Current Profile</label>
                        <select
                            className="mt-1 w-full bg-[#141414] border border-white/10
                         rounded-md px-3 py-2.5 text-sm outline-none text-white/60"
                        >
                            <option>Select</option>
                            <option>Student</option>
                            <option>Working Professional</option>
                            <option>Business Owner</option>
                        </select>
                    </div>



                    <button
                        type="submit"
                        className="mt-2 w-full bg-yellow text-black font-semibold
             py-2.5 rounded-md text-sm flex items-center justify-center gap-2"
                    >
                        <img
                            src={assets.help}
                            alt="Support"
                            className="w-4 h-4"
                        />
                        Get Fast Help
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ApplyModal;


