// import { X } from "lucide-react";

// const ApplyModal = ({ open, onClose }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">

//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="relative z-10 w-[90%] max-w-md bg-black border border-yellow/30 rounded-xl p-6 text-white">

//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-white/70 hover:text-white"
//         >
//           <X size={18} />
//         </button>

//         {/* Title */}
//         <h3 className="text-yellow font-semibold text-sm uppercase tracking-wide">
//           Struggling to figure it out alone?
//         </h3>
//         <p className="text-white text-lg font-semibold mt-1">
//           Get Expert Guidance
//         </p>

//         {/* Form */}
//         <form className="mt-4 space-y-3">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-2 outline-none"
//           />

//           <input
//             type="email"
//             placeholder="yourname@gmail.com"
//             className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-2 outline-none"
//           />

//           <input
//             type="tel"
//             placeholder="Enter WhatsApp Number"
//             className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-2 outline-none"
//           />

//           <select className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-2 outline-none">
//             <option>Educational qualification</option>
//             <option>Bachelor of Engineering</option>
//             <option>Student</option>
//             <option>Working Professional</option>
//           </select>

//           <button
//             type="submit"
//             className="w-full bg-yellow text-black font-semibold py-3 rounded-md mt-2"
//           >
//             🚀 Get Fast Help
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };


// export default ApplyModal;








// import { X } from "lucide-react";

// const ApplyModal = ({ open, onClose }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center">

//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Card */}
//       <div className="relative z-10 w-[92%] max-w-md rounded-2xl bg-black p-5 border border-white/10 text-white">

//         {/* Header */}
//         <div className="flex items-start justify-between">
//           <div>
//             <h2 className="text-yellow font-semibold text-[14px] tracking-wide uppercase">
//               Struggling to figure it out alone?
//             </h2>

//             <span className="inline-block mt-1 text-xs px-3 py-1 rounded-full border border-white/20 text-white/80">
//               Get Expert <span className="text-yellow">1:1 Guidance</span>
//             </span>
//           </div>

//           <button
//             onClick={onClose}
//             className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
//           >
//             <X size={16} />
//           </button>
//         </div>

//         {/* Form */}
//         <form className="mt-5 space-y-4">

//           {/* Name */}
//           <div>
//             <label className="text-sm text-white/80">
//               Name<span className="text-yellow">*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="mt-1 w-full bg-[#141414] border border-white/10 rounded-md px-4 py-3 outline-none placeholder:text-white/30"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-sm text-white/80">
//               Email<span className="text-yellow">*</span>
//             </label>
//             <input
//               type="email"
//               placeholder="yourname@gmail.com"
//               className="mt-1 w-full bg-[#141414] border border-white/10 rounded-md px-4 py-3 outline-none placeholder:text-white/30"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="text-sm text-white/80">
//               Phone Number<span className="text-yellow">*</span>
//             </label>

//             <div className="mt-1 flex gap-2">
//               <div className="flex items-center gap-2 px-3 bg-[#141414] border border-white/10 rounded-md">
//                 🇮🇳 <span className="text-sm">+91</span>
//               </div>

//               <input
//                 type="tel"
//                 placeholder="Enter WhatsApp Number"
//                 className="flex-1 bg-[#141414] border border-white/10 rounded-md px-4 py-3 outline-none placeholder:text-white/30"
//               />
//             </div>
//           </div>

//           {/* Education */}
//           <div>
//             <label className="text-sm text-white/80">
//               Educational qualification
//             </label>
//             <input
//               type="text"
//               placeholder="Bachelor of Engineering"
//               className="mt-1 w-full bg-[#141414] border border-white/10 rounded-md px-4 py-3 outline-none placeholder:text-white/30"
//             />
//           </div>

//           {/* Profile */}
//           <div>
//             <label className="text-sm text-white/80">
//               Current Profile
//             </label>
//             <select
//               className="mt-1 w-full bg-[#141414] border border-white/10 rounded-md px-4 py-3 outline-none text-white/60"
//             >
//               <option>Select</option>
//               <option>Student</option>
//               <option>Working Professional</option>
//               <option>Business Owner</option>
//             </select>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="mt-3 w-full bg-yellow text-black font-semibold py-3 rounded-md flex items-center justify-center gap-2"
//           >
//             🎧 Get Fast Help
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplyModal;







import { X } from "lucide-react";
import { assets } from "../../assets/assets";

const ApplyModal = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 pt-5">

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

                        {/* <span className="inline-block mt-1 text-[11px] px-2.5 py-1
                             rounded-full border border-white/20 text-white/80">
              Get Expert <span className="text-yellow">1:1 Guidance</span>
            </span> */}


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
