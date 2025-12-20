import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { X, Play, ArrowRight, Download, ChevronDown } from 'lucide-react';
import { getCourseBySlug, saveLead } from '../services/api';
import toast from 'react-hot-toast';

const CourseDetail = () => {
    const { slug } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        profile: ''
    });
    const videoRef = useRef(null);

    useEffect(() => {
        const loadCourse = async () => {
            try {
                const data = await getCourseBySlug(slug);
                if (!data || data.status === 'DRAFT') {
                    setNotFound(true);
                    return;
                }
                setCourse(data);
            } catch (error) {
                console.error('Error loading course:', error);
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        loadCourse();
    }, [slug]);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play();
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Prepare data for Zoho
        const zohoData = new FormData();
        zohoData.append('SingleLine', formData.name); // Name
        zohoData.append('Email', formData.email); // Email

        // Split phone if needed or send as is. Zoho generic example usually takes full number or split.
        // Final_form uses PhoneNumber_countrycode and PhoneNumber_countrycodeval for split?
        // Reading Final_form/index.html:
        // name="PhoneNumber_countrycode" (Number)
        // name="PhoneNumber_countrycodeval" (Code)
        // BUT my form uses a single formData.phone string.
        // I will assume simple mapping or split. 
        // Let's send the full string to PhoneNumber_countrycode and hope Zoho handles it or just use a text field if I could change it.
        // But to be safe, let's map strictly to what I saw in Final_form validation?
        // Actually, let's just send 'number' and 'code' if I can.
        // My UI has +91 hardcoded visually, and input is separate.
        zohoData.append('PhoneNumber_countrycode', formData.phone);
        zohoData.append('PhoneNumber_countrycodeval', '+91'); // Hardcoded in UI

        // Msg / Course Name
        // User wants course name passed. MultiLine is "msg".
        const courseName = course?.title || slug;
        zohoData.append('MultiLine', `Interested in Course: ${courseName}`);

        // Extra fields (Qualification, Profile) - Zoho might drop these if not matched, 
        // but I'll append them to MultiLine to Ensure they are captured.
        const extraDetails = `\nQualification: ${formData.qualification}\nProfile: ${formData.profile}`;
        zohoData.append('MultiLine', `Interested in Course: ${courseName}${extraDetails}`);

        // Hidden fields from Final_form
        zohoData.append('zf_referrer_name', '');
        zohoData.append('zf_redirect_url', '');
        zohoData.append('zc_gad', '');

        const stringData = new URLSearchParams(zohoData).toString();

        try {
            await fetch('https://forms.zohopublic.in/expertisoracademy/form/demo2/formperma/ZIJ0tdUgCx77bWFaqOiUKXOsgzGWxRZyrwo9VWpUY-g/htmlRecords/submit', {
                method: 'POST',
                body: zohoData,
                mode: 'no-cors' // Important for client-side submission to external domain
            });

            // Success handling
            toast.success('Thank you! We will contact you soon.');
            setShowFormModal(false);
            setFormData({ name: '', email: '', phone: '', qualification: '', profile: '' });
        } catch (error) {
            console.error('Zoho submission error:', error);
            toast.error('Something went wrong. Please try again.');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0805] flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-2 border-yellow border-t-transparent rounded-full"></div>
            </div>
        );
    }

    if (notFound) {
        return <Navigate to="/404" replace />;
    }

    const hero = course.hero_data || {};
    const form = course.form_data || {};

    // Render headline with highlights - using italic font
    const renderHeadline = () => {
        if (!hero.headline?.parts) return course.title;
        return hero.headline.parts.map((part, index) => (
            <span key={index} className={part.highlight ? 'text-yellow' : ''}>
                {part.text}
            </span>
        ));
    };

    // Render badge text with highlight
    const renderBadgeText = () => {
        const text = hero.badge?.text || '';
        const highlight = hero.badge?.highlight || '';

        if (!highlight || !text.includes(highlight)) {
            return <span className="text-neutral-300">{text}</span>;
        }

        const parts = text.split(highlight);
        return (
            <>
                <span className="text-neutral-300">{parts[0]}</span>
                <span className="text-yellow font-semibold">{highlight}</span>
                <span className="text-neutral-300">{parts[1]}</span>
            </>
        );
    };

    return (
        <div className="min-h-screen bg-[#0a0805] relative overflow-hidden">
            {/* Lens Flare Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top-left golden lens flare */}
                <div
                    className="absolute -top-20 -left-20 w-[800px] h-[800px]"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,200,50,0.3) 0%, rgba(200,150,30,0.15) 30%, transparent 70%)',
                        transform: 'rotate(-30deg)',
                    }}
                />
                {/* Diagonal light streak */}
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,220,100,0.15) 0%, transparent 40%)',
                    }}
                />
                {/* Bottom-left golden glow */}
                <div
                    className="absolute -bottom-40 -left-40 w-[600px] h-[600px]"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,180,50,0.25) 0%, rgba(180,120,20,0.1) 40%, transparent 70%)',
                    }}
                />
                {/* Bottom-right accent */}
                <div
                    className="absolute -bottom-20 -right-20 w-[400px] h-[400px]"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,200,80,0.15) 0%, transparent 60%)',
                    }}
                />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-24">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Headline - Playfair Display Italic (FIRST) - LARGER */}
                    <h1 className="font-playfair italic text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-10">
                        {renderHeadline()}
                    </h1>

                    {/* Guarantee/Subheadline Text with Gift Emoji (BELOW HEADLINE) - LARGER */}
                    {hero.subheadline && (
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-neutral-800/50 backdrop-blur-sm rounded-full mb-12 border border-neutral-700/40">
                            <span className="text-2xl">🎁</span>
                            <span className="text-base md:text-lg text-neutral-300">
                                {hero.badge?.highlight ? (
                                    <>
                                        {hero.subheadline.split(hero.badge.highlight).map((part, i, arr) => (
                                            <React.Fragment key={i}>
                                                {part}
                                                {i < arr.length - 1 && (
                                                    <span className="text-yellow underline underline-offset-4 font-medium">{hero.badge.highlight}</span>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </>
                                ) : hero.subheadline}
                            </span>
                        </div>
                    )}

                    {/* Video Player - LARGER */}
                    {hero.video?.url && (
                        <div className="relative max-w-4xl mx-auto mb-14 rounded-2xl overflow-hidden">
                            <video
                                ref={videoRef}
                                src={hero.video.url}
                                className="w-full aspect-video object-cover"
                                playsInline
                                muted
                                loop
                                poster={course.thumbnail || ''}
                            />
                            {/* Play Button Overlay - LARGER */}
                            {!isVideoPlaying && (
                                <button
                                    onClick={handlePlayVideo}
                                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                                >
                                    <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center hover:scale-105 transition-transform shadow-xl" style={{ width: '72px', height: '72px' }}>
                                        <Play className="w-8 h-8 md:w-9 md:h-9 text-black fill-black ml-1" />
                                    </div>
                                </button>
                            )}
                        </div>
                    )}

                    {/* CTA Buttons - LARGER */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setShowFormModal(true)}
                            className="inline-flex items-center gap-3 px-10 py-4 bg-yellow text-black font-bold text-lg rounded-md transition-all hover:bg-yellow-400"
                        >
                            {hero.buttons?.primary?.text || 'Apply Now'}
                            <ArrowRight className="w-6 h-6" />
                        </button>
                        {hero.buttons?.secondary?.text && (
                            hero.buttons.secondary.url ? (
                                <a
                                    href={hero.buttons.secondary.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-neutral-700/60 hover:bg-neutral-600/60 text-neutral-200 font-medium text-lg rounded-md transition-all"
                                >
                                    {hero.buttons.secondary.text}
                                    <Download className="w-6 h-6" />
                                </a>
                            ) : (
                                <button
                                    onClick={() => setShowFormModal(true)}
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-neutral-700/60 hover:bg-neutral-600/60 text-neutral-200 font-medium text-lg rounded-md transition-all"
                                >
                                    {hero.buttons.secondary.text}
                                    <Download className="w-6 h-6" />
                                </button>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Form Modal */}
            {showFormModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-[#111] rounded-2xl w-full max-w-lg p-8 relative border border-neutral-800 shadow-2xl">
                        <button
                            onClick={() => setShowFormModal(false)}
                            className="absolute top-4 right-4 bg-neutral-800 p-1 rounded-full text-neutral-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/50 mb-3">
                                <span className="text-xs text-neutral-400">Get Expert</span>
                                <span className="text-xs text-white border border-neutral-600 px-1.5 rounded-full">1:1 Guidance</span>
                            </div>
                            <h2 className="text-2xl font-black text-white uppercase leading-tight">
                                <span className="text-yellow">STRUGGLING</span> TO FIGURE <br />IT OUT ALONE?
                            </h2>
                        </div>

                        <form
                            action={form.formAction}
                            method="POST"
                            onSubmit={handleFormSubmit}
                            className="space-y-4"
                        >
                            {/* Name */}
                            <div>
                                <label className="block text-xs text-neutral-400 mb-1.5">Name*</label>
                                <input
                                    type="text"
                                    name="SingleLine"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs text-neutral-400 mb-1.5">Email*</label>
                                <input
                                    type="email"
                                    name="Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="yourname@gmail.com"
                                    required
                                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-xs text-neutral-400 mb-1.5">Phone Number*</label>
                                <div className="flex">
                                    <div className="flex items-center gap-2 px-3 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-l-lg text-neutral-400 text-sm">
                                        <span>🇮🇳</span>
                                        <span>+91</span>
                                        <ChevronDown className="w-3 h-3" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="PhoneNumber_countrycode"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="Enter WhatsApp Number"
                                        required
                                        className="flex-1 px-4 py-3 bg-neutral-800/50 border border-l-0 border-neutral-700/50 rounded-r-lg text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Educational Qualification */}
                            <div>
                                <label className="block text-xs text-neutral-400 mb-1.5">Educational qualification</label>
                                <input
                                    type="text"
                                    name="Qualification"
                                    value={formData.qualification}
                                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                                    placeholder="Bachelor of Engineering"
                                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                                />
                            </div>

                            {/* Current Profile */}
                            <div>
                                <label className="block text-xs text-neutral-400 mb-1.5">Current Profile</label>
                                <div className="relative">
                                    <select
                                        name="CurrentProfile"
                                        value={formData.profile}
                                        onChange={(e) => setFormData({ ...formData, profile: e.target.value })}
                                        className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-white appearance-none text-sm focus:outline-none focus:border-neutral-600 transition-colors placeholder-neutral-600"
                                    >
                                        <option value="" className="bg-neutral-900 text-neutral-500">Select</option>
                                        <option value="Student" className="bg-neutral-900">Student</option>
                                        <option value="Working Professional" className="bg-neutral-900">Working Professional</option>
                                        <option value="Business Owner" className="bg-neutral-900">Business Owner</option>
                                        <option value="Other" className="bg-neutral-900">Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full py-3.5 bg-yellow hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors mt-4 flex items-center justify-center gap-2"
                            >
                                <span className="text-lg">Get Fast Help</span>
                                {/* Icon if needed */}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseDetail;
