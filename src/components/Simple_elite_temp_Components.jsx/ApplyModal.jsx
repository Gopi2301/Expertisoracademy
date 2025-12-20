import { X, Headphones } from "lucide-react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { useZohoForm } from "../../hooks/useZohoForm";

const ApplyModal = ({ open, onClose, formAction, courseName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        profile: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);

    // Use Zoho form hook
    const { submitToZoho, isSubmitting } = useZohoForm({
        formAction: formAction
    });

    if (!open) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        console.log('[ApplyModal] Form submission started');
        console.log('[ApplyModal] Course name:', courseName);
        console.log('[ApplyModal] Form data:', formData);

        // Submit using the hook
        const success = await submitToZoho({
            name: formData.name,
            email: formData.email,
            phone: `+91${formData.phone}`, // Combine country code with phone
            education: formData.qualification,
            profile: formData.profile,
            courseName: courseName || 'Expertisor Academy Course'
        });

        if (success) {
            console.log('[ApplyModal] ✅ Form submitted successfully');
            setSubmitStatus('success');
            setTimeout(() => {
                onClose();
                setFormData({ name: '', email: '', phone: '', qualification: '', profile: '' });
                setSubmitStatus(null);
            }, 2000);
        } else {
            console.log('[ApplyModal] ❌ Form submission failed');
            setSubmitStatus('error');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-black/90 rounded-xl shadow-xl max-w-md w-full mx-4 border border-[#7B6E3E] p-6"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-neutral-400 hover:text-white transition"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#FFF200]/20 flex items-center justify-center">
                        <Headphones className="w-5 h-5 text-[#FFF200]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Talk to Expert</h3>
                        <p className="text-sm text-neutral-400">Get personalized guidance</p>
                    </div>
                </div>

                {/* Form */}
                <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-sm text-neutral-400 mb-1">Name*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFF200] transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm text-neutral-400 mb-1">Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="yourname@gmail.com"
                            className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFF200] transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm text-neutral-400 mb-1">Phone Number*</label>
                        <div className="flex gap-2">
                            <div className="flex items-center px-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white">
                                <span>🇮🇳 +91</span>
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter WhatsApp Number"
                                className="flex-1 px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFF200] transition"
                            />
                        </div>
                    </div>

                    {/* Qualification */}
                    <div>
                        <label className="block text-sm text-neutral-400 mb-1">Educational Qualification</label>
                        <input
                            type="text"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            placeholder="e.g., B.Tech, MBA"
                            className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFF200] transition"
                        />
                    </div>

                    {/* Profile */}
                    <div>
                        <label className="block text-sm text-neutral-400 mb-1">Current Profile</label>
                        <select
                            name="profile"
                            value={formData.profile}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-[#FFF200] transition"
                        >
                            <option value="">Select</option>
                            <option value="student">Student</option>
                            <option value="professional">Professional</option>
                            <option value="entrepreneur">Entrepreneur</option>
                            <option value="freelancer">Freelancer</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-[#FFF200] hover:bg-[#FFD500] text-black font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                Submitting...
                            </>
                        ) : submitStatus === 'success' ? (
                            <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Submitted!
                            </>
                        ) : (
                            'Get Fast Help'
                        )}
                    </button>

                    {submitStatus === 'error' && (
                        <p className="text-red-400 text-sm text-center">
                            Failed to submit. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ApplyModal;
