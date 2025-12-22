import { X } from "lucide-react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

/* ===================== FORM CONFIG ===================== */
const FORM_FIELDS = [
    {
        name: "name",
        label: "Name*",
        type: "text",
        placeholder: "Your Name",
    },
    {
        name: "email",
        label: "Email*",
        type: "email",
        placeholder: "yourname@gmail.com",
    },
    {
        name: "phone",
        label: "Phone Number*",
        type: "tel",
        placeholder: "Enter WhatsApp Number",
        isPhone: true,
    },

];



/* ===================== FIELD RENDERER ===================== */
const FieldRenderer = ({ field }) => {
    const baseInput =
        "mt-1 w-full bg-[#141414] border border-white/10 rounded-md px-3 py-2.5 text-sm outline-none placeholder:text-white/30";

    /* Select */
    if (field.type === "select") {
        return (
            <div>
                <label className="text-xs text-white/70">{field.label}</label>
                <select className={`${baseInput} text-white/60`}>
                    <option>Select</option>
                    {field.options.map((opt) => (
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </div>
        );
    }

    /* Phone */
    if (field.isPhone) {
        return (
            <div>
                <label className="text-xs text-white/70">{field.label}</label>
                <div className="mt-1 flex gap-2">
                    <div
                        className="flex items-center gap-1 px-2 bg-[#141414]
                       border border-white/10 rounded-md text-[12px] mt-1">
                        🇮🇳 +91
                    </div>
                    <input
                        type="tel"
                        placeholder={field.placeholder}
                        className={`flex-1 ${baseInput}`}
                        required
                    />
                </div>
            </div>
        );
    }




    /* Default Input */
    return (
        <div>
            <label className="text-xs text-white/70">{field.label}</label>
            <input
                type={field.type}
                placeholder={field.placeholder}
                className={baseInput}
                required
            />
        </div>
    );
};

/* ===================== MAIN MODAL ===================== */
const ApplyModal = ({ open, onClose }) => {
    if (!open) return null;

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/rhsca/video")
    }

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
                   rounded-xl bg-black border border-white/10
                   p-4 sm:p-5 text-white"
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                    <div>
                        <h2 className="font-semibold text-[13px] md:text-[15px] uppercase">
                            <span className="text-yellow">Struggling</span> to figure it out alone?
                        </h2>

                        <div className="text-[#8A8A8A] flex items-center gap-1 text-[11px]">
                            <span>Get Expert</span>
                            <span className="relative inline-flex items-center px-3 py-1">
                                <img
                                    src={assets.outer_line}
                                    alt=""
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                />
                                <span className="relative z-10">1:1 Guidance</span>
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
                <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                    {FORM_FIELDS.map((field) => (
                        <FieldRenderer key={field.name} field={field} />
                    ))}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-2 w-full bg-yellow text-black font-semibold
                       py-2.5 rounded-md text-sm
                       flex items-center justify-center gap-2"
                    >
                        Watch The System Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplyModal;

